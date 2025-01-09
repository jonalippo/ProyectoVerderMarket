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

const Counter = () => {
  const [inputAmount, setInputAmount] = useState(0);
  const counter = useSelector((state) => state.counter.value);
  const dispach = useDispatch;

  return (
    <View style={styles.containerCount}>
      <Pressable onPress={() => dispach(decrement())}>
        <Feather name="minus-square" size={30} color={colors.primaryAccent} />
      </Pressable>

      <Text style={styles.textCount}>{counter}</Text>

      <Pressable onPress={() => dispach(increment())}>
        <Feather name="plus-square" size={30} color={colors.primaryAccent} />
      </Pressable>

      <TextInput
        value={inputAmount}
        onChangeText={(t) => setInputAmount(parseInt(t))}
      />
      <Pressable onPress={() => dispach(incrementByAmount(inputAmount))}>
        <Text>Cambiar</Text>
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
