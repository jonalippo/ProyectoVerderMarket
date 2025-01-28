import { FlatList, StyleSheet, View, Text } from "react-native";
import { colors } from "../../global/Theme";
import CardOrder from "../components/CardOrder";
import { useGetOrderUserQuery } from "../services/orders";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

const Orders = () => {
  const localId = useSelector((state) => state.user.localId);
  const {
    data: orders,
    refetch,
    isLoading,
  } = useGetOrderUserQuery({ localId });

  if (isLoading) {
    return <Loading />;
  }

  if (!orders) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyCartText}>No hay ordenes.</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
        renderItem={({ item }) => <CardOrder order={item} />}
      />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "relative",
    width: "100%",
    flex: 1,
  },

  flatListContent: {
    paddingBottom: 160,
  },

  emptyCartText: {
    color: colors.secundary,
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 300,
  },
});
