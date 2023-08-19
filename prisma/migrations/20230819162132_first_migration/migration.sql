/*
  Warnings:

  - The `publishedAt` column on the `article` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE `article` ADD COLUMN `publishStatus` BOOLEAN NOT NULL DEFAULT true,
    DROP COLUMN `publishedAt`,
    ADD COLUMN `publishedAt` DATETIME(3) NULL;
