import React,{useState,useEffect} from "react"
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {addCombo,getCombos} from "../actions/comboAction";

const AddCombos = (props) =>{
    
    const dispatch = useDispatch();

    const handleAddCombos = (obj) =>{
        if(!(obj.name && obj.details && obj.type && obj.amount && obj.imageUrl) || obj.type=="false" ){
            alert("all fields are mandatory");
            return;
        }
        obj.amount = parseInt(obj.amount)
        if(obj.amount<=0){
            alert("amount cannot be less than or equal to 0");
            return;
        }

        dispatch(addCombo(obj));
        dispatch(getCombos());
        props.onHide()
    }

    const addCombosObj={
    }
    return(
        <>
        <Modal {...props}>
            <Modal.Header closeButton>
            <Modal.Title>Add Combos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="Text"
                        autoFocus
                        placeholder="Combo Name"
                        onChange={(e)=>{addCombosObj.name=(e.target.value)}}
                    /><br />
                    <Form.Label>Details</Form.Label>
                    <Form.Control
                        type="Text"
                        placeholder="Details"
                        onChange={(e)=>{
                            addCombosObj.details=(e.target.value);
                        }}
                    /><br />
                    <Form.Label>Type</Form.Label>
                    <Form.Select 
                        type="Text"
                        autoFocus
                        placeholder="Type"
                        onChange={(e)=>{addCombosObj.type=(e.target.value)}}
                    >
                        <option value="false">Choose</option>
                        <option value="SINGLE">SINGLE</option>
                        <option value="COUPLE">COUPLE</option>
                        <option value="FAMILY">FAMILY</option>
                    </Form.Select>
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                        type="Number"
                        placeholder="Amount"
                        onChange={(e)=>{
                            addCombosObj.amount=(e.target.value);
                        }}
                    /><br />
                    
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                        type="Text"
                        placeholder="Image URL"
                        onChange={(e)=>{
                            addCombosObj.imageUrl=(e.target.value);
                        }}
                    /><br />
                </Form.Group>
                
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary"  onClick={props.onHide}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>{
                handleAddCombos(addCombosObj);}}>
                Add Combo
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default AddCombos;