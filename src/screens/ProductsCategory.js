import { StyleSheet, View, Text, FlatList } from "react-native";
import Header from "../components/Header";
import products from "../data/products.json";
import { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";
import Search from "../components/Search";

export default function ProductsCategory({ category }) {
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (keyword) {
      return setProductsFiltered(
        products.filter(
          (product) =>
            product.category === category && product.title.includes(keyword)
        )
      );
    }
    setProductsFiltered(
      products.filter((product) => product.category === category)
    );
  }, [keyword]);

  return (
    <View style={style.container}>
      <Header title={category} />
      <Search onChangeKeyword={(t) => setKeyword(t)} />
      <Text style={style.text}>Productos</Text>
      <FlatList
        data={productsFiltered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardProduct product={item} />}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: { gap: 10 },
  text: {
    color: "black",
    marginTop: 10,
    fontSize: 40,
    marginLeft: 10,
  },
  containerProducts: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    gap: 10,
  },
});
