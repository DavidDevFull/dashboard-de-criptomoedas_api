import {search} from "./search.js"
import {dashboardGraphics} from "./dashboardGraphics.js"

export const containerContentMain = (container: HTMLDivElement) => {

   container.insertAdjacentHTML("beforeend", `
      <section class="container-content-main"></section> 
   `);

   const mainSection = container.querySelector(".container-content-main") as HTMLDivElement;

   if (mainSection) {
      search(mainSection);
      dashboardGraphics(mainSection);
   }
}