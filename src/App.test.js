import React from "react";
import { render } from "@testing-library/react";
import { perf, wait } from "react-performance-testing";
import "@testing-library/jest-dom";
import "jest-performance-testing";

test("ComponentAte", async () => {
  const { renderTime } = perf(React);
  const ComponentA = (props) => {
    return <div> Hi, {props.userName} </div>;
  };
  render(<ComponentA userName={"foo ComponentA"} />);

  await wait(() => {
    expect(renderTime.current.ComponentA).toBeMountedWithin(18);
  });
});

test("Component vb", async () => {
  const { renderTime } = perf(React);

  const ComponentB = React.memo((props) => {
    return <div> Hia, {props.userName} </div>;
  });
  render(<ComponentB userName={"foo ComponentB"} />);
  await wait(() => {
    expect(renderTime.current.ComponentB).toBeMountedWithin(18);
  });
});
