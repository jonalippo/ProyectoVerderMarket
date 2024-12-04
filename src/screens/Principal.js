import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";

export default function Home() {
  return (
    <View style={style.container}>
      <ImageBackground
        style={style.imgContainer}
        resizeMode="cover"
        source={require("../public/imageBackground2.jpg")}
      >
        <Image
          style={style.imgLogo}
          resizeMode="cover"
          source={require("../public/logo1.png")}
        />
        <Pressable style={style.boton}>
          <Text style={style.textButton}>Get into</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    flex: 1,
    alignItems: "center",
  },
  imgLogo: {
    width: 300,
    height: 300,
    marginTop: 120,
  },
  boton: {
    backgroundColor: "#4AAD0C",
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    borderRadius: 20,
    marginTop: 40,
  },
  textButton: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
});
