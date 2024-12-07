import { Image, StyleSheet, Text, View } from "react-native";
import ShadowCard from "./ShadowCard";

const images = {
  1: require("../../assets/frutas.png"),
  2: require("../../assets/verduras.png"),
  3: require("../../assets/congelados1.png"),
  4: require("../../assets/especias.png"),
};

const ItemCategory = ({ item }) => {
  return (
    <View style={styles.container}>
      <ShadowCard>
        <Image source={images[item.id]} style={styles.img} />
      </ShadowCard>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
};

export default ItemCategory;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 80,
    alignItems: "center",
    justifyContent: "start",
  },
  img: {
    width: 65,
    height: 65,
    borderRadius: 30,
  },
  text: {
    fontWeight: "bold",
    color: "black",
    fontSize: 18,
    marginTop: 8,
  },
});
