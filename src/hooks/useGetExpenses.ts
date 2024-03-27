import { useQuery } from "@tanstack/react-query";
import type { ExpensesPayload } from "../pages/api/expenses";
import { useMemo } from "react";

export const useGetExpenses = () => {
    const requestUrl = useMemo(() => {
        const url = new URL("http://localhost:3000/api/expenses");

        return url.toString();
    }, []);

    return useQuery({
        queryKey: ["expenses"],
        queryFn: async (): Promise<ExpensesPayload> => {
            return await fetch(requestUrl, {
                headers: {
                    "content-type": "application/json",
                },
                method: "get",
            }).then((res) => res.json());
        },
    });
};
