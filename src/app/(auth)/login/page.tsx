import AuthForm from "@/components/AuthForm";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Login = () => {
  return (
    <div className="mx-auto mt-10 w-full max-w-screen-2xl space-y-8 p-4 sm:px-8">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold">Welcome back!</h1>
        <p className="text-lg">
          Log in to <span className="text-primary">Recall</span> and continue
          your journey
        </p>
      </div>

      <Card className="mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Log in to your account
          </CardTitle>
          <CardDescription>
            Enter your credentials to access your notes
          </CardDescription>
        </CardHeader>

        <AuthForm pageType="login" />
      </Card>
    </div>
  );
};

export default Login;
