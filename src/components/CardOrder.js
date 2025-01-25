import { StyleSheet, Text, View, FlatList } from "react-native";
import { colors } from "../../global/Theme";

const CardOrder = ({ order }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerDetail}>
        <Text style={styles.title}>Fecha de compra:</Text>
        <Text style={styles.textFech}>{order.createdAt}</Text>
        <Text style={styles.title}>Productos comprados:</Text>
        <FlatList
          data={order.products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.containerProduct}>
              <Text style={styles.textFech}>• {item.title}</Text>
              <Text style={styles.textFech}>$ {item.price}</Text>
            </View>
          )}
        />
      </View>
      <Text style={styles.textTotal}>Total: $ {order.total}</Text>
    </View>
  );
};

export default CardOrder;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.colorText,
    margin: 10,
    padding: 20,
    alignItems: "flex-start",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.primaryAccent,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },

  containerDetail: {
    gap: 8,
    alignItems: "flex-start",
    marginBottom: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  containerProduct: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  textFech: {
    fontSize: 18,
  },

  textTotal: {
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    bottom: 10,
    right: 20,
  },
});
