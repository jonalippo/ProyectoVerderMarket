import { Pressable, StyleSheet, TextInput, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { colors } from "../../global/Theme";

const Search = () => {
  const [textInput, SetTextInput] = useState("");
  const search = () => {};

  const removeSearch = () => {};

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={search}>
        <FontAwesome name="search" size={25} color={colors.primaryAccent} />
      </Pressable>
      <TextInput
        placeholder="Buscador"
        value={textInput}
        onChange={(text) => SetTextInput(text)}
        style={styles.input}
      />
      <Pressable style={styles.button} onPress={removeSearch}>
        <MaterialIcons name="cancel" size={25} color={colors.primaryAccent} />
      </Pressable>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
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
});
