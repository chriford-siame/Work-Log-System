/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Log` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Log" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_username_email_idx" ON "User"("username", "email");

-- CreateIndex
CREATE INDEX "Log_hours_note_date_idx" ON "Log"("hours", "note", "date");

-- CreateIndex
CREATE UNIQUE INDEX "Log_id_key" ON "Log"("id");
