import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../../global/Theme";

const InputForm = ({ label, value, onChangeText, isSecure, error }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.titleInput}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        secureTextEntry={isSecure}
      />
      {error ? (
        <View>
          <Text style={styles.textError}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
  },

  titleInput: {
    width: "90%",
    marginHorizontal: "5%",
    fontSize: 20,
    color: colors.primaryAccent,
    fontWeight: "bold",
  },

  input: {
    width: "90%",
    backgroundColor: colors.colorText,
    padding: 10,
    fontSize: 18,
    marginHorizontal: "5%",
    marginVertical: 10,
    borderRadius: 10,
  },

  textError: {
    fontSize: 16,
    color: "red",
    marginLeft: 20,
  },
});
