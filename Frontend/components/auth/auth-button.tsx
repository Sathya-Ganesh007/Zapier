import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export async function AuthButton() {
  const supabase = await createClient();

  // You can also use getUser() which will be slower.
  const { data } = await supabase.auth.getClaims();

  const user = data?.claims;

  return user ? (
    <div className="flex items-center gap-4">Hey, {user.email}!</div>
  ) : (
    <div className="flex gap-2"></div>
  );
}
