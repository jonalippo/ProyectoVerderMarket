import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { colors } from "../../global/Theme";
import { useDeleteCartProductMutation } from "../services/cart";
import { useSelector } from "react-redux";

export default function CardCartProduct({ product }) {
  const { images, title, description, price, quantity } = product;
  const localId = useSelector((state) => state.user.localId);
  const [triggerDeleteItemCart] = useDeleteCartProductMutation();
  const deleteItemCart = () => {
    triggerDeleteItemCart({ localId, productId: product.id });
  };
  const totalPrice = price * quantity;

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
          <Text style={styles.description}>▪ {description}</Text>
          <Text style={styles.description}>▪ Cantidad: {quantity}</Text>
        </View>

        <View style={styles.containerPrice}>
          <Pressable onPress={deleteItemCart}>
            <MaterialIcons
              name="delete"
              size={35}
              color="black"
              style={styles.icon}
            />
          </Pressable>
          <Text style={styles.price}>$ {totalPrice}</Text>
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
    gap: 15,
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
    borderWidth: 2,
    borderColor: colors.primaryAccent,
    borderRadius: 10,
    marginLeft: 15,
  },

  containerText: {
    width: "50%",
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
    width: "90%",
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
