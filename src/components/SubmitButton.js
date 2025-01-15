import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../../global/Theme";

const SubmitButton = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{title}</Text>
    </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    alignItems: "center",
    width: "60%",
    borderRadius: 20,
    top: 10,
  },

  textButton: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
