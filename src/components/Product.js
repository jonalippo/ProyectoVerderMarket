import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Product = () => {
  return (
    <Pressable style={styles.container}>
      <Image
        source={require("../../assets/banana.png")}
        style={styles.img}
        resizeMode="contain"
      ></Image>
      <View style={styles.containerDetails}>
        <Text style={styles.title}>Banana</Text>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>$100</Text>
          <Pressable style={styles.cart}>
            <FontAwesome5 name="cart-plus" size={20} color="black" />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    borderRadius: 10,
    padding: 10,
    gap: 10,
    width: "30%",
  },

  img: {
    minWidth: 80,
    minHeight: 60,
    maxWidth: 140,
    maxHeight: 140,
    width: "20vw",
    height: "20vw",
  },

  containerDetails: {},

  title: {
    fontSize: 24,
    marginLeft: 10,
  },

  containerPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },

  price: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
