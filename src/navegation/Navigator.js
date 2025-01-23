import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../../global/Theme";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/userSlice";
import { fetchSession, init } from "../config/dbSqlite";

const Tab = createBottomTabNavigator();

const Navigator = () => {
  const idToken = useSelector((state) => state.user.idToken);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const sessionUser = await fetchSession();
      if (sessionUser) {
        dispatch(setUser(sessionUser));
      }
    })();
  }, []);

  return (
    <NavigationContainer>
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
