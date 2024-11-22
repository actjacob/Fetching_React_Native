import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { UsersStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: "left",
        drawerType: "slide",
        swipeEnabled: false,
        drawerStyle: {
          width: 200,
        },
      }}
      // drawerContent={() => <DrawerContent />}
      initialRouteName="UsersDrawer"
    >
      <Drawer.Screen
        name="HomeDrawer"
        options={{
          title: "Home",
        }}
        component={TabNavigator}
      />
      <Drawer.Screen
        name="UsersDrawer"
        options={{
          title: "Users",
        }}
        component={UsersStackNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
