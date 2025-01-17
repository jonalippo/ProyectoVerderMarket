import { StyleSheet, View, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";
import Search from "../components/Search";
import { useGetProductsQuery } from "../services/shop";
import Loading from "../components/Loading";

export default function ProductsCategory({ route }) {
  const { category } = route.params;
  const { data, isSuccess, isError, error, isLoading } = useGetProductsQuery(
    category.title
  );
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

  if (isError)
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    );

  if (isLoading) return <Loading />; //msj cargando

  return (
    <View style={styles.container}>
      <Search onChangeKeyword={(t) => setKeyword(t)} />
      <Text style={styles.text}>Productos</Text>
      <FlatList
        data={productsFiltered}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => <CardProduct product={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
    paddingBottom: 100,
  },

  columnWrapper: {
    justifyContent: "space-around",
    marginBottom: 20,
  },
});
