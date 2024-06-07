// components/Page.js

'use client'

import { QueryClient, QueryClientProvider } from 'react-query';

import ProjectsList from './ProjectsList';

const queryClient = new QueryClient();

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProjectsList />
    </QueryClientProvider>
  );
}
