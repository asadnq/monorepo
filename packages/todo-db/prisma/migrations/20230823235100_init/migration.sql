-- CreateEnum
CREATE TYPE "TodoStatus" AS ENUM ('todo', 'doing', 'done');

-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" "TodoStatus" NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
