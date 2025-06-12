import { useEffect, useState } from "react"
import ClubData from "../data/clubs"
import HomePicture from "../assets/img/home.jpg"
import { useParams } from 'react-router-dom';

function ClubDetail() {
  const id = useParams().clubId
  const club = ClubData.find(club => club.id === id);

  const [hasJoined, setHasJoined] = useState(false);

  useEffect(() => {
    const joinedClubs = JSON.parse(localStorage.getItem("joinedClubs")) || [];
      setHasJoined(joinedClubs.includes(id));
  }, [id]);

  const handleJoin = () => {
    const joinedClubs = JSON.parse(localStorage.getItem("joinedClubs")) || [];
    if (!joinedClubs.includes(id)) {
      joinedClubs.push(id);
      localStorage.setItem("joinedClubs", JSON.stringify(joinedClubs));
      setHasJoined(true);
      alert("You have successfully joined this club!");
    }
  }


  console.log(club)
  return (
    <div className="w-full px-6 py-10">
      <h1 className="font-extrabold text-4xl">{club.name}</h1>
      <img src={club.image} className="w-full h-64 md:h-96 object-cover rounded shadow-sm mt-3" alt={`${club.name} image`} />

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-10">

        <div className="md:col-span-4">
          <h4 className="font-medium text-xl">Description</h4>
          <p className="mt-5 text-lg">{club.description}</p>

        </div>

        <div className="md:col-span-2">
          <h4 className="font-medium text-xl">Upcoming Event</h4>
          <div className="flex flex-col gap-6 mt-5">
            {club.events.map((value, index) => (
              <div key={index} className="bg-white rounded shadow px-5 py-5">
                <h6 className="font-bold text-lg">{value.date}</h6>
                <p className="font-medium mt-1">{value.name}</p>
              </div>
            ))}

            <button
              onClick={handleJoin}
              disabled={hasJoined}
              className={`mt-10 px-3 py-2 rounded font-medium text-white ${
                hasJoined ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              {hasJoined ? 'Already joined this club' : 'Join Now'}
            </button>
            
            
          </div>
        </div>

      </div>
    </div>
  )
}
export default ClubDetail
