import { StatusBar } from "expo-status-bar";
import { colors } from "./global/Theme";
import Navigator from "./src/navegation/Navigator";

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor={colors.primary} />
      <Navigator />
    </>
  );
}
