"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function ReactQueryProvider({ children }) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
