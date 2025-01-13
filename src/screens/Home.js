import { StyleSheet, View, Text, FlatList } from "react-native";
import Search from "../components/Search";
import CardProduct from "../components/CardProduct";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../services/shop";

export default function Home({ route }) {
  const { category } = route.params;
  const { data, isSuccess } = useGetProductsQuery(category);
  const [keyword, setKeyword] = useState("");
  const [productsFiltered, setProductsFiltered] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setProductsFiltered(Object.values(data));
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isSuccess) {
      setProductsFiltered(
        Object.values(data).filter((product) => product.title.includes(keyword))
      );
    }
  }, [keyword, isSuccess]);

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
