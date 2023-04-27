import { act, render } from "@testing-library/react-native";
import { Dimensions } from "react-native";
import App from "../App";

jest.mock("../components/InputText", () => {
  return () => {
    return <div testID="input-text"></div>;
  };
});

jest.mock("../components/History", () => {
  return () => {
    return <div testID="history"></div>;
  };
});

jest.mock("../components/Buttons", () => {
  return () => {
    return <div testID="buttons"></div>;
  };
});

jest.mock("../components/Credits", () => {
  return () => {
    return <div testID="credits"></div>;
  };
});

const mockDimensions = ({ width, height }) => {
  jest.resetModules();
  jest.doMock("react-native/Libraries/Utilities/Dimensions", () => ({
    get: jest.fn().mockReturnValue({ width, height }),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
};

let component;

describe("App", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render successfully", () => {
    mockDimensions({ width: 480, height: 700 });
    component = render(<App />);
    expect(component).toBeDefined();
    expect(component.getByTestId("input-text")).toBeDefined();
    expect(component.getByTestId("history")).toBeDefined();
    expect(component.getByTestId("buttons")).toBeDefined();
    expect(component.getByTestId("credits")).toBeDefined();
  });

  it("should render portrait", () => {
    mockDimensions({ width: 400, height: 800 });
    component = render(<App />);
    expect(component.getByTestId("portrait")).toBeDefined();
  });

  it("should detect orientation change in portrait", () => {
    mockDimensions({ width: 400, height: 800 });
    component = render(<App />);
    const handler = Dimensions.addEventListener.mock.calls[0][1];
    act(() => {
      handler();
    });
    expect(component.getByTestId("portrait")).toBeDefined();
  });

  it("should render landscape", async () => {
    mockDimensions({ width: 800, height: 400 });
    component = render(<App />);
    expect(component.getByTestId("landscape")).toBeDefined();
  });

  it("should detect orientation change in landscape", async () => {
    mockDimensions({ width: 800, height: 400 });
    component = render(<App />);
    const handler = Dimensions.addEventListener.mock.calls[0][1];
    act(() => {
      handler();
    });
    expect(component.getByTestId("landscape")).toBeDefined();
  });
});
