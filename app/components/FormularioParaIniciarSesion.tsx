import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, EyeOff, Eye } from "lucide-react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type DatosRequeridosParaElFormulario = {
  contrasena: string;
  email: string;
};

const FormularioParaIniciarSesion = () => {
  const [contrasenaVisible, cambiarVisibilidadDeLaContrasena] = useState(false);

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
          <Label htmlFor="login-email">Correo Electrónico</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              {...(register("email"), { required: true })}
              id="login-email"
              type="email"
              placeholder="tu-correo@etecuba.edu.ar"
              className="pl-10"
            />
          </div>
            {errors.email && <span>Falta email</span>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="login-password">Contraseña</Label>
            {errors.contrasena && <span>Falta contraseña</span>}
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="login-password"
              type={contrasenaVisible ? "text" : "password"}
              placeholder="••••••••"
              className="pl-10 pr-10"
              {...(register("contrasena"), { required: true })}
            />
            <button
              type="button"
              onClick={() =>
                cambiarVisibilidadDeLaContrasena(!contrasenaVisible)
              }
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

        <Button className="w-full" size="lg">
          Iniciar Sesión
        </Button>

        <p className="text-sm text-center text-gray-500">
          Se enviará un email de confirmación a tu correo
        </p>
      </form>
    </>
  );
};

export default FormularioParaIniciarSesion;
