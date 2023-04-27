import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./Buttons.styles";

const Buttons = ({
  size,
  reset,
  clearHistory,
  handleNumberPress,
  handleOperatorPress,
  handleEqualsPress,
}) => {
  return (
    <View style={styles(size).container}>
      <View style={styles(size).row}>
        <TouchableOpacity
          style={styles(size).button}
          onPress={() => handleNumberPress("7")}
        >
          <Text style={styles(size).buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles(size).button}
          onPress={() => handleNumberPress("8")}
        >
          <Text style={styles(size).buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles(size).button}
          onPress={() => handleNumberPress("9")}
        >
          <Text style={styles(size).buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles(size).button, styles(size).buttonDark]}
          onPress={() => handleOperatorPress("/", false)}
        >
          <Text style={styles(size).buttonText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles(size).button, styles(size).buttonPink]}
          onPress={clearHistory}
        >
          <Icon name="trash-bin-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles(size).row}>
        <TouchableOpacity
          style={styles(size).button}
          onPress={() => handleNumberPress("4")}
        >
          <Text style={styles(size).buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles(size).button}
          onPress={() => handleNumberPress("5")}
        >
          <Text style={styles(size).buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles(size).button}
          onPress={() => handleNumberPress("6")}
        >
          <Text style={styles(size).buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles(size).button, styles(size).buttonDark]}
          onPress={() => handleOperatorPress("*", false)}
        >
          <Text style={styles(size).buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles(size).button, styles(size).buttonPink]}
          onPress={() => handleNumberPress("")}
        >
          <Icon name="backspace-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles(size).row}>
        <TouchableOpacity
          style={styles(size).button}
          onPress={() => handleNumberPress("1")}
        >
          <Text style={styles(size).buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles(size).button}
          onPress={() => handleNumberPress("2")}
        >
          <Text style={styles(size).buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles(size).button}
          onPress={() => handleNumberPress("3")}
        >
          <Text style={styles(size).buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles(size).button, styles(size).buttonDark]}
          onPress={() => handleOperatorPress("-", true)}
        >
          <Text style={styles(size).buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles(size).button, styles(size).buttonPink]}
          onPress={reset}
        >
          <Icon name="refresh" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles(size).row}>
        <TouchableOpacity
          style={[styles(size).button, styles(size).bigButton]}
          onPress={() => handleNumberPress("0")}
        >
          <Text style={styles(size).buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles(size).button, styles(size).buttonDark]}
          onPress={() => handleOperatorPress("+", true)}
        >
          <Text style={styles(size).buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles(size).button, styles(size).buttonDark]}
          onPress={handleEqualsPress}
        >
          <Text style={styles(size).buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Buttons;
