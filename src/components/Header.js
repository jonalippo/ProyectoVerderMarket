import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../global/Theme";

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});
