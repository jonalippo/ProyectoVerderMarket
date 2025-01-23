import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { colors } from "../../global/Theme";
import { useNavigation } from "@react-navigation/native";

export default function Principal() {
  const navigation = useNavigation();
  const ingresar = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={style.container}>
      <ImageBackground
        style={style.imgContainer}
        resizeMode="cover"
        source={require("../../assets/imageBackground2.jpg")}
      >
        <Image
          style={style.imgLogo}
          resizeMode="cover"
          source={require("../../assets/logo1.png")}
        />
        <Pressable
          style={style.boton}
          onPress={() => navigation.navigate("Login", {})}
        >
          <Text style={style.textButton} onPress={ingresar}>
            Ingresar
          </Text>
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
    backgroundColor: colors.primary,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    borderRadius: 70,
    marginTop: 40,
  },
  textButton: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
});
