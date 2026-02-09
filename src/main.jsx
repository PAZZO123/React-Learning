import { createRoot } from "react-dom/client";
import Logo from "/src/assets/react.jpg";

let root = createRoot(document.getElementById("root"));

let h1 = <h1>Fun facts about React</h1>;

let list = (
  <ul>
           <li>Was first release in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 200K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
  </ul>
);
function reactCard(){
    return (<div>
    <img src={Logo} width="40px" />
    {h1}
    {list}
  </div>)
}
root.render(
  reactCard()
);
