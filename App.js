import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Principal from "./src/screens/Principal";
import { View } from "react-native";
import Home from "./src/screens/Home";
import { colors } from "./global/Theme";
import ProductsCategory from "./src/screens/ProductsCategory";
import ProductDetails from "./src/screens/ProductDetails";

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

  return (
    <View style={style.container}>
      <StatusBar style="light" backgroundColor={colors.primary} />
      <ProductsCategory category="Frutas" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
