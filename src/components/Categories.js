import { StyleSheet, FlatList, View, Text } from "react-native";
import ItemCategory from "./ItemCategory";
import { useGetCategoriesQuery } from "../services/shop";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colors } from "../../global/Theme";

const Categories = () => {
  const {
    data: categories,
    isError,
    error,
    isLoading,
  } = useGetCategoriesQuery();

  if (isLoading)
    return (
      <View style={styles.containerLoading}>
        <FontAwesome name="spinner" size={50} color="black" />
        <Text style={styles.textLoading}>Cargando</Text>
      </View>
    ); //msj cargando

  if (isError)
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    ); //msj de error, sin estilos

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ItemCategory item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        contentContainerStyle={styles.containerCard}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingBottom: 15,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    alignItems: "flex-start",
    paddingVertical: 10,
  },

  containerCard: {
    paddingTop: 5,
  },

  containerLoading: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
    marginTop: 20,
  },

  textLoading: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.primaryAccent,
  },
});
