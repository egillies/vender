import { AppState } from "../AppState.js";
import { moneyService } from "../services/MoneyService.js";
import { setText } from "../utils/Writer.js";

function _drawMoney() {
    // let stringOfMoney = ''

    // for (let i = 0; i < AppState.money; i++) {
    //     stringOfMoney += '💰'
    // }

    let money = AppState.money

    console.log('drawing', money);

    setText('moneyAmount', money)

    document
}


export class MoneyController {
    constructor() {
        console.log('money controller is working')
        // TODO listen to the appstate' money and if it changes, redraw
        AppState.on('money', _drawMoney)
    }
    addMoney() {
        moneyService.addMoney()
    }
    // drawMoney() {
    //     console.log('the button was clicked')
    //     moneyService.addMoney()
    // }
}