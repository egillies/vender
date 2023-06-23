import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { MoneyController } from "./controllers/MoneyController.js";
import { AboutView } from "./views/AboutView.js";



export const router = [
  {
    path: '',
    controller: MoneyController,
    view: ''
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]
