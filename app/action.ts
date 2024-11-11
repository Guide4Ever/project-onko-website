"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./db";

export async function postEntry(formData: FormData) {
  "use server";

  const data = await prisma.story.create({
    data: {
      content: formData.get("entry") as string,
      imageUrl: formData.get("imageUrl") as string,
    },
  });

  revalidatePath("/zgodbe-borcev");
}