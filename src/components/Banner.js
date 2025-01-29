import { View, Image, StyleSheet } from "react-native";

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/banner2.1.png")}
        style={styles.img}
        resizeMode="contain"
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginHorizontal: 20,
    overflow: "hidden",
    marginVertical: 20,
  },

  img: {
    height: "100%",
    width: "100%",
  },
});
