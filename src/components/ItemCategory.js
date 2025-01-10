import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const images = {
  1: require("../../assets/frutas.png"),
  2: require("../../assets/verduras.png"),
  3: require("../../assets/congelados1.png"),
  4: require("../../assets/especias.png"),
};

const ItemCategory = ({ item: category }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate("ProductsCategory", { category })}
      >
        <Image source={images[category.id]} style={styles.img} />
        <Text style={styles.text}>{category.title}</Text>
      </Pressable>
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
    fontSize: 16,
    marginTop: 8,
    textAlign: "center",
  },
});
