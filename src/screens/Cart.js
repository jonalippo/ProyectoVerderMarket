import { StyleSheet, FlatList, View, Pressable, Text } from "react-native";
import { colors } from "../../global/Theme";
import CardCartProduct from "../components/CardCartProduct";
import { usePostOrdersMutation } from "../services/orders";
import { useSelector } from "react-redux";
import { useGetCartQuery } from "../services/cart";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDeleteCartMutation } from "../services/cart";

const Cart = () => {
  const navigation = useNavigation();
  const [triggerPost] = usePostOrdersMutation();
  const [triggeDeleteCart] = useDeleteCartMutation();
  const localId = useSelector((state) => state.user.localId);
  const { data: cart, error, isLoading } = useGetCartQuery({ localId });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart) {
      setTotal(
        cart.reduce(
          (accumulator, item) => accumulator + item.price * item.quantity,
          0
        )
      );
    }
  }, [cart]);

  const confirmCart = () => {
    const createdAt = new Date().toLocaleDateString();
    const order = {
      products: cart,
      createdAt,
      total,
    };
    triggerPost({ order, localId });
    triggeDeleteCart({ localId });
    navigation.navigate("OrderStack");
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  if (cart.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyCartText}>
          No hay productos en el carrito.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
        renderItem={({ item }) => <CardCartProduct product={item} />}
      />
      <View style={styles.containerTotal}>
        <Text style={styles.text}>Total: ${total}</Text>
        <Pressable style={styles.containerButton} onPress={confirmCart}>
          <Text style={styles.textButton}>Finalizar compra</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "relative",
    width: "100%",
    flex: 1,
  },

  flatListContent: {
    paddingBottom: 150,
  },

  containerTotal: {
    width: "100%",
    backgroundColor: colors.secundary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 55,
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingVertical: 15,
  },

  text: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  containerButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    borderRadius: 70,
  },

  textButton: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },

  emptyCartText: {
    color: colors.secundary,
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 300,
  },
});
