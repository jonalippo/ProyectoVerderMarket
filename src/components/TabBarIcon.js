import { StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const TabBarIcon = ({ text, icon }) => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name={icon} size={28} color="white" />
      <Text style={styles.textIcon}>{text}</Text>
    </View>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
  container: {
    width: 60,
    gap: 5,
    alignItems: "center",
  },

  textIcon: {
    color: "white",
  },
});
