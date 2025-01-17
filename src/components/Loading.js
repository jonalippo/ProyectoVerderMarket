import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../global/Theme";

const Loading = () => {
  return (
    <View style={styles.containerLoading}>
      <FontAwesome name="spinner" size={50} color="black" />
      <Text style={styles.textLoading}>Cargando</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  containerLoading: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
    marginTop: 20,
  },

  textLoading: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.primaryAccent,
  },
});
