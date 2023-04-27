import axios from 'axios';
import API from "../constants/api.json"

export const addPayment = (obj)=> async dispatch=> {
  await axios
    .post(API.addPayment, obj)
  .then((resp)=>{
    dispatch({
      type:"ADD_PAYMENT",
      payload:resp.data
    })
    alert("Payment Added")
  })
  .catch((err)=>{
    dispatch({
      type:"ADD_PAYMENT_ERR",
      payload:err.response
    })
    alert("Payment Adding Failed")
  });  
};

export const getPayment = (userName)=> async dispatch=> {
    await axios
      .get(API.getPayment+userName)
    .then((resp)=>{

      dispatch({
        type:"GET_PAYMENT",
        payload:resp.data
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_PAYMENT_ERR",
        payload:err.response
      })
      alert("Something went wrong while getting Payments");
    });  
  };


  export const deletePayment = (paymentId)=> async dispatch=> {
    await axios
      .post(API.deletePayment+paymentId)
    .then((resp)=>{
      dispatch({
        type:"DELETE_PAYMENT",
        payload:resp.data
      })
      alert("Payment deleted.");
    })
    .catch((err)=>{
      dispatch({
        type:"DELETE_PAYMENT_ERR",
        payload:err.response
      })
      alert("Something went wrong while Deleting Payments");
    });  
  };
  export const updatePayment = (obj)=> async dispatch=> {
    await axios
      .put(API.updatePayment+obj.paymentCode,obj)
    .then((resp)=>{
      dispatch({
        type:"UPDATE_PAYMENT",
        payload:resp.data
      })
      alert("Payment Updated.");
    })
    .catch((err)=>{
      dispatch({
        type:"UPDATE_PAYMENT_ERR",
        payload:err.response
      })
      alert("Something went wrong while Updating Payments");
    });  
  };


