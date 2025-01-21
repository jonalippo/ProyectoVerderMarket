import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Principal from "../screens/Principal";

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
      <Stack.Screen
        name="Principal"
        component={Principal}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
