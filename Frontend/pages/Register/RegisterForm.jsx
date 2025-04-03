import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

export default function RegisterForm({ onChange, formData, countries }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function toggleShowPassword(event) {
    event.preventDefault();
    setShowPassword(!showPassword);
  }

  function toggleShowConfirmPassword(event) {
    event.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  }

  return (
    <>
      {/* full name */}
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="name"
        >
          Full Name:
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            value={formData.name}
            required
            onChange={(e) => onChange(e)}
            placeholder="Enter full name"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none
            focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>

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
            value={formData.email}
            required
            onChange={(e) => onChange(e)}
            placeholder="Enter your e-mail"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                  focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>

      {/* country */}
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="country"
        >
          Country:
        </label>
        <div className="mt-1">
          <select
            name="country"
            id="country"
            autoComplete="country"
            value={formData.country}
            required
            onChange={(e) => onChange(e)}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                  focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Select your country</option>

            {countries.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </select>
        </div>
      </div>

      {/* city */}
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="city"
        >
          City:
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="city"
            id="city"
            autoComplete="city"
            value={formData.city}
            required
            onChange={(e) => onChange(e)}
            placeholder="Enter your city"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                  focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>

      {/* languages */}
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="languages"
        >
          Languages:
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="languages"
            id="languages"
            autoComplete="none"
            value={formData.languages}
            required
            onChange={(e) => onChange(e)}
            placeholder="English, Hebrew..."
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
          Password:
        </label>
        <div className="mt-1 flex">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            autoComplete="none"
            value={formData.password}
            required
            onChange={(e) => onChange(e)}
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

      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="confirm-password"
        >
          Confirm Password:
        </label>
        <div className="mt-1 flex">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirm-password"
            id="confirm-password"
            autoComplete="none"
            value={formData.ConfirmPassword}
            required
            onChange={(e) => onChange(e)}
            placeholder="Confirm your password"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                  focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          <button onClick={() => toggleShowConfirmPassword(event)}>
            {showConfirmPassword ? (
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
