import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../global/Theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { deleteSession } from "../config/dbSqlite";
import { deleteUser } from "../features/userSlice";

export default function Header({ title }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onLogout = () => {
    deleteSession();
    dispatch(deleteUser());
  };

  return (
    <View style={styles.container}>
      {title != "Home" ? (
        <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
          <AntDesign name="leftcircle" size={25} color="white" />
        </Pressable>
      ) : null}

      <Text style={styles.text}>{title}</Text>
      <Pressable style={styles.logout} onPress={onLogout}>
        <AntDesign name="logout" size={25} color="white" />
      </Pressable>
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

  logout: {
    position: "absolute",
    right: 15,
  },
});
