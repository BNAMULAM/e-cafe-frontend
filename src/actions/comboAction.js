import axios from 'axios';
import API from "../constants/api.json"
export const addCombo = (obj)=> async dispatch=> {
  await axios
    .post(API.addCombo, obj)
  .then((resp)=>{
    dispatch({
      type:"ADD_COMBO",
      payload:resp.data
    })
    alert("Combo Added")
  })
  .catch((err)=>{
    dispatch({
      type:"ADD_COMBO_ERR",
      payload:err.response
    })
    alert("Combo Adding Failed")
  });  
};

export const getCombos = ()=> async dispatch=> {
    await axios
      .get(API.getCombos)
    .then((resp)=>{
      dispatch({
        type:"GET_COMBO",
        payload:resp.data
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_COMBO_ERR",
        payload:err.response
      })
      alert("Something went wrong while getting Combos");
    });  
  };


  export const deleteCombo = (comboId)=> async dispatch=> {
    await axios
      .delete(API.deleteCombos+comboId)
    .then((resp)=>{
      dispatch({
        type:"DELETE_COMBO",
        payload:resp.data
      })
      alert("Combo deleted.");
    })
    .catch((err)=>{
      dispatch({
        type:"DELETE_COMBO_ERR",
        payload:err.response
      })
      alert("Something went wrong while Deleting Combos");
    });  
  };
  export const updateCombo = (obj)=> async dispatch=> {
    await axios
      .put(API.updateCombo+obj.id,obj)
    .then((resp)=>{
      dispatch({
        type:"UPDATE_COMBO",
        payload:resp.data
      })
      alert("Combo Updated.");
    })
    .catch((err)=>{
      dispatch({
        type:"UPDATE_COMBO_ERR",
        payload:err.response
      })
      alert("Something went wrong while Updating Combos");
    });  
  };


