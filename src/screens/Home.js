import { StyleSheet, View, Text } from "react-native";

export default function Home() {
  return (
    <View>
      <Text style={style.text}>Home</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {},
  text: {
    color: "black",
    marginTop: 80,
    fontSize: 40,
  },
});
