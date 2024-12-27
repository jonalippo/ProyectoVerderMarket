import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../global/Theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

export default function Header({ title }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
        <AntDesign name="leftcircle" size={25} color="white" />
      </Pressable>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    position: "relative",
    marginTop: 35,
  },

  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },

  goBack: {
    position: "absolute",
    left: 15,
  },
});
