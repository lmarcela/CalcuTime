import { Duration } from "luxon";

export const updateTime = (number, currentValue) => {
  const timeText = number
    ? currentValue + number
    : removeLastChar(currentValue);
  return parseTimeText(timeText);
};

const parseTimeText = (timeText) => {
  let parsedText = timeText.replace(":", "");
  parsedText = parseInt(parsedText).toString();
  parsedText = sliceString(parsedText, 7);
  parsedText = padStartString(parsedText, 7, "0");

  const newHours = parseInt(sliceString(parsedText, 5));
  const minutes = extractFrom(parsedText, 5);
  return `${newHours}:${minutes}`;
};

const DEFAULT_VALUE = "0";
export const updateValue = (newValue, currentValue) => {
  if (!newValue) {
    const updatedValue = removeLastChar(currentValue) || DEFAULT_VALUE;
    return updatedValue;
  }
  if (currentValue === DEFAULT_VALUE) {
    return newValue;
  }
  return currentValue + newValue;
};

const removeLastChar = (str) => str.slice(0, -1);
const sliceString = (str, position) => str.slice(0, position);
const padStartString = (str, lenght, paddingChar) =>
  str.padStart(lenght, paddingChar);
const extractFrom = (str, x) => str.slice(x);
const getLastChar = (str) => str.slice(-1);
export const getFirstChar = (str) => str[0];

export const calculateOperationValue = (newOperation, operator) => {
  const shouldChangeOperator = ["+", "-", "*", "/"].includes(
    getLastChar(newOperation)
  );

  return shouldChangeOperator
    ? removeLastChar(newOperation) + operator
    : newOperation + operator;
};

export const addLeadingZeroToNegativeNumber = (input) => {
  return getFirstChar(input) == "-" ? "0" + input : input;
};

export const formatNegativeTime = (time) => {
  return time.includes("-") ? "-" + time.replace(/-/g, "") : time;
};

export const separateOperandsAndOperators = (input) => {
  input = addLeadingZeroToNegativeNumber(input);
  const operands = input.split(/[\+\-\*\/]/);
  const operators = input.split(/[\d:.]+/).filter(Boolean);
  return [operands, operators];
};

export const convertToValidTime = (time) => {
  const [hours, minutes] = time.split(":");
  const duration = Duration.fromObject({ hours, minutes });
  return duration.toFormat("hh:mm");
};
export const performMathematicalOperation = (operands, operators) => {
  return operands.reduce((acc, curr, index) => {
    const operator = operators[index - 1];
    return performOperation(operator, acc, curr);
  });
};
export const performOperation = (operator, time1, time2) => {
  const [hours1, minutes1] = time1.split(":");
  const duration1 = Duration.fromObject({
    hours: hours1,
    minutes: minutes1,
  });

  const [hours2, minutes2] = time2.split(":");
  const duration2 = Duration.fromObject({
    hours: hours2,
    minutes: minutes2,
  });

  switch (operator) {
    case "+":
      return duration1.plus(duration2).toFormat("hh:mm");
    case "-":
      return duration1.minus(duration2).toFormat("hh:mm");
    case "*":
      return Duration.fromMillis(duration1 * time2).toFormat("hh:mm");
    case "/":
      return time2 != "0"
        ? Duration.fromMillis(duration1 / time2).toFormat("hh:mm")
        : "∞";
  }
};
