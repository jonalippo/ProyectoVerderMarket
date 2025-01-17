import { Image, StyleSheet, View } from "react-native";
import SubmitButton from "../components/SubmitButton";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { usePatchImageProfileMutation } from "../services/user";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const ImageSelector = () => {
  const localId = useSelector((state) => state.user.localId);
  const [image, setImage] = useState("");
  const [triggerAddImageProfile] = usePatchImageProfileMutation();
  const navigation = useNavigation();

  const pickImage = async (method) => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) return;

    const config = {
      aspect: [1, 1],
      quality: 0.2, //calidad de imagen, 1 es maximo, 0 es nada
      base64: true, //pasa la foto a codigo para ser guardada en la BD
      allowsEditing: true, //Permite editar la foto
    };
    const result =
      method == "camera"
        ? await ImagePicker.launchCameraAsync(config)
        : await ImagePicker.launchImageLibraryAsync(config);

    if (result.canceled) return;
    setImage("data:image/jpg;base64," + result.assets[0].base64);
  };
  const confirmImage = () => {
    triggerAddImageProfile({ localId, image });
    navigation.navigate("ProfileStack");
  };

  return (
    <View style={styles.container}>
      <Image
        source={
          image ? { uri: image } : require("../../assets/userDefault.png")
        }
        resizeMode="cover"
        style={styles.image}
      />

      <SubmitButton title="Usar camara" onPress={() => pickImage("camera")} />
      <SubmitButton title="Usar galeria" onPress={() => pickImage("")} />
      <SubmitButton title="Confirmar" onPress={confirmImage} />
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    alignItems: "center",
    gap: 20,
  },

  image: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },
});
