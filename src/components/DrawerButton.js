import { TouchableOpacity, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const DrawerButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Text>
        <Ionicons name={"menu-outline"} size={28} color={"#000"} />
      </Text>
    </TouchableOpacity>
  );
};

export default DrawerButton;
