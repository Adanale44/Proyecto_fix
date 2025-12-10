import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type TournamentFormData = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
};

interface CreateTournamentFormProps {
  onCreate: (data: TournamentFormData) => void;
}

const CreateTournamentForm: React.FC<CreateTournamentFormProps> = ({ onCreate }) => {
  const [formData, setFormData] = useState<TournamentFormData>({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(formData);
    setFormData({ name: "", description: "", startDate: "", endDate: "" });  // Resetea el formulario después de crear el torneo
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Nombre del Torneo</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre del Torneo"
          />
        </div>

        <div>
          <Label htmlFor="description">Descripción</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descripción del Torneo"
          />
        </div>

        <div>
          <Label htmlFor="startDate">Fecha de Inicio</Label>
          <Input
            id="startDate"
            name="startDate"
            type="datetime-local"
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="endDate">Fecha de Fin</Label>
          <Input
            id="endDate"
            name="endDate"
            type="datetime-local"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>

        <Button type="submit">Crear Torneo</Button>
      </div>
    </form>
  );
};

export default CreateTournamentForm;
