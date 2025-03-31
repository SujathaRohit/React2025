import useWindowWidth from "./useWindowWidth";

const WindowWidthComponent= ()=>{
    const width= useWindowWidth();
    return <h1>Window Width: {width} px</h1>
}
export default WindowWidthComponent;