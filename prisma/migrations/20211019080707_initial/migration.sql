/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `departments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `departments` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "departments" ALTER COLUMN "name" SET DATA TYPE VARCHAR,
ALTER COLUMN "code" SET DATA TYPE VARCHAR;

-- CreateIndex
CREATE UNIQUE INDEX "departments_name_key" ON "departments"("name");

-- CreateIndex
CREATE UNIQUE INDEX "departments_code_key" ON "departments"("code");
