import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Home from "./src/screens/Home";
import { colors } from "./global/Theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsCategory from "./src/screens/ProductsCategory";
import ProductDetails from "./src/screens/ProductDetails";
import Principal from "./src/screens/Principal";
import Header from "./src/components/Header";

export default function App() {
  const product = {
    id: 1,
    title: "Manzanas",
    description:
      "Manzanas jugosas y crujientes, perfectas para comer como snack.",
    price: "10",
    category: "Frutas",
    thumbnail: "../../assets/manzanaRoja.png",
    images: "../../assets/manzanaRoja.png",
  };

  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="light" backgroundColor={colors.primary} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ route }) => ({
            header: () => {
              return (
                <Header
                // title={
                //   route.name === "Home"
                //     ? "Home"
                //     : route.name === "ProductsCategory"
                //     ? route.params.category
                //     : "ProductDetails"
                // }
                />
              );
            },
          })}
        >
          <Stack.Screen
            name="Principal"
            component={Principal}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ProductsCategory" component={ProductsCategory} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const style = StyleSheet.create({});
