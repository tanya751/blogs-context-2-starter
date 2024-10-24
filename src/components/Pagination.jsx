import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  if (!totalPages) return null;

  return (
    <div className="bottom-0 inset-x-0 bg-white py-2 border-t-2 border-t-gray-300 w-full">
      <div className="flex items-center w-11/12 max-w-2xl mx-auto ">
        {/* Left side: Pagination buttons */}
        <div className="flex gap-x-3">
          {page > 1 && (
            <button
              onClick={() => handlePageChange(page - 1)}
              className="border-2 border-y-4 border-gray-300 py-1 px-4 rounded-md text-red-400"
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              onClick={() => handlePageChange(page + 1)}
              className="border-2 border-y-4 border-slate-300 py-1 px-4 rounded-md text-red-400"
            >
              Next
            </button>
          )}
        </div>

        {/* Space between buttons and text */}
        <div className="flex-grow"></div>

        {/* Right side: Page X of Y */}
        <p className="text-sm font-semibold text-red-400">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}
