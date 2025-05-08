import { CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AuthForm = ({ pageType }: { pageType: "login" | "signUp" }) => {
  const isLoginPage = pageType === "login";

  return (
    <form>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-2 size-5 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>

          <div className="relative">
            <Lock className="absolute left-3 top-2 size-5 text-muted-foreground" />
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="pl-10"
              required
            />
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col space-y-4">
        <Button type="submit" className="w-full py-5">
          {isLoginPage ? "Log In" : "Sign Up"}
        </Button>

        <p className="text-center text-sm">
          {isLoginPage ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link
            href={isLoginPage ? "/sign-up" : "/login"}
            className="font-medium text-rose-500 hover:underline"
          >
            {isLoginPage ? "Sign Up" : "Log In"}
          </Link>
        </p>
      </CardFooter>
    </form>
  );
};

export default AuthForm;
