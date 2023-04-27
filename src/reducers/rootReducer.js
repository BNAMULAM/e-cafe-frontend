import { combineReducers } from "redux";

import {
    registerLogin,
    getLogin,
} from "./loginReducer";

import {
  addItem,
  getItems,
  deleteItems,
  updateItem
} from "./itemReducer"

import {
  addCombo,
  getCombos,
  deleteCombos,
  updateCombo
} from "./comboReducer"

import{
  addOffer,
  getOffer,
  deleteOffer,
  updateOffer
} from "./offerReducer"


import {
  addOrder,
  getOrders,
  deleteOrders,
  updateOrder
} from "./placeOrderReducer"


import {
  addPayment,
  getPayment,
  deletePayment,
  updatePayment
} from "./paymentReducer"

const rootReducer = combineReducers({
    
  registerLogin,
  getLogin,
  addItem,
  getItems,
  deleteItems,
  updateItem,
  addCombo,
  getCombos,
  deleteCombos,
  updateCombo,
  addOffer,
  getOffer,
  deleteOffer,
  updateOffer,
  addOrder,
  getOrders,
  deleteOrders,
  updateOrder,
  addPayment,
  getPayment,
  deletePayment,
  updatePayment
});

export default rootReducer;