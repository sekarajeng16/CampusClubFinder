import HomePicture from '../assets/img/home.jpg';
import { useState } from 'react';
import ClubData from '../data/clubs.js';

function ClubList() {
  const [sortOrder, setSortOrder] = useState('asc');
  const [isGridView, setGridView] = useState(true);

  const sortCards = [...ClubData].sort((a, b) => {
    return sortOrder === 'asc'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  return (
    <div className="w-full px-6 py-10">
      <h1 className="text-4xl font-extrabold text-center">Our Clubs</h1>

      <div className="flex mt-5 justify-between">
        <select className="border rounded-md px-3 py-2 w-26" value={sortOrder}onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>

        <div>
          <button onClick={() => setGridView(true)} className={`p-2 mr-2 rounded border ${isGridView ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grid2x2-icon lucide-grid-2x2"><path d="M12 3v18"/><path d="M3 12h18"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
          </button>
          <button onClick={() => setGridView(false)} className={`p-2 mr-2 rounded border ${!isGridView ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-justify-icon lucide-align-justify"><path d="M3 12h18"/><path d="M3 18h18"/><path d="M3 6h18"/></svg>
          </button>
        </div>
      </div>

      {isGridView ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {sortCards.map((value) => (
            <div key={value.id} className="h-96 w-full bg-white border-gray-500 rounded p-5 shadow-sm hover:shadow-lg transition-all">
              <img className="h-48 w-full object-cover rounded shadow" src={value.image} alt="" />
              <div className="p-2 mt-2">
                <h6 className="font-bold text-xl">{value.name}</h6>
                <p className="text-gray-500">{value.shortDescription}</p>
                <a href={`/clubs/${value.id}`} className="text-blue-500 font-medium mt-2">
                  Click here for detail
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-10 flex flex-col gap-6">
          {sortCards.map((value) => (
            <div key={value.id} className="flex flex-row items-start bg-white rounded-xl border-gray-500 shadow-md p-4 hover:shadow-lg transition-all">
              <img
                className="h-48 md:w-48 w-60 object-cover rounded-md"
                src={value.image}
                alt={value.name}
              />
              <div className="ml-4 flex-1">
                <h6 className="text-lg font-semibold text-gray-900">{value.name}</h6>
                <p className="text-gray-600 text-sm mt-1">{value.shortDescription}</p>
                <a
                  href={`/clubs/${value.id}`}
                  className="text-blue-500 font-medium mt-2 inline-block text-sm"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ClubList;
