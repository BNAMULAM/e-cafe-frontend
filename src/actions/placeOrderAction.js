import axios from 'axios';
import API from "../constants/api.json"

export const addOrder = (obj)=> async dispatch=> {
  await axios
    .post(API.addOrder, obj)
  .then((resp)=>{
    dispatch({
      type:"ADD_ORDER",
      payload:resp.data
    })
    alert("Order Added")
  })
  .catch((err)=>{
    dispatch({
      type:"ADD_ORDER_ERR",
      payload:err.response
    })
    alert("Order Adding Failed")
  });  
};

export const getOrder = (userName)=> async dispatch=> {
    await axios
      .get(API.getOrder+userName)
    .then((resp)=>{

      dispatch({
        type:"GET_ORDER",
        payload:resp.data
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_ORDER_ERR",
        payload:err.response
      })
      alert("Something went wrong while getting Orders");
    });  
  };


  export const deleteOrder = (orderId)=> async dispatch=> {
    await axios
      .post(API.deleteOrder+orderId)
    .then((resp)=>{
      dispatch({
        type:"DELETE_ORDER",
        payload:resp.data
      })
      alert("Order deleted.");
    })
    .catch((err)=>{
      dispatch({
        type:"DELETE_ORDER_ERR",
        payload:err.response
      })
      alert("Something went wrong while Deleting Orders");
    });  
  };
  export const updateOrder = (obj)=> async dispatch=> {
    await axios
      .put(API.updateOrder+obj.orderCode,obj)
    .then((resp)=>{
      dispatch({
        type:"UPDATE_ORDER",
        payload:resp.data
      })
      alert("Order Updated.");
    })
    .catch((err)=>{
      dispatch({
        type:"UPDATE_ORDER_ERR",
        payload:err.response
      })
      alert("Something went wrong while Updating Orders");
    });  
  };


