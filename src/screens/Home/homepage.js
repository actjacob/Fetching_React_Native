import React,{useState,useLayoutEffect} from "react";
import { Button, Text, View } from "react-native";

function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);


  
  useLayoutEffect(() => {

    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update" />
      ),
    });
  }, [navigation]);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{count} </Text>
      <Text>Home Screen</Text>
      <Button title="Users" onPress={() => navigation.navigate("UsersTab")} />

    </View>
  );
}

export default HomeScreen;
