import React, { useEffect, useState } from "react";
import { View, Dimensions, SafeAreaView, StatusBar } from "react-native";

import styles from "./App.styles";
import InputText from "./components/InputText";
import History from "./components/History";
import Buttons from "./components/Buttons";
import Credits from "./components/Credits";
import { useCalculator } from "./hooks/useCalculator";

export default function App() {
  const { width, height } = Dimensions.get("window");
  const [orientation, setOrientation] = useState(
    width < height ? "portrait" : "landscape"
  );
  useEffect(() => {
    const handler = () => {
      const { width, height } = Dimensions.get("window");
      setOrientation(width < height ? "portrait" : "landscape");
    };

    Dimensions.addEventListener("change", handler);
  }, []);

  const {
    operation,
    value,
    reset,
    clearHistory,
    handleNumberPress,
    handleOperatorPress,
    handleEqualsPress,
    history,
  } = useCalculator();

  const inputTextComponent = <InputText operation={operation} value={value} />;
  const buttonsComponent = (
    <Buttons
      size={width < height ? width / 5 - 20 : height / 5 - 20}
      reset={reset}
      clearHistory={clearHistory}
      handleNumberPress={handleNumberPress}
      handleOperatorPress={handleOperatorPress}
      handleEqualsPress={handleEqualsPress}
    />
  );
  const historyComponent = <History history={history} />;
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#03a9f4" barStyle="default" />

        {orientation === "portrait" ? (
          <>
            <View style={styles.calculator} testID="portrait">
              {inputTextComponent}
              {buttonsComponent}
            </View>
            {historyComponent}
          </>
        ) : (
          <View style={styles.row} testID="landscape">
            <View style={styles.content}>
              {inputTextComponent}
              {historyComponent}
            </View>
            {buttonsComponent}
          </View>
        )}
      </SafeAreaView>
      <Credits />
    </>
  );
}
