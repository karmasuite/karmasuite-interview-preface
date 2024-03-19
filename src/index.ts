import { eq } from "drizzle-orm";
import { db } from "./db";

const doRun = async () => {
    const first = await db
        .select({
            expenseId: db.expense.id,
            costCenterId: db.costCenterAllocation.id,
        })
        .from(db.expense)
        .innerJoin(db.costCenterAllocation, eq(db.costCenterAllocation.expenseId, db.expense.id))
        .limit(10)
        .offset(0);

    console.log(JSON.stringify(first, null, 4));

    const second = await db.query.expense.findMany({
        columns: { id: true, },
        with: {
            allocations: {
                columns: { id: true, }
            },
        },
        limit: 10,
        offset: 0,
    });

    console.log(JSON.stringify(second, null, 4));

    process.exit(0);
};

doRun();
