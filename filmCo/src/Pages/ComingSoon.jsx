import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <main className=" bg-[#0B1020] flex py-12 justify-center px-4">
      <div className="text-center max-w-2xl">
        <p className="text-[#EC4899] font-semibold tracking-widest uppercase mb-4">
          FilmCo
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Something<span className="text-[#EC4899]"> Amazing</span>
          <br />
          Is Coming Soon ...
        </h1>

        <p className="text-gray-400 text-base md:text-lg mt-6 leading-relaxed">
          We're working behind the scenes to bring you more amazing movies,
          shows and entertainment. Stay tuned!
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <Link
            to="/"
            className="btn bg-[#EC4899] hover:bg-[#7C3AED] text-white border-none rounded-full px-8"
          >
            Back to Home
          </Link>

          <Link
            to="/movies"
            className="btn btn-outline border-[#EC4899] text-white hover:bg-[#EC4899] hover:border-[#EC4899] rounded-full px-8"
          >
            Explore Movies
          </Link>
        </div>

        <div className="mt-12 flex justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#EC4899]"></span>
          <span className="w-2 h-2 rounded-full bg-[#7C3AED]"></span>
          <span className="w-2 h-2 rounded-full bg-[#F97316]"></span>
        </div>
      </div>
    </main>
  );
};

export default ComingSoon;
