import React,{useState,useEffect} from "react"
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {addOffer,getOffer} from "../actions/offerAction";

const AddOffer = (props) =>{
     
    const dispatch = useDispatch();

    const handleAddOffer = (obj) =>{
        if(!(obj.offerCode && obj.details && obj.offerType && obj.offerValue && obj.date) || obj.offerType=="false" ){
            alert("all fields are mandatory");
            return;
        }
        obj.offerValue = parseInt(obj.offerValue)
        if(obj.offerValue<=0){
            alert("offer value cannot be less than or equal to 0");
            return;
        }
        dispatch(addOffer(obj));
        dispatch(getOffer());
        props.onHide()
    }

    const addOfferObj={
    }
    return(
        <>
        <Modal {...props}>
            <Modal.Header closeButton>
            <Modal.Title>Add Offer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Offer Code</Form.Label>
                    <Form.Control
                        type="Text"
                        autoFocus
                        placeholder="Offer Code"
                        onChange={(e)=>{addOfferObj.offerCode=(e.target.value)}}
                    /><br />
                    <Form.Label>Details</Form.Label>
                    <Form.Control
                        type="Text"
                        placeholder="Details"
                        onChange={(e)=>{
                            addOfferObj.details=(e.target.value);
                        }}
                    /><br />
                    <Form.Label>Offer Type</Form.Label>
                    <Form.Select 
                        type="Text"
                        autoFocus
                        placeholder="Type"
                        onChange={(e)=>{addOfferObj.offerType=(e.target.value)}}
                    >
                    <option value="false">Choose</option>
                        <option value="DISCOUNT_PERCENTAGE">DISCOUNT_PERCENTAGE</option>
                        <option value="DISCOUNT_AMOUNT">DISCOUNT_AMOUNT</option>
                    </Form.Select>
                    
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type="date"
                        onChange={(e)=>{
                            addOfferObj.date=(e.target.value);
                        }}
                    /><br />
                    <Form.Label>Offer Value</Form.Label>
                    <Form.Control
                        type="Number"
                        placeholder="Offer Value"
                        onChange={(e)=>{
                            addOfferObj.offerValue=(e.target.value);
                        }}
                    /><br />
                </Form.Group>
                
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary"  onClick={props.onHide}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>{
                handleAddOffer(addOfferObj);}}>
                Add Offer
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default AddOffer;