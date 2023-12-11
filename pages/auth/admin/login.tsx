import { FormProvider } from "react-hook-form";
import { useLoginUser } from "../../../base";
import { Input } from "../../../components";
import ErrorMessage from "../../../components/Global/Form/ErrorMessage";

export default function UserLoginScreen() {
  const { methods, loginUser, error } = useLoginUser({
    isAdmin: true,
    pushRoute: "/dashboard",
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-3 text-3xl font-semibold text-center text-gray-700">
          Login
        </h1>

        {error ? <ErrorMessage errorMessage={error} /> : null}

        <FormProvider {...methods}>
          <form onSubmit={loginUser}>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <Input
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                type="email"
                name="email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700">Password</label>
                <a href="#" className="text-xs text-gray-500">
                  Forget Password?
                </a>
              </div>

              <Input
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                type="password"
                name="password"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Login
              </button>
              <a href="/auth/user/register" className="text-xs text-gray-500">
                No Account?
              </a>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
