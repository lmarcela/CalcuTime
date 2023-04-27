import { useRef, useState } from "react";
import {
  calculateOperationValue,
  convertToValidTime,
  formatNegativeTime,
  performMathematicalOperation,
  separateOperandsAndOperators,
  updateTime,
  updateValue,
} from "../utils/utils";

export const useCalculator = () => {
  const [isTime, setIsTime] = useState(true);
  const [value, setValue] = useState("0:00");
  const [operation, setOperation] = useState("");
  const [history, setHistory] = useState("");
  const operationCounterRef = useRef(0);

  const handleNumberPress = (number) => {
    setValue(isTime ? updateTime(number, value) : updateValue(number, value));
  };
  const clearHistory = () => {
    setHistory("");
    operationCounterRef.current = 0;
  };
  const reset = () => {
    setValue("0:00");
    setOperation("");
    setIsTime(true);
  };
  const handleOperatorPress = (operator, isTime) => {
    setIsTime(isTime);
    const complement =
      operation && (value == "0" || value == "0:00") ? "" : value;

    setOperation(calculateOperationValue(operation + complement, operator));

    setValue(isTime ? "0:00" : "0");
  };

  const handleEqualsPress = () => {
    setIsTime(true);
    calculate(operation + value);
  };

  const calculate = (input) => {
    const [operands, operators] = separateOperandsAndOperators(input);

    if (operators.length == 0) {
      const validResult = convertToValidTime(operands[0]);
      if (validResult !== operands[0]) {
        updateFields(input, validResult);
      }
      return;
    }
    if (!operation) {
      return;
    }
    const result = performMathematicalOperation(operands, operators);
    updateFields(input, formatNegativeTime(result));
  };

  const updateFields = (input, result) => {
    operationCounterRef.current++;
    setHistory(
      `#${operationCounterRef.current}: ${input}=${result}\n${history}`
    );
    setOperation("");
    setValue(result.replace("∞", "0:00"));
  };

  return {
    operation,
    value,
    reset,
    clearHistory,
    handleNumberPress,
    handleOperatorPress,
    handleEqualsPress,
    history,
  };
};
