import { createRoot } from "react-dom/client";
import Logo from "/src/assets/react.jpg";

let root = createRoot(document.getElementById("root"));
function Header(){
    return (
        <header> 
        <img src={Logo} width="40px"/>
          <h1>Fun Fact about React !</h1>
        </header>
    )
}
function Footer(){
    return (
        <p>    "© 2026 patrick development. All rights reserved."</p>
    )
}

function Page() {
    return (
        <ol>
            <li>React is a popular library, so I will be able to
            fit in with all the coolest devs out there! 😎</li>
            <li>I am more likely to get a job as a front end developer
            if I know React</li>
              <li>React is a popular library, so I will be able to
            fit in with all the coolest devs out there! 😎</li>
            <li>I am more likely to get a job as a front end developer
            if I know React</li>
              <li>React is a popular library, so I will be able to
            fit in with all the coolest devs out there! 😎</li>
            <li>I am more likely to get a job as a front end developer
            if I know React</li>
        </ol>
    )
}

root.render(
    <>
    <Header/>
    <Page />
    <Footer/>
    </>
)