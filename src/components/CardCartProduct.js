import { StyleSheet, Text, View, Image } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Counter from "./Counter";
import { colors } from "../../global/Theme";

export default function CardCartProduct({ product }) {
  const { id, images, title, description, price } = product;

  return (
    <View style={styles.container}>
      <View style={styles.containerProducts}>
        <Image
          source={{ uri: images }}
          style={styles.img}
          resizeMode="contain"
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Counter productId={id} />
        </View>

        <View style={styles.containerPrice}>
          <MaterialIcons
            name="delete"
            size={35}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.price}>$ {price}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 15,
  },

  containerProducts: {
    backgroundColor: colors.colorText,
    width: "95%",
    height: 180,
    flexDirection: "row",
    padding: 8,
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },

  img: {
    minWidth: 70,
    minHeight: 70,
    maxWidth: 100,
    maxHeight: 100,
    width: "20vw",
    height: "20vw",
  },

  containerText: {
    width: "60%",
    alignItems: "left",
    gap: 10,
    textAlign: "left",
    marginLeft: 5,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  description: {
    fontSize: 18,
    width: "80%",
  },

  containerCount: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  textCount: {
    fontSize: 25,
    fontWeight: 800,
  },

  containerPrice: {
    width: "20%",
    padding: 10,
    gap: 55,
  },

  icon: {
    marginHorizontal: "20%",
  },

  price: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
});
