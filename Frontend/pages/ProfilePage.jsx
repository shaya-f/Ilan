import { FaUser } from "react-icons/fa";

export default function ProfilePage() {
  // if user has been logged in
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-32"></div>

          <div className="p-6 relative">
            <div className="absolute -top-16 left-6">
              <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center">
                <FaUser className="h-20 w-20 text-gray-400" />
              </div>
            </div>
            <div className="mt-16">
              <h1 className="text-2xl font-bold text-gray-800">
                Shaya Freedman
              </h1>
              <p className="text-gray-700">Hertfordshire, England</p>

              <div className="mt-2 flex flex-wrap gap-2">
                <span>Language: English</span>
              </div>

              <div className="mt-4">
                <h2 className="text-gray-700 font-semibold mb-2">
                  About: Hello, my name is Shaya
                </h2>
                <p>Come visit my bio!</p>
              </div>

              <div className="mt-6">
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
