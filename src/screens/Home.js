import { StyleSheet, View, Text, FlatList } from "react-native";
import Search from "../components/Search";
import CardProduct from "../components/CardProduct";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import products from "../data/products.json";
import { useEffect, useState } from "react";

export default function Home({ title }) {
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const filteredProducts = products
      .filter(
        (product) =>
          (!title || product.title === title) &&
          (!keyword ||
            product.title.toLowerCase().includes(keyword.toLowerCase()))
      )
      .slice(0, 4);
    setProductsFiltered(filteredProducts);
  }, [keyword, title]);

  return (
    <View style={style.container}>
      <Search onChangeKeyword={(text) => setKeyword(text)} />
      <Banner />
      <Categories />
      <Text style={style.title}>Productos</Text>
      <FlatList
        data={productsFiltered}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={style.flatListContent}
        columnWrapperStyle={style.columnWrapper}
        renderItem={({ item }) => (
          <View style={style.cardContainer}>
            <CardProduct product={item} />
          </View>
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: { flex: 1 },

  title: {
    fontSize: 30,
    alignItems: "flex-start",
    paddingVertical: 10,
    marginLeft: 10,
  },

  flatListContent: {
    justifyContent: "center",
  },

  columnWrapper: {
    justifyContent: "space-evenly",
  },

  cardContainer: {
    transform: [{ scale: 0.7 }],
  },
});
