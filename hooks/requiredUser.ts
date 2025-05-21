import { redirect } from "next/navigation";

import { currentUser } from "@clerk/nextjs/server";

export const useRequiredUser = async () => {
  const user = await currentUser();
  if (!user) {
    return redirect("/");
  }
};
