import { StyleSheet } from "react-native";

const styles = (size) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
    },
    row: {
      flexDirection: "row",
      marginBottom: 4,
    },
    button: {
      width: size,
      height: size,
      backgroundColor: "#03a9f4",
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 2,
    },
    buttonText: {
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
    },
    buttonDark: {
      backgroundColor: "#0091ea",
    },
    buttonPink: {
      backgroundColor: "#e91e63",
    },
    bigButton: {
      width: size * 3 + 6,
      backgroundColor: "#03a9f4",
    },
  });

export default styles;
