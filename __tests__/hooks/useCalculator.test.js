import { renderHook, act } from "@testing-library/react-hooks";
import { useCalculator } from "../../hooks/useCalculator";

describe("useCalculator", () => {
  it("should backspace sucessfully", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.handleNumberPress("1");
    });
    act(() => {
      result.current.handleNumberPress("9");
    });
    act(() => {
      result.current.handleNumberPress("");
    });
    act(() => {
      result.current.handleNumberPress("2");
    });
    expect(result.current.value).toBe("0:12");
  });
  
  it("should change operator", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.handleOperatorPress("*", false);
    });
    act(() => {
      result.current.handleOperatorPress("+", true);
    });
    act(() => {
      result.current.handleOperatorPress("-", false);
    });
    act(() => {
      result.current.handleEqualsPress();
    });
    expect(result.current.value).toBe("00:00");
    expect(result.current.operation).toBe("");
    expect(result.current.history).toBe("#1: 0:00-0=00:00\n");
  });

  it("should add sucessfully", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.handleNumberPress("1");
    });
    expect(result.current.value).toBe("0:01");
    expect(result.current.operation).toBe("");
    expect(result.current.history).toBe("");

    act(() => {
      result.current.handleOperatorPress("+", true);
    });
    expect(result.current.value).toBe("0:00");
    expect(result.current.operation).toBe("0:01+");
    expect(result.current.history).toBe("");
    act(() => {
      result.current.handleNumberPress("2");
    });
    expect(result.current.value).toBe("0:02");
    expect(result.current.operation).toBe("0:01+");
    expect(result.current.history).toBe("");
    act(() => {
      result.current.handleEqualsPress();
    });
    expect(result.current.value).toBe("00:03");
    expect(result.current.operation).toBe("");
    expect(result.current.history).toBe("#1: 0:01+0:02=00:03\n");
  });

  it("should multiply sucessfully", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.handleNumberPress("1");
    });
    act(() => {
      result.current.handleNumberPress("6");
    });
    act(() => {
      result.current.handleNumberPress("5");
    });
    act(() => {
      result.current.handleOperatorPress("*", false);
    });
    act(() => {
      result.current.handleNumberPress("5");
    });
    act(() => {
      result.current.handleEqualsPress();
    });
    expect(result.current.value).toBe("10:25");
    expect(result.current.operation).toBe("");
    expect(result.current.history).toBe("#1: 1:65*5=10:25\n");
  });

  it("should divide by zero", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.handleNumberPress("6");
    });
    act(() => {
      result.current.handleOperatorPress("/", false);
    });
    act(() => {
      result.current.handleEqualsPress();
    });
    expect(result.current.value).toBe("0:00");
    expect(result.current.operation).toBe("");
    expect(result.current.history).toBe("#1: 0:06/0=∞\n");
  });

  it("should divide successfully", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.handleNumberPress("6");
    });
    act(() => {
      result.current.handleOperatorPress("/", false);
    });
    act(() => {
      result.current.handleNumberPress("2");
    });
    act(() => {
      result.current.handleEqualsPress();
    });
    expect(result.current.value).toBe("00:03");
    expect(result.current.operation).toBe("");
    expect(result.current.history).toBe("#1: 0:06/2=00:03\n");
  });

  it("should display a negative time and reset", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.handleNumberPress("6");
    });
    act(() => {
      result.current.handleOperatorPress("-", true);
    });
    act(() => {
      result.current.handleNumberPress("9");
    });
    act(() => {
      result.current.handleEqualsPress();
    });
    expect(result.current.value).toBe("-00:03");
    expect(result.current.operation).toBe("");
    expect(result.current.history).toBe("#1: 0:06-0:09=-00:03\n");
    act(() => {
      result.current.reset();
    });
    expect(result.current.value).toBe("0:00");
    expect(result.current.operation).toBe("");
    expect(result.current.history).toBe("#1: 0:06-0:09=-00:03\n");
  });

  it("Should convert to hours and clear history", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.handleNumberPress("9");
    });
    act(() => {
      result.current.handleNumberPress("6");
    });
    act(() => {
      result.current.handleEqualsPress();
    });
    expect(result.current.value).toBe("01:36");
    expect(result.current.operation).toBe("");
    expect(result.current.history).toBe("#1: 0:96=01:36\n");
    act(() => {
      result.current.clearHistory();
    });
    expect(result.current.value).toBe("01:36");
    expect(result.current.operation).toBe("");
    expect(result.current.history).toBe("");
  });

  it("No history should be created", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.handleNumberPress("2");
    });
    act(() => {
      result.current.handleNumberPress("0");
    });
    act(() => {
      result.current.handleNumberPress("0");
    });
    act(() => {
      result.current.handleNumberPress("0");
    });
    act(() => {
      result.current.handleEqualsPress();
    });
    expect(result.current.value).toBe("20:00");
    expect(result.current.operation).toBe("");
    expect(result.current.history).toBe("");
  });

  it("Should not generate history when = is pressed after getting a negative time as result", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.handleOperatorPress("-", true);
    });
    act(() => {
      result.current.handleNumberPress("9");
    });
    act(() => {
      result.current.handleEqualsPress();
    });
    expect(result.current.value).toBe("-00:09");
    expect(result.current.operation).toBe("");
    expect(result.current.history).toBe("#1: 0:00-0:09=-00:09\n");
    act(() => {
      result.current.handleEqualsPress();
    });
    expect(result.current.value).toBe("-00:09");
    expect(result.current.operation).toBe("");
    expect(result.current.history).toBe("#1: 0:00-0:09=-00:09\n");
  });

  it("Should display the correct value when changing the number or using the backspace key", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.handleNumberPress("5");
    });
    act(() => {
      result.current.handleOperatorPress("*", false);
    });
    expect(result.current.value).toBe("0");
    expect(result.current.operation).toBe("0:05*");

    act(() => {
      result.current.handleNumberPress("2");
    });
    expect(result.current.value).toBe("2");

    act(() => {
      result.current.handleNumberPress("");
    });
    expect(result.current.value).toBe("0");

    act(() => {
      result.current.handleNumberPress("3");
    });
    act(() => {
      result.current.handleNumberPress("6");
    });
    expect(result.current.value).toBe("36");

    act(() => {
      result.current.handleNumberPress("");
    });
    expect(result.current.value).toBe("3");

    act(() => {
      result.current.handleEqualsPress();
    });
    expect(result.current.value).toBe("00:15");
    expect(result.current.operation).toBe("");
    expect(result.current.history).toBe("#1: 0:05*3=00:15\n");
  });
});
