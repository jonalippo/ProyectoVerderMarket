import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

export default function ProductDetails({ product }) {
  return (
    <View>
      <Header title={product.title} />
      <Text>{product.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
