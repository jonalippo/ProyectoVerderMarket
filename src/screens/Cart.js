import { StyleSheet, FlatList, View, Pressable, Text } from "react-native";
import cart from "../data/cart.json";
import { colors } from "../../global/Theme";
import CardCartProduct from "../components/CardCartProduct";
import { usePostOrdersMutation } from "../services/orders";

const Cart = () => {
  const [triggerPost] = usePostOrdersMutation();
  const confirmCart = () => {
    triggerPost({ id: "2", products: [{ id: "2" }], total: 120 });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={cart.products}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
        renderItem={({ item }) => <CardCartProduct product={item} />}
      />

      <Pressable style={styles.containerButton} onPress={confirmCart}>
        <Text style={styles.textButton}>Verificar</Text>
      </Pressable>
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
