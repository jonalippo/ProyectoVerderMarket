import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import Profile from "../screens/Profile";
import ImageSelector from "../screens/ImageSelector";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: () => {
          return <Header title="Perfil" routeName={route.name} />;
        },
      })}
    >
      <Stack.Screen name="Perfil" component={Profile} />
      <Stack.Screen name="ImageSelector" component={ImageSelector} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
