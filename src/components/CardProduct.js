import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { colors } from "../../global/Theme";
import { useNavigation } from "@react-navigation/native";

const CardProduct = ({ product }) => {
  const { images, title, price } = product;
  const imageMap = {
    "../../assets/manzanaRoja.png": require("../../assets/manzanaRoja.png"),
    "../../assets/banana.png": require("../../assets/banana.png"),
    "../../assets/lechuga.png": require("../../assets/lechuga.png"),
    "../../assets/zanahorias.png": require("../../assets/zanahorias.png"),
  };
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("ProductDetails", { product })}
    >
      <Image
        source={imageMap[images]}
        style={styles.img}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>$ {price}</Text>
          <Pressable style={styles.cart}>
            <FontAwesome5 name="cart-plus" size={20} color="black" />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  container: {
    borderColor: colors.primaryAccent,
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    gap: 10,
  },

  img: {
    minWidth: 160,
    minHeight: 140,
    maxWidth: 180,
    maxHeight: 180,
    width: "20vw",
    height: "20vw",
  },

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
