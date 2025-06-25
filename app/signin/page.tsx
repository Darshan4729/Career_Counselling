import { AuthForm } from '@/components/auth/AuthForm';
import { SocialLogin } from '@/components/auth/SocialLogin';

export default function SignInPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-screen py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-4xl font-bold text-center text-white">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-center text-white/80">
              Or{' '}
              <a href="/signup" className="font-medium text-white hover:text-blue-400">
                create a new account
              </a>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white/95 backdrop-blur-sm py-12 px-6 shadow-lg rounded-2xl sm:px-12">
              <AuthForm mode="signin" />
              
              <SocialLogin />

              <div className="mt-8">
                <p className="text-center text-sm text-gray-600">
                  <a href="/forgot-password" className="font-medium text-blue-600 hover:text-blue-700">
                    Forgot your password?
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
