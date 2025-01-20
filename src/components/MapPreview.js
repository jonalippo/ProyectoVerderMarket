import { StyleSheet, Image, View } from "react-native";
import { googleApi } from "../config/googleApi";

const MapPreview = ({ location }) => {
  const mapStaticUrl = `https://maps.googleapis.com/maps/api/staticmap?
    center=${location.lat}, ${location.long}
    &zoom=13
    &size=600x300
    &maptype=roadmap
    &markers=color:red%7Clabel:%7C${location.lat}, ${location.long}
    &key=${googleApi}`;

  return (
    <View style={styles.container}>
      <Image
        source={location.lat && { uri: mapStaticUrl }}
        style={styles.image}
      />
    </View>
  );
};

export default MapPreview;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  image: {
    width: 400,
    height: 300,
    backgroundColor: "grey",
  },
});
