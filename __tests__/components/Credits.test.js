import { render } from "@testing-library/react-native";
import Credits from "../../components/Credits";

let component;
describe("Credits", () => {
  beforeEach(() => {
    component = render(<Credits />);
  });
  it("should render successfully", () => {
    expect(component).toBeDefined();
    expect(component.getByText("© 2023 Marcela Malaver")).toBeDefined();
  });
});
