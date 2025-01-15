import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      // HEADER OCULTO:
      screenOptions={{ headerShown: false }}

      //SI QUIERO VER EL HEADER:
      //   screenOptions={({ route }) => ({
      //     header: () => {
      //       return (
      //         <Header
      //           title={
      //             route.name === "Login"
      //               ? "Iniciar seción"
      //               : route.name === "Signup"
      //               ? "Registrarme"
      //               : ""
      //           }
      //         />
      //       );
      //     },
      //   })}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
