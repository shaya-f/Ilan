import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Global Stories
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Connecting cultures and sharing experiences from around the world!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link className="bg-white text-blue-700 hover:bg-gray-200 px-6 py-3 rounded-md text-lg">
              Join Our Community!
            </Link>
            <Link className="bg-transparent text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium text-lg border-white border-2">
              Explore Our Map
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-gray-600 text-2xl">Community Members</div>
              <p>200</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-gray-600 text-2xl">
                Countries Represented
              </div>
              <p>50</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-gray-600 text-2xl">Shared Stories</div>
              <p>1000</p>
            </div>
          </div>
        </div>
      </section>

      {/* about us */}

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img
                className="h-auto rounded-lg"
                src="images/our.png"
                alt="group-students"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-6">
                Global Stories is a platform for sharing stories. Our community
                brings together individuals from around the world to share their
                experiences, cultural backgrounds, and learning journey.
              </p>
              <p className="text-gray-600 mb-6">
                whether you're a student, proffessional, or simply curious about
                other cultures, our platform provides a space to connect, learn,
                and grow together.
              </p>
              <Link className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-medium">
                Learn more about us!
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
