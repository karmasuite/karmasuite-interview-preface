import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FC, ReactNode } from "react";
import { useState } from "react";

export interface QueryProviderProps {
    children?: ReactNode;
}

export const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
