export const addOffer =  (
    state={
      addOfferResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "ADD_OFFER":
            return({
                addOfferResp:action.payload
            })
          case "ADD_OFFER_ERR":
          return({
            addOfferResp:action.payload
          })
          case "RESET":
          return({
            addOfferResp:""
          })
          default:
            return state;
        }
  };

  export const getOffer =  (
    state={
      getOfferResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_OFFER":
            return({
                getOfferResp:action.payload
            })
          case "GET_OFFER_ERR":
          return({
            getOfferResp:action.payload
          })
          case "RESET":
          return({
            getOfferResp:""
          })
          default:
            return state;
        }
  };

  export const deleteOffer =  (
    state={
      deleteOfferResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "DELETE_OFFER":
            return({
                deleteOfferResp:action.payload
            })
          case "DELETE_OFFER_ERR":
          return({
            deleteOfferResp:action.payload
          })
          case "RESET":
          return({
            deleteOfferResp:""
          })
          default:
            return state;
        }
  };
  
  export const updateOffer =  (
    state={
      updateOfferResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "UPDATE_OFFER":
            return({
                updateOfferResp:action.payload
            })
          case "UPDATE_OFFER_ERR":
          return({
            updateOfferResp:action.payload
          })
          case "RESET":
          return({
            updateOfferResp:""
          })
          default:
            return state;
        }
  };