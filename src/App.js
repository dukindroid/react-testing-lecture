import { memo } from "react";

export default function App() {
  return (
    <div>
      <ComponentA userName={"foo ComponentA"} />
      <ComponentB userName={"foo CompsonentB"} />
    </div>
  );
}

export const ComponentA = (props) => {
  return <div> Hi, {props.userName} </div>;
};

export const ComponentB = memo((props) => {
  return <div> Hi, {props.userName} </div>;
});
