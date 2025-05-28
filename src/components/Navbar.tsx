import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ThemeToggle";
import { getUser } from "@/utils/supabase/server";
import LogOutButton from "@/components/LogOutButton";

const Navbar = async () => {
  const user = await getUser();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/50 backdrop-blur-lg">
      <nav className="flex items-center justify-between p-4 sm:px-8">
        <Link className="text-2xl font-bold text-primary" href="/">
          Recall
        </Link>
        <div className="flex items-center gap-4">
          {user ? (
            <LogOutButton />
          ) : (
            <Button className="w-24" asChild>
              <Link href="/login">Log In</Link>
            </Button>
          )}
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
