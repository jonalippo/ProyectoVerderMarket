import { StyleSheet, View, Text } from "react-native";
import Header from "../components/Header";
import Search from "../components/Search";
import CardProduct from "../components/CardProduct";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

export default function Home() {
  return (
    <View style={style.container}>
      <Header title="Home" />
      <Search />
      <Banner />
      <Categories />
      <Text style={style.title}>Productos</Text>
      <View style={style.containerCard}>
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: { flex: 1 },

  containerCard: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    gap: 10,
  },
  title: {
    fontSize: 30,
    alignItems: "flex-start",
    paddingVertical: 10,
    marginLeft: 10,
  },
});
