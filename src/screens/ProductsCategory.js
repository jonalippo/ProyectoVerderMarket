import { StyleSheet, View, Text, FlatList } from "react-native";
import Header from "../components/Header";
import products from "../data/products.json";
import { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";
import Search from "../components/Search";

export default function ProductsCategory({ route }) {
  const { category } = route.params;
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
        numColumns={2}
        contentContainerStyle={style.flatListContent}
        columnWrapperStyle={style.columnWrapper}
        renderItem={({ item }) => <CardProduct product={item} />}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    gap: 10,
    flex: 1,
  },

  text: {
    color: "black",
    marginTop: 10,
    fontSize: 40,
    marginLeft: 10,
  },

  flatListContent: {
    justifyContent: "center",
    paddingVertical: 10,
  },

  columnWrapper: {
    justifyContent: "space-around",
    marginBottom: 20,
  },
});
