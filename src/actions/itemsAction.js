import axios from 'axios';
import API from "../constants/api.json"
export const addItem = (obj)=> async dispatch=> {
  await axios
    .post(API.addItem, obj)
  .then((resp)=>{
    dispatch({
      type:"ADD_ITEM",
      payload:resp.data
    })
    alert("Item Added")
  })
  .catch((err)=>{
    dispatch({
      type:"ADD_ITEM_ERR",
      payload:err.response
    })
    alert("Item Adding Failed")
  });  
};

export const getItems = ()=> async dispatch=> {
    await axios
      .get(API.getItems)
    .then((resp)=>{
      dispatch({
        type:"GET_ITEM",
        payload:resp.data
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_ITEM_ERR",
        payload:err.response
      })
      alert("Something went wrong while getting Items");
    });  
  };


  export const deleteItem = (itemId)=> async dispatch=> {
    await axios
      .delete(API.deleteItems+itemId)
    .then((resp)=>{
      dispatch({
        type:"DELETE_ITEM",
        payload:resp.data
      })
      alert("Item deleted.");
    })
    .catch((err)=>{
      dispatch({
        type:"DELETE_ITEM_ERR",
        payload:err.response
      })
      alert("Something went wrong while Deleting Items");
    });  
  };
  export const updateItem = (obj)=> async dispatch=> {
    await axios
      .put(API.updateItem+obj.id,obj)
    .then((resp)=>{
      dispatch({
        type:"UPDATE_ITEM",
        payload:resp.data
      })
      alert("Item Updated.");
    })
    .catch((err)=>{
      dispatch({
        type:"UPDATE_ITEM_ERR",
        payload:err.response
      })
      alert("Something went wrong while Updating Items");
    });  
  };


