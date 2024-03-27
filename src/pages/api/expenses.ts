import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../db";

export type ExpensesPayload = Awaited<ReturnType<typeof getExpenses>>;

const getExpenses = async (req: NextApiRequest) => {
    /**
     * TODO
     * @description Complete the rest of this function as specified in the README.md
     */
    const result = [] as {}[];

    return result;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ExpensesPayload>,
) {
    const result = await getExpenses(req);

    return res.status(200).json(result);
};
