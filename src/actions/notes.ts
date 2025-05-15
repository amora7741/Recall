"use server";

import { prisma } from "@/db/prisma";
import { handleError } from "@/lib/utils";
import { getUser } from "@/utils/supabase/server";

export const createNoteAction = async (noteId: string) => {
  try {
    const user = await getUser();

    if (!user) throw new Error("You must be logged in to create a note.");

    await prisma.note.create({
      data: {
        id: noteId,
        authorId: user.id,
      },
    });

    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
};
