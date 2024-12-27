import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { colors } from "../../global/Theme";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";

export default function ProductDetails({ route }) {
  const { product } = route.params;
  const { images, title, description, price } = product;
  const imageMap = {
    "../../assets/manzanaRoja.png": require("../../assets/manzanaRoja.png"),
  };

  return (
    <View style={styles.container}>
      <Image
        source={imageMap[images]}
        style={styles.img}
        resizeMode="contain"
      />
      <View style={styles.containerDetails}>
        <View style={styles.titleHeart}>
          <Text style={styles.title}>{title}</Text>
          <Pressable>
            <FontAwesome5 name="heart" size={30} color={colors.primaryAccent} />
          </Pressable>
        </View>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>Precio: $ {price}</Text>
          <View style={styles.containerCount}>
            <Pressable>
              <Feather
                name="minus-square"
                size={40}
                color={colors.primaryAccent}
              />
            </Pressable>
            <Text style={styles.textCount}>Kg</Text>
            <Pressable>
              <Feather
                name="plus-square"
                size={40}
                color={colors.primaryAccent}
              />
            </Pressable>
          </View>
        </View>
        <Pressable style={styles.containerButton}>
          <Text style={styles.textButton}>Agregar al carrito</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },

  img: {
    width: "100%",
    height: 300,
  },

  containerDetails: {
    backgroundColor: "white",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    overflow: "hidden",
    alignItems: "center",
  },

  titleHeart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 50,
    marginTop: 10,
    gap: 100,
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },

  description: {
    fontSize: 20,
    textAlign: "left",
    padding: 20,
  },

  price: {
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 20,
    textAlign: "left",
    width: "40%",
  },

  containerPrice: {
    flexDirection: "row",
    paddingLeft: 25,
  },

  containerCount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    right: 30,
    width: "60%",
    gap: 10,
  },

  textCount: {
    fontSize: 22,
  },

  containerButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    borderRadius: 20,
    marginTop: 40,
  },

  textButton: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
});
