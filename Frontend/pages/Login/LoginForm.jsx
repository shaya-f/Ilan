import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword(event) {
    event.preventDefault();
    setShowPassword(!showPassword);
  }

  return (
    <>
      {" "}
      {/* email */}
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="email"
        >
          E-mail:
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="email"
            required
            placeholder="Enter your e-mail"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                    focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
      {/* password */}
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="password"
        >
          password:
        </label>
        <div className="mt-1 flex">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            autoComplete="none"
            required
            placeholder="Enter a password"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none
            focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          <button onClick={() => toggleShowPassword(event)}>
            {showPassword ? (
              <AiOutlineEye className="text-4xl text-gray-800" />
            ) : (
              <AiOutlineEyeInvisible className="text-4xl text-gray-800" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
