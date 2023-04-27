import React,{useState,useEffect} from "react"
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {addItem,getItems} from "../actions/itemsAction";

const AddItems = (props) =>{
    
    const dispatch = useDispatch();

    const handleAddItems = (obj) =>{
        if(!(obj.name && obj.details && obj.type && obj.amount && obj.imageUrl) || obj.type=="false" ){
            alert("all fields are mandatory");
            return;
        }
        obj.amount = parseInt(obj.amount)
        if(obj.amount<=0){
            alert("amount cannot be less than or equal to 0");
            return;
        }
        dispatch(addItem(obj));
        dispatch(getItems());
        props.onHide()
    }

    const addItemsObj={
    }
    return(
        <>
        <Modal {...props}>
            <Modal.Header closeButton>
            <Modal.Title>Add Items</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="Text"
                        autoFocus
                        placeholder="Item Name"
                        onChange={(e)=>{addItemsObj.name=(e.target.value)}}
                    /><br />
                    <Form.Label>Details</Form.Label>
                    <Form.Control
                        type="Text"
                        placeholder="Details"
                        onChange={(e)=>{
                            addItemsObj.details=(e.target.value);
                        }}
                    /><br />
                    <Form.Label>Type</Form.Label>
                    <Form.Select 
                        type="Text"
                        autoFocus
                        placeholder="Type"
                        onChange={(e)=>{addItemsObj.type=(e.target.value)}}
                    >
                        <option value="false">Choose</option>
                        <option value="SNACKS">Snacks</option>
                        <option value="BEVERAGES">Beverages</option>
                    </Form.Select>
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                        type="Number"
                        placeholder="Amount"
                        onChange={(e)=>{
                            addItemsObj.amount=(e.target.value);
                        }}
                    /><br />
                    
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                        type="Text"
                        placeholder="Image URL"
                        onChange={(e)=>{
                            addItemsObj.imageUrl=(e.target.value);
                        }}
                    /><br />
                </Form.Group>
                
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary"  onClick={props.onHide}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>{
                handleAddItems(addItemsObj);}}>
                Add Item
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default AddItems;