import { useState } from "react";
import { X } from "lucide-react";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Movie Card */}
      <div className="card bg-[#151B2E] shadow-xl overflow-hidden">
        <figure className="aspect-[2/3] bg-[#0B1020]">
          <img
            src={
              movie.image?.original ||
              movie.image?.medium ||
              "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={movie.name}
            className="w-full h-full object-cover"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-white">{movie.name}</h2>

          <div className="flex items-center gap-3 text-gray-300 text-sm">
            <span>⭐ {movie.rating?.average || "N/A"}</span>

            <span>•</span>

            <span>📅 {movie.premiered?.slice(0, 4) || "N/A"}</span>
          </div>

          <div className="card-actions mt-4">
            <button
              onClick={() => setShowModal(true)}
              className="btn w-full bg-[#EC4899] hover:bg-[#7C3AED] text-white border-none"
            >
              See Details
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#151B2E] shadow-2xl">
            {/* Close X */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 z-10 btn btn-circle btn-sm bg-black/60 border-none text-white hover:bg-[#EC4899]"
            >
              ✕
            </button>

            {/* Large Poster */}
            <div className="w-full h-64 sm:h-80 md:h-96 bg-[#0B1020]">
              <img
                src={
                  movie.image?.original ||
                  movie.image?.medium ||
                  "https://via.placeholder.com/800x500?text=No+Image"
                }
                alt={movie.name}
                className="w-full h-full object-contain "
              />
            </div>

            {/* Details */}
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {movie.name}
              </h2>

              {/* Rating and  Release */}
              <div className="flex flex-wrap gap-4 text-gray-300 mb-6">
                <span>⭐ Rating: {movie.rating?.average || "N/A"}</span>

                <span>📅 Release: {movie.premiered || "N/A"}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Director
                  </h3>

                  <p className="text-gray-300">
                    {movie.director || "Not available"}
                  </p>
                </div>

                {/* Genre */}
                {movie.genres?.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Genre
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {movie.genres.map((genre) => (
                        <span
                          key={genre}
                          className="badge bg-[#7C3AED] border-none text-white"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Summary */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Overview
                </h3>
                <div
                  className="text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: movie.summary || "No summary available.",
                  }}
                />
              </div>

              {/* Close Button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="btn bg-[#EC4899] hover:bg-[#7C3AED] border-none text-white rounded-full px-8"
                >
                  {" "}
                  <X />
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
