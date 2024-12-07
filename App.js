import { StyleSheet } from "react-native";
import Principal from "./src/screens/Principal";
import { View } from "react-native";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <View style={style.container}>
      <Home />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
