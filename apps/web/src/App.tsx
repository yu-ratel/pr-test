import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

const _lintReviewCommentTest = 'eslint-convention-review';

export default function App() {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <div>Hi! Byuckchon Frontend Developer</div>
      </QueryClientProvider>
    </main>
  );
}
