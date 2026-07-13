/*
  Warnings:

  - You are about to drop the column `weaknesses` on the `AIInsight` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AIInsight" DROP COLUMN "weaknesses",
ADD COLUMN     "growthOpportunities" TEXT[],
ADD COLUMN     "nextMilestone" TEXT;
