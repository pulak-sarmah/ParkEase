import { RegisterForm } from '@parkease/ui/src/components/temp/RegisterForm';
import { AuthLayout } from '@parkease/ui/src/components/molecules/AuthLayout';

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
