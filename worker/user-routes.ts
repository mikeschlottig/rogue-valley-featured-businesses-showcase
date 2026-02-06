import { Hono } from "hono";
import type { Env } from './core-utils';
import { CategoryEntity, BusinessEntity } from "./entities";
import { ok, notFound } from './core-utils';
import { MOCK_BLOG_POSTS, MOCK_EVENTS } from "../shared/mock-data";
export function userRoutes(app: Hono<{ Bindings: Env }>) {
  // SEED & HEALTH
  app.get('/api/seed', async (c) => {
    await CategoryEntity.ensureSeed(c.env);
    await BusinessEntity.ensureSeed(c.env);
    return ok(c, { message: 'Seed data verified' });
  });
  // CATEGORIES
  app.get('/api/categories', async (c) => {
    await CategoryEntity.ensureSeed(c.env);
    const page = await CategoryEntity.list(c.env);
    return ok(c, page.items);
  });
  // BUSINESSES
  app.get('/api/businesses', async (c) => {
    await BusinessEntity.ensureSeed(c.env);
    const categorySlug = c.req.query('category');
    const { items } = await BusinessEntity.list(c.env);
    if (categorySlug) {
      return ok(c, items.filter(b => b.categorySlug === categorySlug));
    }
    return ok(c, items);
  });
  app.get('/api/businesses/:slug', async (c) => {
    await BusinessEntity.ensureSeed(c.env);
    const slug = c.req.param('slug');
    const business = await BusinessEntity.findBySlug(c.env, slug);
    if (!business) return notFound(c, 'Business profile not found');
    return ok(c, business);
  });
  // BLOG & EVENTS
  app.get('/api/blog', (c) => ok(c, MOCK_BLOG_POSTS));
  app.get('/api/events', (c) => ok(c, MOCK_EVENTS));
  // SUBMISSIONS
  app.post('/api/submissions', async (c) => {
    const body = await c.req.json();
    console.log('[SUBMISSION RECEIVED]', body);
    return ok(c, { message: 'Application received successfully' });
  });
}