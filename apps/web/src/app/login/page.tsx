import { LoginForm } from '@parkease/ui/src/components/temp/LoginForm';
import { AuthLayout } from '@parkease/ui/src/components/molecules/AuthLayout';

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
