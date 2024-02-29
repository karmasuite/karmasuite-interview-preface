# karmasuite-interview-preface

KarmaSuite helps non-profit accountants create, track and manage their expenses, grants, and other financial data.

## Glossary

* Expense
  * These are items that non-profits need to pay for.
* Fund
  * Sometimes referred to as `Grant` or `Contract`, this is a funding source that can be used to pay for expenses. These grants have numerous restrictions that prevent them from being used on whatever expense.
* Revenue
  * This is money the non-profit has outside of their grants that can also be used to pay for expenses.
* Cost Center
  *  A department or operation of the non-profit that incurs expenses.

## Context

To give a simplified representation of KarmaSuite:

With KarmaSuite, non-profits upload their grants and expenses then use tools KarmaSuite provides to assign restricted grants to expenses in compliant ways. With this, non-profits receive numerous benefits:
1. Have 1 place to view all of their grant details.
2. Have 1 place to view all of their expenses.
3. Improve visibility to seeing the state of their grants (e.g. remaining funds).
4. Removes significant manual work in staying compliant to grant restrictions and finding grants to assign to expenses.
5. And more... see: https://www.karmasuitesoftware.com/

## Interview Notes

KarmaSuite is a software that operates on accounting data. That means that there is a lot of data to be created and read in various representations. In this interview, you will be reading data from a relational database, transforming this data, then representing it on the frontend.

Some of the tools that will be used in the interview:
1. [drizzle-orm](https://orm.drizzle.team/)
2. [@tanstack/react-query](https://tanstack.com/query/latest)
3. [next](https://nextjs.org/)
4. [typescript](https://www.typescriptlang.org/)
