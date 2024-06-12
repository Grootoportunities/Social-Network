import { create } from "react-test-renderer";
import { Status } from "./Status";

describe("Status component", () => {
  test("Status value from props should be in component state", () => {
    const component = create(
      <Status statusValue={"Test"} updateProfileStatus={() => {}} />,
    );
    const root = component.root;
    expect(root.props.statusValue).toBe("Test");
  });

  test("<span> should be rendered correctly after creating component", () => {
    const component = create(
      <Status statusValue={"Test"} updateProfileStatus={() => {}} />,
    );
    const root = component.root;
    const span = root.findByType("span");

    expect(span).not.toBeNull();
  });

  test("<span> should contain inner text", () => {
    const component = create(
      <Status statusValue={"Test"} updateProfileStatus={() => {}} />,
    );
    const root = component.root;
    const span = root.findByType("span");

    expect(span.children[0]).toBe("Test");
  });

  test("<input> should render after double click on <span>", () => {
    const component = create(
      <Status statusValue={"Test"} updateProfileStatus={() => {}} />,
    );
    const root = component.root;
    const span = root.findByType("span");
    span.props.onDoubleClick();
    const input = root.findByType("input");

    expect(input).not.toBeNull();
    expect(input.props.value).toBe("Test");
  });

  test("<input> should not be rendered after creation", () => {
    const component = create(
      <Status statusValue={"Test"} updateProfileStatus={() => {}} />,
    );
    const root = component.root;

    expect(() => {
      root.findByType("input");
    }).toThrow();
  });

  test("Update profile status callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(
      <Status statusValue={"Test"} updateProfileStatus={mockCallback} />,
    );
    const root = component.root;
    const span = root.findByType("span");
    span.props.onDoubleClick();
    const input = root.findByType("input");
    input.props.onBlur();
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
