import { createRoot } from "react-dom/client";
import Logo from "./public/vite.svg";

let root = createRoot(document.getElementById("root"));

let h1 = <h1>Fun facts about React</h1>;

let list = (
  <ul>
    <li>It was created in 2013</li>
    <li>It is maintained by Meta</li>
    <li>It is composable and very easy to use</li>
  </ul>
);

root.render(
  <div>
    <img src="{Logo}" width="40px" />
    {h1}
    {list}
  </div>
);
