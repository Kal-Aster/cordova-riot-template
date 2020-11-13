import { component } from "riot";
import AppComponent from "./components/app.riot";

document.addEventListener("deviceready", () => {
    component(AppComponent)(document.querySelector("app") as HTMLElement);
}, false);