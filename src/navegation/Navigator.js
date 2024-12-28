import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import OrderStack from "./OrderStack";
import { colors } from "../../global/Theme";
import TabBarIcon from "../components/TabBarIcon";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
          tabBarLabelPosition: "beside-icon",
        }}
      >
        <Tab.Screen
          name="ShopStack"
          component={ShopStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} text="Home" icon="home" />
            ),
          }}
        />
        <Tab.Screen
          name="CartStack"
          component={CartStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                icon="shopping-cart"
                text="Tienda"
              />
            ),
          }}
        />
        <Tab.Screen
          name="OrderStack"
          component={OrderStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} text="Ordenes" icon="list" />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} text="Perfil" icon="user" />
            ),
          }}
        />
      </Tab.Navigator>
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
