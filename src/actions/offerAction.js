import axios from 'axios';
import API from "../constants/api.json"
export const addOffer = (obj)=> async dispatch=> {
  await axios
    .post(API.addOffer, obj)
  .then((resp)=>{
    dispatch({
      type:"ADD_OFFER",
      payload:resp.data
    })
    alert("Offer Added")
  })
  .catch((err)=>{
    dispatch({
      type:"ADD_OFFER_ERR",
      payload:err.response
    })
    alert("Offer Adding Failed")
  });  
};

export const getOffer = ()=> async dispatch=> {
    await axios
      .get(API.getOffer)
    .then((resp)=>{

      dispatch({
        type:"GET_OFFER",
        payload:resp.data
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_OFFER_ERR",
        payload:err.response
      })
      alert("Something went wrong while getting Offers");
    });  
  };


  export const deleteOffer = (offerId)=> async dispatch=> {
    await axios
      .delete(API.deleteOffer+offerId)
    .then((resp)=>{
      dispatch({
        type:"DELETE_OFFER",
        payload:resp.data
      })
      alert("Offer deleted.");
    })
    .catch((err)=>{
      dispatch({
        type:"DELETE_OFFER_ERR",
        payload:err.response
      })
      alert("Something went wrong while Deleting Offers");
    });  
  };
  export const updateOffer = (obj)=> async dispatch=> {
    await axios
      .put(API.updateOffer+obj.offerCode,obj)
    .then((resp)=>{
      dispatch({
        type:"UPDATE_OFFER",
        payload:resp.data
      })
      alert("Offer Updated.");
    })
    .catch((err)=>{
      dispatch({
        type:"UPDATE_OFFER_ERR",
        payload:err.response
      })
      alert("Something went wrong while Updating Offers");
    });  
  };


