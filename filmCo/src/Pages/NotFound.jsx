const NotFound = () => {
  return (
    <main className="h-screen bg-[#0B1020] flex py-24 justify-center px-4">
      <div className="text-center text-white">
        <h1 className="text-8xl md:text-9xl font-bold text-[#EC4899]">404</h1>

        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-400 mt-4 mb-8">
          The page you are looking for doesn't exist.
        </p>

        <a
          href="/"
          className="btn bg-[#EC4899] hover:bg-[#7C3AED] text-white border-none rounded-full px-8"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
