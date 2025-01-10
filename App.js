import { StatusBar } from "expo-status-bar";
import { colors } from "./global/Theme";
import Navigator from "./src/navegation/Navigator";
import { Provider } from "react-redux";
import { store } from "./src/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Navigator />
      </Provider>

      <StatusBar style="light" backgroundColor={colors.primary} />
    </>
  );
}
