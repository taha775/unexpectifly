import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Categories = () => {
  return (
    <div className="mt-10 bg-white py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-gray-700 text-2xl font-semibold">Categories</h1>
        <div className="flex items-center justify-center mt-4">
          <p className="text-black text-4xl font-bold">
            Choose Your <span className="text-[#00A0B1]">Trip</span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button className="bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200 transition">
          <ChevronLeft size={24} className="text-gray-700" />
        </button>

        <div className="grid grid-cols-3 gap-6 w-full mx-4">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="text-4xl mb-4">🛶</div>
            <h3 className="text-lg font-bold text-gray-800">Budget</h3>
            <p className="text-gray-500 text-sm">Affordable trips</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="text-4xl mb-4">🏨</div>
            <h3 className="text-lg font-bold text-gray-800">Luxury</h3>
            <p className="text-gray-500 text-sm">High-end travel experiences</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="text-4xl mb-4">💑</div>
            <h3 className="text-lg font-bold text-gray-800">Romance</h3>
            <p className="text-gray-500 text-sm">Intimate escapes</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="text-4xl mb-4">🏖️</div>
            <h3 className="text-lg font-bold text-gray-800">Beach</h3>
            <p className="text-gray-500 text-sm">Relax on pristine shores</p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
            <h3 className="text-lg font-bold text-gray-800">Family</h3>
            <p className="text-gray-500 text-sm">Fun for all ages</p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="text-4xl mb-4">🏛️</div>
            <h3 className="text-lg font-bold text-gray-800">Culture</h3>
            <p className="text-gray-500 text-sm">Immerse in heritage</p>
          </div>
        </div>

        <button className="bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200 transition">
          <ChevronRight size={24} className="text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default Categories;
