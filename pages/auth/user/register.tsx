import { FormProvider } from "react-hook-form";
import { useRegisterUser } from "../../../base";
import { Input } from "../../../components";
import Link from "next/link";

export default function UserRegisterScreen() {
  const { methods, registerUser } = useRegisterUser({
    isAdmin: false,
    pushRoute: "/",
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-3 text-3xl font-semibold text-center text-gray-700">
          Create account
        </h1>
        <FormProvider {...methods}>
          <form onSubmit={registerUser}>
            <div className="mb-4">
              <label className="block text-gray-700">Fullname</label>
              <Input
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                type="text"
                name="fullname"
              />
            </div>
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
              </div>

              <Input
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                type="password"
                name="password"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700">Confirm Password</label>
              </div>

              <Input
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                type="password"
                name="confirm_password"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Register
              </button>
              <Link href="/auth/user/login" className="text-xs text-gray-500">
                Already has an account login here
              </Link>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
