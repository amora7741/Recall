import AuthForm from "@/components/AuthForm";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SignUp = () => {
  return (
    <div className="mx-auto mt-10 w-full max-w-screen-2xl space-y-8 p-4 sm:px-8">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold">
          Join <span className="text-primary">Recall</span>
        </h1>
        <p className="text-lg">
          Create your account and start taking smarter notes today!
        </p>
      </div>

      <Card className="mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Create your account
          </CardTitle>
          <CardDescription>
            Enter your details to get started with Recall
          </CardDescription>
        </CardHeader>

        <AuthForm pageType="signUp" />
      </Card>
    </div>
  );
};

export default SignUp;
