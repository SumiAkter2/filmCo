const MovieCard = ({ movie }) => {
  return (
    <div className="card bg-[#151B2E] shadow-xl overflow-hidden">
      {/* Poster */}
      <figure className="aspect-[2/3] ">
        <img
          src={
            movie.image?.medium ||
            "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={movie.name}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Card Content */}
      <div className="card-body">
        <h2 className="card-title text-white">{movie.name}</h2>

        <div className="flex items-center gap-3 text-gray-300 text-sm">
          <span> ⭐ {movie.rating?.average || "N/A"}</span>

          <span>•</span>

          <span>📅 {movie.premiered?.slice(0, 4) || "N/A"}</span>
        </div>

        <div className="card-actions mt-4">
          <button className="btn w-full bg-[#EC4899] hover:bg-[#7C3AED] text-white border-none">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
