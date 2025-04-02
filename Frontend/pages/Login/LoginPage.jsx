import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center flex items-center justify-center gap-3 text-3xl font-extrabold">
          Sign in to your account
          <VscAccount />
        </h2>

        <p className="mt-2 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-md text-blue-600 font-semibold focus:text-purple-700"
          >
            Sign up
          </Link>
        </p>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <LoginForm />
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md bg-blue-600 text-white hover:bg-blue-700 shadow-md text-sm font-medium focus:outline-none focus:ring-2 focus-ring-offset-2 focus:ring-blue-500"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
