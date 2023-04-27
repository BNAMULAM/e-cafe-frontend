import React, { useState } from "react"
import { Modal,Button,Form,Table} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {getOffer,deleteOffer,updateOffer} from "../actions/offerAction";

const OfferTable = ({isEditable})=>{
    const allOffer = useSelector((state)=>state.getOffer.getOfferResp);
    const dispatch = useDispatch();
    const [editOfferData,setEditOfferDsta] = useState('');
    const [showEditOfferModal,setShowEditOfferModal] = useState(false);
    
    const deleteOffers = (val)=>{
        if (window.confirm(`Are you sure, you want to delete ${val.offerCode}`)) {
            dispatch(deleteOffer(val.offerCode))
            dispatch(getOffer());
            
      }  
    }
    const EditOffer = (props)=>{
       const val = props.data;
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Offer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Offer Code</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder={val? val.offerCode : null}
                            onChange={(e)=>{val.offerCode=(e.target.value)}}
                        /><br />
                        <Form.Label>Details</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={val? val.details : null}
                            onChange={(e)=>{val.details=(e.target.value)}}
                        /><br />
                        <Form.Label>Offer Type</Form.Label>
                        <Form.Select 
                            type="Text"
                            autoFocus
                            placeholder="Type"
                            onChange={(e)=>{val.offerType=(e.target.value)}}
                        >
                            <option value="DISCOUNT_PERCENTAGE">DISCOUNT_PERCENTAGE</option>
                            <option value="DISCOUNT_AMOUNT">DISCOUNT_AMOUNT</option>
                    
                        </Form.Select>
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            type="Date"
                            placeholder={val? val.date : null}
                            onChange={(e)=>{val.date=(e.target.value)}}
                        /><br />
                        <Form.Label>Offer Values</Form.Label>
                        <Form.Control
                            type="Number"
                            placeholder={val? val.offerValue : null}
                            onChange={(e)=>{val.offerValue=(e.target.value)}}
                        /><br />
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>{
                    
                    if(val.offerValue<=0) {alert("offer value cannot be less than 0"); return}
                    dispatch(updateOffer(val))
                    setShowEditOfferModal(false)
                }}>
                    Update
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return(
        <>
        <EditOffer 
            data={editOfferData}
            show={showEditOfferModal}
            onHide={()=>{setShowEditOfferModal(false)}}
        />
            <div style = {{padding:"300px",paddingTop:"20px"}}>
                {
                    <Table>
                        <thead>
                            <tr>
                                <th>Offer Code</th>
                                <th>Details </th>
                                <th>Date</th>
                                <th>Offer Type</th>
                                <th>Offer Value</th>
                                {
                                    isEditable =="true"?
                                    <th>Action</th>:
                                    null
                                }
                            </tr>
                        </thead>
                        <tbody>
                        {
                            allOffer&& allOffer.map((val)=>{
                                return(
                                <tr>
                                    <td>{val.offerCode}</td>
                                    <td>{val.details}</td>
                                    <td>{val.date}</td>
                                    <td>{val.offerType}</td>
                                    <td>{val.offerValue}</td>
                                    {
                                        isEditable=="true"?
                                        <td>
                                            <button onClick={()=>{
                                                setEditOfferDsta(val);
                                                setShowEditOfferModal(true);
                                                }}>Edit</button>&nbsp;&nbsp;&nbsp;
                                            <button onClick={()=>deleteOffers(val)}>Delete</button>
                                        </td>:
                                        null
                                    }
                                </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                }
            </div>
        </> 
    )
}

export default OfferTable