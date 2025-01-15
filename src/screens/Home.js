import { StyleSheet, View, Text, FlatList } from "react-native";
import Search from "../components/Search";
import CardProduct from "../components/CardProduct";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { useState, useEffect } from "react";
import { useGetAllProductsQuery } from "../services/shop";

export default function Home() {
  const { data } = useGetAllProductsQuery();
  const [keyword, setKeyword] = useState("");
  const [randomProducts, setRandomProducts] = useState([]);

  const getRandomProducts = (products) => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  useEffect(() => {
    if (data) {
      setRandomProducts(getRandomProducts(data));
    }
  }, [data]);

  return (
    <View style={style.container}>
      <Search onChangeKeyword={(text) => setKeyword(text)} />
      <Banner />
      <Categories />
      <Text style={style.title}>Productos</Text>
      <FlatList
        data={randomProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={style.flatListContent}
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
    marginLeft: 10,
  },

  flatListContent: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },

  cardContainer: {
    transform: [{ scale: 0.9 }],
    marginHorizontal: 5,
    marginVertical: 5,
  },
});
