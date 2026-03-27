import AuthForm from "@/components/auth/AuthForm";
import AuthLayout from "@/components/auth/AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
      <AuthForm mode="login" />;
    </AuthLayout>
  );
};

export default Login;
