import { useState } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { colors } from "../../global/Theme";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigation = useNavigation();

  const onSubmit = async () => {};

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
          error={emailError}
        />

        <SubmitButton onPress={onSubmit} title="Ingresar" />
        <Text style={styles.submit}>Registrar nueva cuenta</Text>
        <Pressable
          style={styles.buttonSubmit}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.textButton}>Registrarme</Text>
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

  submit: {
    fontSize: 18,
    color: colors.secundary,
    top: 10,
  },

  buttonSubmit: {
    backgroundColor: colors.secundary,
    paddingVertical: 10,
    alignItems: "center",
    width: "30%",
    borderRadius: 20,
    top: 30,
  },

  textButton: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});
