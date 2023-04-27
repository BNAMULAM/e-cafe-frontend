import React from "react"
import {Modal,Button,Form } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {addOrder} from "../actions/placeOrderAction";

const PlaceOrder = (props)=>{
    const dispatch = useDispatch();
    const allOffer = useSelector((state)=>state.getOffer.getOfferResp);
    const loginData = useSelector((state)=>state.getLogin.getLoginResp);
    const proceedForPayment = (values)=>{
        values.quantiy = parseInt(values.quantiy);
        if(values.quantiy<=0){
            alert("Order quantity cannot be less than 0");
           return; 
        }
        if(values.offerCode == "false")
            values.offerCode =null;
        values = {
            ...values,
            quantiy:parseInt(values.quantiy),
            combo: !props.item,
            offerApplied : values.offerCode?true:false,
            userName: loginData && loginData.data.userName,  
        }
        dispatch(addOrder(values));
        props.onHide();
    }

    const val = {itemId:props.id};
    
     return(
         <Modal {...props}>
             <Modal.Header closeButton>
             <Modal.Title>Place Order</Modal.Title>
             </Modal.Header>
             <Modal.Body>
                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                     <Form.Label>Quantity</Form.Label>
                     <Form.Control
                         type="Number"
                         autoFocus
                         placeholder="Quantity"
                         onChange={(e)=>{val.quantiy=(e.target.value)}}
                     /><br />
                     <Form.Label>Offer Code</Form.Label>
                     <Form.Select 
                         type="Text"
                         placeholder="Offer Code"
                         onChange={(e)=>{val.offerCode=(e.target.value)}}
                     >
                        <option value="false">Choose Offer</option>
                        {
                            allOffer && allOffer.map((offerVal)=>{
                                return(
                                    <option value={offerVal.offerCode}>{offerVal.offerCode}</option>
                                )
                            })
                        }
                     </Form.Select>
                 </Form.Group>
                 
             </Modal.Body>
             <Modal.Footer>
             <Button variant="secondary"  onClick={props.onHide}>
                 Close
             </Button>
             <Button variant="primary" onClick={()=>{
                proceedForPayment(val);
             }}>
                 Add Order
             </Button>
             </Modal.Footer>
         </Modal>
     )
 }

 export default PlaceOrder;