"use client";

import { CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Lock, LoaderCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { loginAction, signUpAction } from "@/actions/auth";

const AuthForm = ({ pageType }: { pageType: "login" | "signUp" }) => {
  const isSignUpPage = pageType === "signUp";

  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      let errorMessage;

      if (isSignUpPage) {
        errorMessage = (await signUpAction(email, password)).errorMessage;
      } else {
        errorMessage = (await loginAction(email, password)).errorMessage;
      }

      if (errorMessage) {
        toast({
          variant: "destructive",
          title: "Error",
          description: errorMessage,
        });

        return;
      }

      if (isSignUpPage) {
        toast({
          variant: "success",
          title: "Success!",
          description:
            "You successfully registered! Check your email for confirmation.",
        });
      }

      router.replace("/");
    });
  };

  return (
    <form action={handleSubmit}>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-2 size-5 text-muted-foreground" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              disabled={isPending}
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
              name="password"
              type="password"
              placeholder="••••••••"
              disabled={isPending}
              className="pl-10"
              required
            />
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col space-y-4">
        <Button type="submit" disabled={isPending} className="w-full py-5">
          {isPending ? (
            <LoaderCircle className="animate-spin" />
          ) : isSignUpPage ? (
            "Sign Up"
          ) : (
            "Log In"
          )}
        </Button>

        <p className="text-center text-sm">
          {isSignUpPage ? "Already have an account?" : "Don't have an account?"}{" "}
          <Link
            href={isSignUpPage ? "/login" : "/sign-up"}
            className="font-medium text-rose-500 hover:underline"
          >
            {isSignUpPage ? "Log In" : "Sign Up"}
          </Link>
        </p>
      </CardFooter>
    </form>
  );
};

export default AuthForm;
