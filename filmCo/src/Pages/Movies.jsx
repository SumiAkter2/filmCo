import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("girls");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://api.tvmaze.com/search/shows?q=${search}`,
        );

        const data = await response.json();

        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();

    const searchValue = e.target.search.value;

    setSearch(searchValue);
  };

  return (
    <main className="bg-[#0B1020] min-h-screen py-10 px-4 lg:px-10">
      {/* Search */}
      <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-12">
        <div className="flex">
          <input
            type="text"
            name="search"
            placeholder="🔍 Search for a movie..."
            className="input w-full bg-white text-black rounded-l-full rounded-r-none"
          />

          <button
            type="submit"
            className="btn bg-[#EC4899] hover:bg-[#7C3AED] text-white border-none rounded-r-full rounded-l-none px-8"
          >
            Search
          </button>
        </div>
      </form>

      {/* Title */}
      <div className="max-w-7xl mx-auto mb-8">
        <h2 className="text-3xl font-bold text-white">
          Explore Movies & TV Shows
        </h2>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center text-white py-10">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}

      {/* Movie Grid */}
      {!loading && (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.show.id} movie={movie.show} />
          ))}
        </div>
      )}

      {/* No result */}
      {!loading && movies.length === 0 && (
        <p className="text-center text-white mt-10">No movies found.</p>
      )}
    </main>
  );
};

export default Movies;
