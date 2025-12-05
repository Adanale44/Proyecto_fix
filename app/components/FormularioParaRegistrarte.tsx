import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, EyeOff, Eye } from "lucide-react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type DatosRequeridosParaElFormulario = {
  contrasena: string;
  confirmarContrasena: string;
  email: string;
};

const FormularioParaRegistrarte = () => {
  const [contrasenaVisible, cambiarVisibilidadDeLaContrasena] = useState(false);
  const [confirmarContrasenaVisible, cambiarVisibilidadDeComfirmacionDEContrasena] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<DatosRequeridosParaElFormulario>();

  const onSubmit: SubmitHandler<DatosRequeridosParaElFormulario> = (data) =>
    console.log(data);

  console.log(watch("email"));
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <Label htmlFor="register-email">Correo Electrónico</Label>
            {errors.email && <span>Falta email</span>}
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="register-email"
              type="email"
              placeholder="tu-correo@etecuba.edu.ar"
              className="pl-10"
              {...register("email", { required: true })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="register-password">Contrasena</Label>
            {errors.contrasena && <span>Falta contraseña</span>}
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="register-password"
              type={contrasenaVisible ? "text" : "password"}
              placeholder="••••••••"
              className="pl-10 pr-10"
              {...register("contrasena", { required: true })}
            />
            <button
              type="button"
              onClick={() => cambiarVisibilidadDeLaContrasena(!contrasenaVisible)}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
            >
              {contrasenaVisible ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirm-password">Verificar Contraseña</Label>
            {errors.confirmarContrasena && <span>Falta confirmar la contraseña</span>}
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="confirm-password"
              type={confirmarContrasenaVisible ? "text" : "password"}
              placeholder="••••••••"
              className="pl-10 pr-10"
              {...register("confirmarContrasena", { required: true })}
            />
            <button
              type="button"
              onClick={() => cambiarVisibilidadDeComfirmacionDEContrasena(!confirmarContrasenaVisible)}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
            >
              {confirmarContrasenaVisible ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <Button className="w-full" size="lg">
          Crear Cuenta
        </Button>

        <p className="text-sm text-center text-gray-500">
          Recibirás un email de confirmación en tu correo de la Escuela UBA
        </p>
      </form>
    </>
  );
};

export default FormularioParaRegistrarte;
