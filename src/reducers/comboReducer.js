export const addCombo =  (
    state={
      addComboResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "ADD_COMBO":
            return({
                addComboResp:action.payload
            })
          case "ADD_COMBO_ERR":
          return({
            addComboResp:action.payload
          })
          case "RESET":
          return({
            addComboResp:""
          })
          default:
            return state;
        }
  };

  export const getCombos =  (
    state={
      getComboResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_COMBO":
            return({
                getComboResp:action.payload
            })
          case "GET_COMBO_ERR":
          return({
            getComboResp:action.payload
          })
          case "RESET":
          return({
            getComboResp:""
          })
          default:
            return state;
        }
  };

  export const deleteCombos =  (
    state={
      deleteComboResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "DELETE_COMBO":
            return({
                deleteComboResp:action.payload
            })
          case "DELETE_COMBO_ERR":
          return({
            deleteComboResp:action.payload
          })
          case "RESET":
          return({
            deleteComboResp:""
          })
          default:
            return state;
        }
  };
  
  export const updateCombo =  (
    state={
      updateComboResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "UPDATE_COMBO":
            return({
                updateComboResp:action.payload
            })
          case "UPDATE_COMBO_ERR":
          return({
            updateComboResp:action.payload
          })
          case "RESET":
          return({
            updateComboResp:""
          })
          default:
            return state;
        }
  };