import { Pressable, StyleSheet, TextInput, View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { colors } from "../../global/Theme";

const Search = ({ onChangeKeyword }) => {
  const [textInput, setTextInput] = useState("");
  const [error, setError] = useState("");

  const search = () => {
    const regex = /[+\-*/%@#&,._()$><°|:;¨´]/;

    if (regex.test(textInput)) {
      return setError("Caracter no valido");
    }
    setError("");
    onChangeKeyword(textInput);
  };

  const removeSearch = () => {
    onChangeKeyword("");
    setTextInput("");
    setError("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Pressable style={styles.button} onPress={search}>
          <FontAwesome name="search" size={25} color={colors.primaryAccent} />
        </Pressable>
        <TextInput
          placeholder="Buscador"
          value={textInput}
          onChangeText={(text) => setTextInput(text)}
          style={styles.input}
        />
        <Pressable style={styles.button} onPress={removeSearch}>
          <MaterialIcons name="cancel" size={25} color={colors.primaryAccent} />
        </Pressable>
      </View>
      <Text style={styles.error}>{error ? error : ""}</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    borderRadius: 6,
    height: 40,
    width: "80%",
    fontSize: 20,
    paddingHorizontal: 10,
    borderBottomColor: colors.colorText,
    borderBottomWidth: 1,
  },
  error: {
    color: "red",
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 18,
  },
});
