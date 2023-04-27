import { fireEvent, render } from "@testing-library/react-native";
import Buttons from "../../components/Buttons";

jest.mock("react-native-vector-icons/Ionicons", () => {
  return () => {
    return <div testID="icon"></div>;
  };
});
let component;
const mockFunction = jest.fn();

describe("Buttons", () => {
  beforeEach(() => {
    component = render(
      <Buttons
        reset={mockFunction}
        clearHistory={mockFunction}
        handleNumberPress={mockFunction}
        handleOperatorPress={mockFunction}
        handleEqualsPress={mockFunction}
      />
    );
  });
  it("should render successfully", () => {
    expect(component).toBeDefined();
  });

  it("should render all buttons and simulate a click on each one", () => {
    let counter = 0;
    let button = component.getByText("7");
    fireEvent.press(button);
    counter++;
    expect(mockFunction).toHaveBeenCalledTimes(counter);

    button = component.getByText("8");
    fireEvent.press(button);
    counter++;
    expect(mockFunction).toHaveBeenCalledTimes(counter);

    button = component.getByText("9");
    fireEvent.press(button);
    counter++;
    expect(mockFunction).toHaveBeenCalledTimes(counter);

    button = component.getByText("/");
    fireEvent.press(button);
    counter++;
    expect(mockFunction).toHaveBeenCalledTimes(counter);

    button = component.getAllByTestId("icon")[0];
    fireEvent.press(button);
    counter++;
    expect(mockFunction).toHaveBeenCalledTimes(counter);

    button = component.getByText("4");
    fireEvent.press(button);
    counter++;
    expect(mockFunction).toHaveBeenCalledTimes(counter);

    button = component.getByText("5");
    fireEvent.press(button);
    counter++;
    expect(mockFunction).toHaveBeenCalledTimes(counter);

    button = component.getByText("6");
    fireEvent.press(button);
    counter++;
    expect(mockFunction).toHaveBeenCalledTimes(counter);

    button = component.getByText("*");
    fireEvent.press(button);
    counter++;
    expect(mockFunction).toHaveBeenCalledTimes(counter);

    button = component.getAllByTestId("icon")[1];
    fireEvent.press(button);
    counter++;
    expect(mockFunction).toHaveBeenCalledTimes(counter);

    button = component.getByText("1");
    fireEvent.press(button);
    counter++;
    expect(mockFunction).toHaveBeenCalledTimes(counter);

    button = component.getByText("2");
    fireEvent.press(button);
    counter++;
    expect(mockFunction).toHaveBeenCalledTimes(counter);

    button = component.getByText("3");
    fireEvent.press(button);
    counter++;
    expect(mockFunction).toHaveBeenCalledTimes(counter);

    button = component.getByText("-");
    fireEvent.press(button);
    counter++;
    expect(mockFunction).toHaveBeenCalledTimes(counter);

    button = component.getAllByTestId("icon")[2];
    fireEvent.press(button);
    counter++;
    expect(mockFunction).toHaveBeenCalledTimes(counter);

    button = component.getByText("0");
    fireEvent.press(button);
    counter++;
    expect(mockFunction).toHaveBeenCalledTimes(counter);

    button = component.getByText("+");
    fireEvent.press(button);
    counter++;
    expect(mockFunction).toHaveBeenCalledTimes(counter);

    button = component.getByText("=");
    fireEvent.press(button);
    counter++;
    expect(mockFunction).toHaveBeenCalledTimes(counter);
  });
});
