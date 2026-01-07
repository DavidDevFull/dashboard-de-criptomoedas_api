// import ApexCharts from 'apexcharts'
import { menu } from "./components/menu.js";
import { containerContentMain } from "./components/containerContentMain.js";

const main = document.getElementById("app") as HTMLDivElement;


menu(main);
containerContentMain(main);

alert("👨🏻‍💻 Projeto em desenvolvimento 🎨");