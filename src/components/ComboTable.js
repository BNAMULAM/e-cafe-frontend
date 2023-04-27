import React, { useState } from "react"
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {getCombos,deleteCombo,updateCombo} from "../actions/comboAction";
import PlaceOrder from "./PlaceOrder";
import {getOffer} from "../actions/offerAction";

const ComboTable = ({isEditable})=>{
    const allCombo = useSelector((state)=>state.getCombos.getComboResp);
    const dispatch = useDispatch();
    const [editComboData,setEditComboDta] = useState('');
    const [showEditComboModal,setShowEditComboModal] = useState(false);
    const [placeOrdereId,setPlaceOrdereId] = useState('');
    const [showPlaceOrderModal,setShowPlaceOrderModal] = useState(false);
    
    const deleteCombos = (val)=>{
        if (window.confirm(`Are you sure, you want to delete ${val.name}`)) {
            dispatch(deleteCombo(val.id))
            dispatch(getCombos());
            
      }  
    }
    const EditCombo = (props)=>{
       const val = props.data;
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Combo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder={val? val.name : null}
                            onChange={(e)=>{val.name=(e.target.value)}}
                        /><br />
                        <Form.Label>Details</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={val? val.details : null}
                            onChange={(e)=>{val.details=(e.target.value)}}
                        /><br />
                        <Form.Label>Type</Form.Label>
                        <Form.Select 
                            type="Text"
                            autoFocus
                            placeholder="Type"
                            onChange={(e)=>{val.type=(e.target.value)}}
                        >
                            
                            <option value="SINGLE">SINGLE</option>
                            <option value="COUPLE">COUPLE</option>
                            <option value="FAMILY">FAMILY</option>
                        </Form.Select>
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                            type="Number"
                            placeholder={val? val.amount : null}
                            onChange={(e)=>{val.amount=(e.target.value)}}
                        /><br />
                        <Form.Label>imageUrl</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={val? val.imageUrl : null}
                            onChange={(e)=>{val.imageUrl=(e.target.value)}}
                        /><br />
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>{
                    if(val.amount<=0) {alert("amount cannot be less than 0"); return}
                    dispatch(updateCombo(val))
                    setShowEditComboModal(false)
                }}>
                    Update
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return(
        <>
        <EditCombo 
            data={editComboData}
            show={showEditComboModal}
            onHide={()=>{setShowEditComboModal(false)}}
        />
        
        <PlaceOrder
            id={placeOrdereId}
            show={showPlaceOrderModal}
            onHide={()=>{setShowPlaceOrderModal(false)}}
        />
            <div style = {{paddingLeft:"300px",paddingTop:"20px"}}>
                {
                    allCombo&& allCombo.map((val)=>{
                        return(
                            <div style = {{display:"flex",paddingTop:"20px"}}>
                                <div style={{
                                    width:"350px",
                                    height:"300px",
                                    display:"inline"
                                    }}>
                                    <img
                                    style={{width:"300px",height:"300px"}}
                                    src={val.imageUrl}
                                    />
                                </div>
                                <div 
                                    style={{paddingRight:"150px",paddingTop:"50px"}}
                                >
                                    <h3>Name: {val.name}</h3>
                                    <h4>Details: {val.details}</h4>
                                    <h4>Type: {val.type}</h4>
                                    <h4>Amount: {val.amount}$</h4>
                                    {
                                        isEditable=="true"?
                                        <>
                                            <button onClick={()=>{
                                                setEditComboDta(val);
                                                setShowEditComboModal(true);
                                            }}>Edit</button> &nbsp;&nbsp;&nbsp;&nbsp;
                                            <button onClick={()=>deleteCombos(val)}>Delete</button>
                                        </>:
                                        <button onClick={()=>{
                                            dispatch(getOffer())
                                            setPlaceOrdereId(val.id);
                                            setShowPlaceOrderModal(true);
                                        }}>Place Order</button>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </> 
    )
}

export default ComboTable