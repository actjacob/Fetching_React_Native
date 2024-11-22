import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";

//screens
import HomeScreen from "../screens/Home/homepage";
import UserDetail from "../screens/UserDetail/UserDetail";
import UsersScreen from "../screens/Users/userspage";
import { Button } from "react-native";
import DrawerButton from "../components/DrawerButton";

//Home Stack
const HomeStack =
  createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={
          HomeScreen
        }
        options={() => ({
          headerLeft:
            () => (
              <DrawerButton />
            ),
        })}
      />
    </HomeStack.Navigator>
  );
}

const UsersStack =
  createNativeStackNavigator();

function UsersStackNavigator() {
  return (
    <UsersStack.Navigator>
      <UsersStack.Screen
        name="User"
        component={
          UsersScreen
        }
      />
      <UsersStack.Screen
        name="UserDetail"
        component={
          UserDetail
        }
      />
    </UsersStack.Navigator>
  );
}

export {
  HomeStackNavigator,
  UsersStackNavigator,
};
