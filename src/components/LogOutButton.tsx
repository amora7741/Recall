"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { logOutAction } from "@/actions/auth";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";

function LogOutButton() {
  const { toast } = useToast();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleLogOut = async () => {
    setLoading(true);

    const { errorMessage } = await logOutAction();

    if (errorMessage) {
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });

      return;
    }

    router.replace("/");

    setLoading(false);
  };

  return (
    <Button onClick={handleLogOut} disabled={loading} className="w-24">
      {loading ? <LoaderCircle className="animate-spin" /> : "Log Out"}
    </Button>
  );
}

export default LogOutButton;
