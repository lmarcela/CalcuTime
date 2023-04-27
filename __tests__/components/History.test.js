import { render } from "@testing-library/react-native";
import History from "../../components/History";

let component;
describe("History", () => {
  beforeEach(() => {
    component = render(<History history={"00:02*2=04:00"} />);
  });
  it("should render successfully", () => {
    expect(component).toBeDefined();
    expect(component.getByText("00:02*2=04:00")).toBeDefined();
  });
});
