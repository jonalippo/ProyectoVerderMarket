import { object, string } from "yup";

export const loginSchema = object({
  password: string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("contraseña es requerida")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      "La contraseña debe tener al menos una letra mayuscula, una minuscula y un numero"
    ),
  email: string().email("El email no es valido").required("Email es requerido"),
});
