-- CreateTable
CREATE TABLE "contactService" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "phoneNumber" STRING NOT NULL,
    "category" STRING NOT NULL,
    "avatar" STRING NOT NULL,
    "avatarUrl" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contactService_pkey" PRIMARY KEY ("id")
);
