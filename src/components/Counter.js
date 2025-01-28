import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../global/Theme";
import Feather from "@expo/vector-icons/Feather";

const Counter = ({ quantity, increment, decrement }) => {
  return (
    <View style={styles.containerCount}>
      <Pressable onPress={decrement}>
        <Feather name="minus-square" size={50} color={colors.primary} />
      </Pressable>
      <Text style={styles.textCount}>{quantity}</Text>
      <Pressable onPress={increment}>
        <Feather name="plus-square" size={50} color={colors.primary} />
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  containerCount: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  textCount: {
    fontSize: 25,
    fontWeight: 800,
  },
});
