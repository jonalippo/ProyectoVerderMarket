import { StyleSheet, Text, View, Pressable } from "react-native";
import { colors } from "../../global/Theme";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const CardOrder = ({ order }) => {
  const date = new Date(order.createdAt).toLocaleString();
  return (
    <View style={styles.container}>
      <View style={styles.contentText}>
        <Text style={styles.text}>{date}</Text>
        <Text style={styles.text}>Total: $ {order.total}</Text>
      </View>
      <Pressable style={styles.button}>
        <FontAwesome name="search" size={25} color={colors.primaryAccent} />
      </Pressable>
    </View>
  );
};

export default CardOrder;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.colorText,
    margin: 10,
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
  },

  contentText: {
    gap: 10,
  },

  text: {
    fontSize: 18,
  },
});
