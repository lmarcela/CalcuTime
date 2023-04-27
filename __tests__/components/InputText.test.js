import { render } from "@testing-library/react-native";
import InputText from "../../components/InputText";

let component;
describe("InputText", () => {
  beforeEach(() => {
    component = render(<InputText operation={"00:01*2+"} value={"03:00"} />);
  });
  it("should render successfully", () => {
    expect(component).toBeDefined();
    expect(component.getByText("00:01*2+")).toBeDefined();
    expect(component.getByText("03:00")).toBeDefined();
  });
});
