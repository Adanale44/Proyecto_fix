import { useState, useEffect } from "react";
import CreateTournamentForm from "../components/CreateTournamentForm";  // Asumiendo que este componente está en la carpeta components

type TournamentFormData = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
};

const TournamentsPage = () => {
  const [tournaments, setTournaments] = useState<TournamentFormData[]>([]);

  // Cargar torneos desde localStorage al montar el componente
  useEffect(() => {
    const storedTournaments = localStorage.getItem("tournaments");
    if (storedTournaments) {
      setTournaments(JSON.parse(storedTournaments));
    }
  }, []);

  // Guardar los torneos en localStorage
  const saveTournaments = (tournaments: TournamentFormData[]) => {
    localStorage.setItem("tournaments", JSON.stringify(tournaments));
  };

  const handleCreateTournament = (data: TournamentFormData) => {
    const newTournaments = [...tournaments, data];
    setTournaments(newTournaments);
    saveTournaments(newTournaments); // Guardar en localStorage
  };

  return (
    <div>
      <h1>Crear Torneo</h1>
      <CreateTournamentForm onCreate={handleCreateTournament} />

      <h2>Lista de Torneos</h2>
      <ul>
        {tournaments.map((tournament, index) => (
          <li key={index}>
            <h3>{tournament.name}</h3>
            <p>{tournament.description}</p>
            <p>Fecha de inicio: {new Date(tournament.startDate).toLocaleString()}</p>
            <p>Fecha de fin: {new Date(tournament.endDate).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TournamentsPage;
