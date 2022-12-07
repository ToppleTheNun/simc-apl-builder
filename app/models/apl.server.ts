import type { User, Apl } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Apl } from "@prisma/client";

export function getApl({
  id,
  userId,
}: Pick<Apl, "id"> & {
  userId: User["id"];
}) {
  return prisma.apl.findFirst({
    select: { id: true, body: true, title: true },
    where: { id, userId },
  });
}

export function getAplListItems({ userId }: { userId: User["id"] }) {
  return prisma.apl.findMany({
    where: { userId },
    select: { id: true, title: true },
    orderBy: { updatedAt: "desc" },
  });
}

export function createApl({
  body,
  title,
  userId,
}: Pick<Apl, "body" | "title"> & {
  userId: User["id"];
}) {
  return prisma.apl.create({
    data: {
      title,
      body,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export function deleteApl({
  id,
  userId,
}: Pick<Apl, "id"> & { userId: User["id"] }) {
  return prisma.apl.deleteMany({
    where: { id, userId },
  });
}
