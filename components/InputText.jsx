import { Text, View } from "react-native";
import styles from "./InputText.styles";

const InputText = ({ operation, value }) => {
  return (
    <View>
      <Text style={styles.labelText}>{operation}</Text>
      <Text style={styles.input}>{value}</Text>
    </View>
  );
};

export default InputText;
