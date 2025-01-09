import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../../global/Theme";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../features/conunterSlice";
import Feather from "@expo/vector-icons/Feather";

const Counter = ({ productId }) => {
  const [inputAmount, setInputAmount] = useState(0);
  const counter = useSelector((state) => state.counter[productId]?.value ?? 0);
  const dispatch = useDispatch();

  return (
    <View style={styles.containerCount}>
      <Pressable onPress={() => dispatch(decrement(productId))}>
        <Feather name="minus-square" size={30} color={colors.primaryAccent} />
      </Pressable>

      <Text style={styles.textCount}>{counter}</Text>

      <Pressable onPress={() => dispatch(increment(productId))}>
        <Feather name="plus-square" size={30} color={colors.primaryAccent} />
      </Pressable>

      {/* <TextInput
        value={inputAmount}
        onChangeText={(t) => setInputAmount(parseInt(t))}
      />
      <Pressable
        onPress={() =>
          dispatch(incrementByAmount({ id: productId, amount: inputAmount }))
        }
      >
        <Text>Cambiar</Text>
      </Pressable> */}
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
