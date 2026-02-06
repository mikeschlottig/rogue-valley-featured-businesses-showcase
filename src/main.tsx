import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage';
import { PublicLayout } from '@/components/layout/PublicLayout';
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout><HomePage /></PublicLayout>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/categories",
    element: <PublicLayout><div className="py-20 text-center">Categories Coming Soon</div></PublicLayout>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/about",
    element: <PublicLayout><div className="py-20 text-center">About Us Coming Soon</div></PublicLayout>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/business/:slug",
    element: <PublicLayout><div className="py-20 text-center">Business Profile Coming Soon</div></PublicLayout>,
    errorElement: <RouteErrorBoundary />,
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>,
)