import { StyleSheet, Image, View, Text } from "react-native";
import SubmitButton from "../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import { useGetUserQuery } from "../services/user";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

const Profile = () => {
  const navigation = useNavigation();
  const localId = useSelector((state) => state.user.localId);
  const { data: user, isLoading } = useGetUserQuery({ localId });

  if (isLoading) return <Loading />;

  return (
    <View style={styles.container}>
      <Image
        source={
          user?.image
            ? { uri: user.image }
            : require("../../assets/userDefault.png")
        }
        resizeMode="cover"
        style={styles.image}
      />

      <SubmitButton
        title="Agregar imagen de perfil"
        onPress={() => navigation.navigate("ImageSelector")}
      />
      <SubmitButton
        title="Agregar localizacion"
        onPress={() => {
          navigation.navigate("LocationSelector");
        }}
      />
      <View>
        <Text style={styles.textAddress}>{user?.address}</Text>
      </View>
    </View>
  );
};

export default Profile;

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

  textAddress: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: "bold",
  },
});
