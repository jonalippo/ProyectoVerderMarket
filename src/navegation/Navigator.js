import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../../global/Theme";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const Navigator = () => {
  const idToken = useSelector((state) => state.user.idToken);

  return (
    <NavigationContainer>
      {/* <TabNavigator /> */}
      {idToken ? <TabNavigator /> : <AuthStack />}
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
