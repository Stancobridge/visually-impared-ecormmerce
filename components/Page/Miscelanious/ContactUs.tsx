import { useState } from "react";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add logic for form submission or API call here
    console.log("Form submitted:", formData);
  };
  return (
    <div className="flex">
      <div className="container mx-auto mt-8">
        <div className="w-1/3 pr-4 flex items-center my-3 ">
          <div className="flex items-center mr-2">
            <span className="text-gray-700">Email:</span>
          </div>
          <p className="text-lg font-semibold">info@loligrivisual.com</p>
        </div>

        <div className="flex items-center mr-2 my-3">
          <div className="flex items-center mr-2">
            <span className="text-gray-700">Phone:</span>
          </div>
          <p className="text-lg font-semibold">+1 (44) 456-7890</p>
        </div>

        <div className="flex items-center mr-2">
          <div className="flex items-center mr-2">
            {/* <LocatIn className="h-6 w-6 mr-2" /> */}
            <span className="text-gray-700">Address:</span>
          </div>
          <p className="text-lg font-semibold">
            123 Main Street, Cityville, State, 12345
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit} className="max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
