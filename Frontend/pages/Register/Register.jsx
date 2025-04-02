import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";

export default function Register() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold">
          Create your account
        </h2>

        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-md text-blue-600 font-semibold focus:text-purple-700"
          >
            Sign In
          </Link>
        </p>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <RegisterForm />
            <div>
              <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md bg-blue-600 text-white hover:bg-blue-700 shadow-md text-sm font-medium focus:outline-none focus:ring-2 focus-ring-offset-2 focus:ring-blue-500">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// full name
// email address
// country
// city
// languages
// password
// confirm password
