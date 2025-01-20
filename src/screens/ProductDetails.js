import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { colors } from "../../global/Theme";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";
import { usePostCartMutation } from "../services/cart";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function ProductDetails({ route }) {
  const { product } = route.params;
  const { images, title, description, price } = product;
  const imageMap = {
    "../../assets/manzanaRoja.png": require("../../assets/manzanaRoja.png"),
  };
  const navigation = useNavigation();
  const localId = useSelector((state) => state.user.localId);
  const [triggerAddProduct] = usePostCartMutation();

  const handleAddProduct = async () => {
    const cartProduct = {
      ...product,
      quantity: 1,
    };
    const result = await triggerAddProduct({ localId, cartProduct });
    navigation.navigate("CartStack");
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
      </View>
      <Pressable style={styles.containerButton} onPress={handleAddProduct}>
        <Text style={styles.textButton}>Agregar al carrito</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    position: "relative",
    alignItems: "center",
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
    height: "100%",
  },

  titleHeart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 50,
    marginTop: 15,
    gap: 60,
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
    position: "absolute",
    bottom: 70,
  },

  textButton: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
});
