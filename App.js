import { StatusBar } from "expo-status-bar";
import { colors } from "./global/Theme";
import Navigator from "./src/navegation/Navigator";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { init } from "./src/config/dbSqLite";

export default function App() {
  init();
  return (
    <>
      <Provider store={store}>
        <Navigator />
      </Provider>
      <StatusBar style="light" backgroundColor={colors.primary} />
    </>
  );
}
