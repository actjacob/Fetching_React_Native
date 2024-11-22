import React, { useState, useEffect, useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Loading from "../../components/Loading";
import axios from "axios";
import Error from "../../components/Error";
import { loadPartialConfig } from "@babel/core";

const UserDetail = ({ route, navigation }) => {
  const { id } = route.params;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results);
        setLoading(false);
      });
  }, []);
  return (
    <View>
      {loading ? (
        <Loading text={"Loading..."} />
      ) : (
        <>
          <Text style={styles.text}>UserDetail </Text>

          <Text style={styles.text}>{JSON.stringify(user, null, 2)} </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});

export default UserDetail;
