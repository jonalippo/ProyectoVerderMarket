import { View, Image, StyleSheet } from "react-native";

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Banner1.png")}
        style={styles.img}
        resizeMode="cover"
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    margin: 20,
    overflow: "hidden",
  },

  img: {
    height: "100%",
    width: "100%",
  },
});
