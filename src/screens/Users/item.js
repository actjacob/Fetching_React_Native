import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Item = ({ name, id }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("UserDetail", { id })}
      >
        <Text style={styles.text}>{name} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#D8D8D8",
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 24,
  },
});

export default Item;
