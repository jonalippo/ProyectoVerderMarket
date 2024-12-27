import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ProductsCategory from "../screens/ProductsCategory";
import ProductDetails from "../screens/ProductDetails";
import Principal from "../screens/Principal";
import Header from "../components/Header";

const Navigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
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
};

export default Navigator;
