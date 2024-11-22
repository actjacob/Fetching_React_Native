import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import axios from "axios";
import Item from "./item";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const data = [
  {
    id: 1,
    name: "SHE",
  },
  { id: 2, name: "jacob" },
];

const UsersScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {loading ? (
        <Loading text={"Loading..."} />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item id={item.id} name={item.name} />}
        />
      )}
    </View>
  );
};

export default UsersScreen;
