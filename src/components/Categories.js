import { StyleSheet, FlatList, View, Text } from "react-native";
import categories from "../data/categories.json";
import ItemCategory from "./ItemCategory";

const Categories = () => {
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
    paddingBottom: 10,
  },
  title: {
    fontSize: 30,
    alignItems: "flex-start",
    paddingVertical: 10,
  },
  containerCard: {
    paddingBottom: 30,
  },
});
