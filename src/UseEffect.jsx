import { useEffect } from "react";

const UseEffect = () => {
  useEffect(() => {
    console.log("Component mounted!");
  }, []);

  return <h1>Hello, World!</h1>;
};
export default UseEffect;