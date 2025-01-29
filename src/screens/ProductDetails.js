import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { colors } from "../../global/Theme";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useGetProductCartQuery, usePostCartMutation } from "../services/cart";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Counter from "../components/Counter";
import { useState } from "react";

export default function ProductDetails({ route }) {
  const [quantity, setQuantity] = useState(1);
  const { product } = route.params;
  const navigation = useNavigation();
  const localId = useSelector((state) => state.user.localId);
  const [triggerAddProduct] = usePostCartMutation();
  const { data: productCart } = useGetProductCartQuery({
    localId,
    productId: product.id,
  });

  const cartQuantity = productCart ? productCart.quantity : 0;
  const availableStock = product.stock - cartQuantity;
  const totalPrice = product.price * quantity;

  const increment = () => {
    if (quantity < availableStock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddProduct = async () => {
    if (availableStock === 0) return;
    const newQuantity = quantity + cartQuantity;

    const cartProduct = {
      ...product,
      quantity: newQuantity,
    };
    await triggerAddProduct({ localId, cartProduct });
    setQuantity(1);
    navigation.navigate("CartStack");
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.images }}
        style={styles.img}
        resizeMode="contain"
      />

      <View style={styles.containerDetails}>
        <View style={styles.titleHeart}>
          <Text style={styles.title}>{product.title}</Text>
          <Pressable>
            <FontAwesome5 name="heart" size={30} color={colors.primaryAccent} />
          </Pressable>
        </View>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>Precio: $ {product.price}</Text>
          <View style={styles.containerCount}>
            <Counter
              quantity={quantity}
              increment={increment}
              decrement={decrement}
            />
          </View>
        </View>

        <Text style={styles.totalText}>Total: $ {totalPrice}</Text>

        {availableStock === 0 && (
          <Text style={styles.outOfStock}>
            ¡No hay más unidades disponibles!
          </Text>
        )}
      </View>
      <Pressable
        style={[
          styles.containerButton,
          availableStock === 0 && styles.disabledButton,
        ]}
        onPress={handleAddProduct}
        disabled={availableStock === 0}
      >
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
    textAlign: "center",
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

  totalText: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
    color: colors.primaryAccent,
  },

  textCount: {
    fontSize: 22,
  },

  containerButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    borderRadius: 20,
    position: "absolute",
    bottom: 70,
  },

  textButton: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },

  outOfStock: {
    color: colors.secundary,
    fontWeight: 600,
    fontSize: 22,
    marginTop: 20,
    textAlign: "center",
  },

  disabledButton: {
    backgroundColor: "#d3d3d3",
  },
});
