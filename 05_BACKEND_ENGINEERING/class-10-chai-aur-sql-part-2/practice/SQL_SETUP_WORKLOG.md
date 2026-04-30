# SQL Setup Worklog

Date: 2026-04-19
For: Combined SQL practice from class 09 + class 10

## Why Errors Are Showing Right Now

The current practice SQL file is written in PostgreSQL style.

Examples:
- `SERIAL`
- `LIMIT`
- `DROP TABLE IF EXISTS`
- `CURRENT_DATE`

If the editor is not connected to PostgreSQL, or if the SQL extension is using some other dialect like SQL Server, then syntax errors can appear even when the file is fine.

So yes:
- right now PostgreSQL is not connected
- this setup has to be done manually
- after proper PostgreSQL setup and correct dialect selection, these errors should go away

## File To Run

Run this file after setup:

- `practice/01_combined_sql_practice_with_solution.sql`

## Step 1. Install PostgreSQL

Use any one option:

1. install PostgreSQL locally
2. use pgAdmin with local PostgreSQL
3. use Docker PostgreSQL if you are comfortable with Docker

Recommended simple path:
- local PostgreSQL + pgAdmin

## Step 2. Create A Database

After PostgreSQL is installed:

1. open `pgAdmin` or `psql`
2. create a new database
3. example database name:

```sql
CREATE DATABASE cohort_sql_practice;
```

## Step 3. Open Correct Database

After database creation:

1. connect to `cohort_sql_practice`
2. open the SQL query tool on this database

If using `psql`, command will look like:

```bash
psql -U postgres -d cohort_sql_practice
```

## Step 4. Make Sure Dialect Is PostgreSQL

In VS Code or your SQL extension:

1. check which SQL connection is active
2. make sure it is PostgreSQL
3. if extension asks for dialect/language mode, choose PostgreSQL

Why this matters:
- if dialect is MSSQL/SQL Server, then `LIMIT` will look wrong
- then editor false syntax errors dikhata rahega

## Step 5. Run The Practice File Step By Step

Open:

- `05_BACKEND_ENGINEERING/class-10-chai-aur-sql-part-2/practice/01_combined_sql_practice_with_solution.sql`

Run it section by section:

1. cleanup
2. table creation
3. inserts
4. select queries
5. update/delete
6. aggregates
7. joins
8. indexes
9. transactions

Best practice:
- poori file ek saath run karne se pehle first 3 sections run karo
- verify tables and data are created
- then rest run karo

## Step 6. Check If Setup Is Working

Run these checks:

```sql
SELECT version();
SELECT * FROM students;
SELECT * FROM courses;
```

If these work, setup is fine.

## Step 7. If Errors Still Come

Check these one by one:

1. are you connected to PostgreSQL?
2. are you inside the correct database?
3. is the SQL editor using PostgreSQL dialect?
4. did you run the table creation section first?
5. are you trying to run only one line like `LIMIT 3;` without the full query above it?

Important:
- `LIMIT 3;` alone will fail
- it must come after a full `SELECT ... ORDER BY ... LIMIT 3;`

## Example Correct Run

This is correct:

```sql
SELECT first_name, current_score
FROM students
ORDER BY current_score DESC
LIMIT 3;
```

This is wrong:

```sql
LIMIT 3;
```

## Final Reminder

Current SQL file is meant for PostgreSQL.

So the fix is mostly:
- connect PostgreSQL properly
- choose PostgreSQL dialect
- run the script in order

After that, these current syntax errors should mostly disappear.
