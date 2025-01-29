import { ActivityIndicator, StyleSheet, View } from "react-native";
import { colors } from "../../global/Theme";

const Loading = () => {
  return (
    <View style={styles.containerLoading}>
      <ActivityIndicator size={90} color="white" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  containerLoading: {
    width: "100%",
    height: "100%",
    fle: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    position: "absolute",
    zIndex: 1000,
  },
});
