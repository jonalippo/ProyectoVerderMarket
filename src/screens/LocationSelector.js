import { StyleSheet, Text, View } from "react-native";
import SubmitButton from "../components/SubmitButton";
import MapPreview from "../components/MapPreview";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { googleApi } from "../config/googleApi";
import { useSelector } from "react-redux";
import { usePatchLocationMutation } from "../services/user";
import { useNavigation } from "@react-navigation/native";

const LocationSelector = () => {
  const navigation = useNavigation();
  const localId = useSelector((state) => state.user.localId);
  const [triggerLocation] = usePatchLocationMutation();
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState({
    lat: "",
    long: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") return;
        const newLocation = await Location.getCurrentPositionAsync();
        setLocation({
          lat: newLocation.coords.latitude,
          long: newLocation.coords.longitude,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    const fetchAddress = async () => {
      if (location.lat && location.long) {
        const urlReverseGeocoding = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.long}&key=${googleApi}`;
        try {
          const response = await fetch(urlReverseGeocoding);
          const data = await response.json();
          console.log("Respuesta de la API:", data);
          if (data.results.length > 0) {
            setAddress(data.results[0].formatted_address);
          } else {
            setAddress("Dirección no encontrada");
          }
        } catch (error) {
          console.error("Error al obtener la dirección:", error);
          setAddress("Error al obtener dirección");
        }
      }
    };

    fetchAddress();
  }, [location]);

  const handleConfirmLocation = () => {
    triggerLocation({ localId, address, location });
    navigation.navigate("Perfil");
  };

  return (
    <View style={styles.container}>
      <MapPreview location={location} />
      <Text style={styles.addressTitle}>Tu dirección es:</Text>
      <Text style={styles.addressText}>{address}</Text>
      <SubmitButton
        title="Confirmar ubicación"
        onPress={handleConfirmLocation}
      />
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    alignItems: "center",
    gap: 20,
  },

  addressTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  addressText: {
    fontSize: 18,
    textAlign: "center",
  },
});
