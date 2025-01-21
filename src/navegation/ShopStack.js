import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ProductsCategory from "../screens/ProductsCategory";
import ProductDetails from "../screens/ProductDetails";
import Header from "../components/Header";

const ShopStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: () => {
          return (
            <Header
              title={
                route.name === "Home"
                  ? "Home"
                  : route.name === "ProductsCategory"
                  ? route.params.category.title
                  : route.params.product.title
              }
            />
          );
        },
      })}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductsCategory" component={ProductsCategory} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default ShopStack;
