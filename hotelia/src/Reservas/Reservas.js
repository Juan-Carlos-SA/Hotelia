import React from 'react'

export function Reservas() {
  return (
    <div>Reservas</div>
  )
}


/*const App = () => {
  const [rooms, setRooms] = useState([
    { id: 1, name: "Habitación 101", available: true },
    { id: 2, name: "Habitación 102", available: true },
    { id: 3, name: "Habitación 103", available: true },
  ]);

  const reservarHabitacion = (id) => {
    setRooms(rooms.map(room => 
      room.id === id ? { ...room, available: false } : room
    ));
    alert("¡Reserva realizada!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Reserva de Habitaciones</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms.map((room) => (
          <div
            key={room.id}
            className={`p-4 border rounded-lg shadow-md text-center ${
              room.available ? "bg-white" : "bg-gray-300"
            }`}
          >
            <h2 className="text-xl font-semibold">{room.name}</h2>
            <button
              className={`mt-3 px-4 py-2 rounded ${
                room.available
                  ? "bg-blue-500 hover:bg-blue-700 text-white"
                  : "bg-gray-500 cursor-not-allowed"
              }`}
              onClick={() => reservarHabitacion(room.id)}
              disabled={!room.available}
            >
              {room.available ? "Reservar" : "No Disponible"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
*/