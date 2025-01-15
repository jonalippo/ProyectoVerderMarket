import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../../global/Theme";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";

const Tab = createBottomTabNavigator();

const Navigator = () => {
  const isAuth = false; // provisorio
  return (
    <NavigationContainer>
      {/* <TabNavigator /> */}
      {isAuth ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.primary,
    height: 60,
    shadowColor: "black",
    position: "absolute",
  },
});
