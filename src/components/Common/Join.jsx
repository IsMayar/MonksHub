import { FiArrowRight, FiMail } from "react-icons/fi";
export default function Join() {
  return (
    <section className="relative bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
      {/* Overlay gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 z-0"></div>

      <div className="relative z-10 py-8 px-6 mx-auto max-w-screen-xl text-center lg:py-16">
        {/* Notification Banner */}

        {/* Heading */}
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          We invest in the world’s potential
        </h1>

        {/* Description */}
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>

        {/* Email Form */}
        <form className="w-full max-w-md mx-auto">
          <label htmlFor="default-email" className="sr-only">
            Email sign-up
          </label>
          <div className="relative">
            {/* Icon inside input */}
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <FiMail className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>

            {/* Input */}
            <input
              type="email"
              id="default-email"
              placeholder="Enter your email here..."
              required
              className="block w-full pl-10 pr-28 py-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-sm px-4 py-2 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
