import { relations } from "drizzle-orm";
import { account, costCenter, costCenterAllocation, expense, fund, fundAllocation } from "./tables";

export const _accountRelations = relations(account, ({ many }) => ({
    expenses: many(expense),
}));

export const _costCenterRelations = relations(costCenter, ({ many }) => ({
    allocations: many(costCenterAllocation),
}));

export const _costCenterAllocationRelations = relations(costCenterAllocation, ({ many, one }) => ({
    costCenter: one(costCenter, {
        fields: [costCenterAllocation.costCenterId],
        references: [costCenter.id],
    }),
    expense: one(expense, {
        fields: [costCenterAllocation.id],
        references: [expense.id],
    }),
    funds: many(fundAllocation),
}));

export const _expenseRelations = relations(expense, ({ many, one }) => ({
    account: one(account, {
        fields: [expense.accountId],
        references: [account.id],
    }),
    allocations: many(costCenterAllocation),
}));

export const fundRelations = relations(fund, ({ many }) => ({
    allocations: many(fundAllocation),
}));

export const _fundAllocationRelations = relations(fundAllocation, ({ one }) => ({
    allocation: one(costCenterAllocation, {
        fields: [fundAllocation.allocationId],
        references: [costCenterAllocation.id],
    }),
    fund: one(fund, {
        fields: [fundAllocation.fundId],
        references: [fund.id],
    }),
}));


