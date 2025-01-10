import { StyleSheet, FlatList, View, Text } from "react-native";
import ItemCategory from "./ItemCategory";
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../services/shop";

const Categories = () => {
  const { data: categories } = useGetCategoriesQuery();

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
    alignItems: "flex-start",
    paddingVertical: 10,
  },

  containerCard: {
    paddingTop: 5,
  },
});
