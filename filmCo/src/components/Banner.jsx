import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section
      className="relative min-h-[550px] flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(11, 16, 32, 0.94), rgba(11,16,32,0.55), rgba(11,16,32,0.2)), url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
        <div className="max-w-2xl text-white">
          <p className="text-[#EC4899] font-semibold text-lg mb-3">
            WELCOME TO <span className="font-bold">FILMCO</span>
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
            Discover Your Next
            <span className="text-[#EC4899]"> Favorite Movie</span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
            Explore thousands of movies and TV shows, discover what's trending,
            and find the perfect story for your next movie night.
          </p>

          <Link
            to="/movies"
            className="btn border-none font-bold bg-[#F97316] hover:bg-[#EC4899] text-white rounded-full px-8"
          >
            Explore Movies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
