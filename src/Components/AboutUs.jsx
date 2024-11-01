import React from "react";

function AboutUs() {
  return (
    <div className=" min-h-screen py-10">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        {/* About Us Section */}
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 text-lg">
            We are a passionate team dedicated to making a positive impact in
            the world. Our mission is to create innovative solutions that
            inspire and improve lives.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg">
            Our mission is to bring value to our users through creative and
            meaningful solutions. We strive to foster an inclusive and
            collaborative environment that enables everyone to achieve their
            best.
          </p>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Meet the Team
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {/* Team Member 1 */}
            <div className="w-60 p-4 bg-gray-50 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">
                Alice Johnson
              </h3>
              <p className="text-gray-500">CEO & Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="w-60 p-4 bg-gray-50 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">Bob Smith</h3>
              <p className="text-gray-500">CTO & Lead Developer</p>
            </div>

            {/* Team Member 3 */}
            <div className="w-60 p-4 bg-gray-50 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">
                Emma Williams
              </h3>
              <p className="text-gray-500">Marketing Director</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
