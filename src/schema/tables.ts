import {
    integer,
    sqliteTable,
    text,
    uniqueIndex
} from "drizzle-orm/sqlite-core";

export const account = sqliteTable(
    "account",
    {
        code: text("code").notNull(),
        id: integer("id").primaryKey({ autoIncrement: true }),
        name: text("name").notNull(),
    },
    (table) => ({
        codeIdx: uniqueIndex("account_code_idx").on(table.code),
    }),
);


export const costCenter = sqliteTable(
    "cost_center",
    {
        id: integer("id").primaryKey({ autoIncrement: true }),
        name: text("name").notNull(),
    },
    (table) => ({
        nameIdx: uniqueIndex("cost_center_name_idx").on(table.name),
    }),
);

export const costCenterAllocation = sqliteTable(
    "cost_center_allocation",
    {
        costCenterId: integer("cost_center_id").notNull().references(() => costCenter.id),
        expenseId: integer("expense_id").notNull().references(() => expense.id),
        id: integer("id").primaryKey({ autoIncrement: true }),
    },
);

export const expense = sqliteTable(
    "expense",
    {
        accountId: integer("account_id").notNull().references(() => account.id),
        date: text("date").notNull(),
        description: text("description"),
        id: integer("id").primaryKey({ autoIncrement: true }),
        name: text("name").notNull(),
    },
    (table) => ({
        nameIdx: uniqueIndex("expense_name_idx").on(table.name),
    }),
);

export const fund = sqliteTable(
    "fund",
    {
        id: integer("id").primaryKey({ autoIncrement: true }),
        name: text("name").notNull(),
        totalBudget: integer("total_budget").notNull().default(0),
    },
    (table) => ({
        nameIdx: uniqueIndex("fund_name_idx").on(table.name),
    }),
);

export const fundAllocation = sqliteTable(
    "fund_allocation",
    {
        amount: integer("amount").notNull().default(0),
        allocationId: integer("cost_center_allocation_id").notNull().references(() => costCenterAllocation.id),
        fundId: integer("fund_id").references(() => fund.id),
        id: integer("id").primaryKey({ autoIncrement: true }),
    },
);

export const schema = {
    account,
    costCenter,
    costCenterAllocation,
    expense,
    fund,
    fundAllocation,
};
