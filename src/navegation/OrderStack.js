import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import Orders from "../screens/Orders";

const Stack = createNativeStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: () => {
          return <Header title="Ordenes" routeName={route.name} />;
        },
      })}
    >
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrderStack;
