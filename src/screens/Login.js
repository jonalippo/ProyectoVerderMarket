import { useState } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { colors } from "../../global/Theme";
import { useNavigation } from "@react-navigation/native";
import { useLoginMutation } from "../services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/userSlice";
import { loginSchema } from "../validations/loginSchema";
import { deleteSession, insertSession } from "../config/dbSqlite";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigation = useNavigation();
  const [triggerLogin] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      const response = await triggerLogin({ email, password }).unwrap();

      if (response && response.idToken) {
        const user = {
          email: response.email,
          idToken: response.idToken,
          localId: response.localId,
        };

        dispatch(setUser(user));
        await deleteSession();
        await insertSession(user.localId, user.email, user.idToken);

        setEmailError("");
        setPasswordError("");
      } else {
        setEmailError("");
        setPasswordError("Error al iniciar sesión. Intente nuevamente.");
      }
    } catch (error) {
      if (error.name === "ValidationError") {
        switch (error.path) {
          case "email":
            setEmailError(error.message);
            setPasswordError("");
            break;
          case "password":
            setPasswordError(error.message);
            setEmailError("");
            break;
        }
      } else if (error?.status === 400 || error?.status === 401) {
        const errorMessage = error?.data?.error?.message;

        if (errorMessage === "INVALID_PASSWORD") {
          setPasswordError("Contraseña incorrecta.");
          setEmailError("");
        } else if (errorMessage === "EMAIL_NOT_FOUND") {
          setEmailError("Usuario no registrado.");
          setPasswordError("");
        } else {
          setEmailError("");
          setPasswordError("Error al iniciar sesión. Intente nuevamente.");
        }
      } else {
        setEmailError("");
        setPasswordError("Ocurrió un error inesperado. Intente más tarde.");
      }
    }
  };

  return (
    <View style={styles.loginContainer}>
      <Image
        style={styles.imgLogo}
        resizeMode="cover"
        source={require("../../assets/logo1.png")}
      />

      <Text style={styles.title}>Iniciar sesión</Text>

      <View style={styles.containerInputs}>
        <InputForm
          label="Email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          isSecure={false}
          error={emailError}
        />
        <InputForm
          label="Password"
          value={password}
          onChangeText={(t) => setPassword(t)}
          isSecure={true}
          error={passwordError}
        />

        <SubmitButton onPress={onSubmit} title="Ingresar" />
        <Pressable
          style={styles.buttonSubmit}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.textButton}>Registrar nueva cuenta</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: "center",
  },

  imgLogo: {
    width: 200,
    height: 200,
    top: 80,
  },

  title: {
    color: colors.primaryAccent,
    width: "100%",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    top: 110,
  },

  containerInputs: {
    top: 120,
    width: "90%",
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },

  buttonSubmit: {
    backgroundColor: colors.secundary,
    paddingVertical: 12,
    alignItems: "center",
    width: "60%",
    borderRadius: 20,
    top: 30,
  },

  textButton: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
