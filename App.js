import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import DrawerNavigator from "./src/navigation/DrawerNavigator";

function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;

const styles =
  StyleSheet.create(
    {
      container:
        {
          flex: 1,
          backgroundColor:
            "#fff",
          alignItems:
            "center",
          justifyContent:
            "center",
        },
    }
  );
