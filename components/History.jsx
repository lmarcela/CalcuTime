import React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./History.styles";

const History = ({ history }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hr} />
      <View style={styles.content}>
        <Text style={styles.text}>Historial</Text>
        <Text style={{ fontSize: 24 }}>{history}</Text>
      </View>
    </ScrollView>
  );
};
export default History;
