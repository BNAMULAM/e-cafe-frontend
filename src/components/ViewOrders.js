import React, { useEffect, useState } from "react"
import { Modal,Button,Form,Table} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {getOrder,deleteOrder} from "../actions/placeOrderAction";
import {addPayment} from "../actions/paymentAction";

const OrderTable = ({isEditable})=>{
    const allOrder = useSelector((state)=>state.getOrders.getOrderResp);
    const loginData = useSelector((state)=>state.getLogin.getLoginResp);
    const paymentData = useSelector((state)=>state.getPayment.getPaymentResp);
    const [paymentIdSet,setPaymentSet]= useState([]);
    useEffect(()=>{
        // console.log("--->",paymentData)
        var lst = []
        paymentData && paymentData.map((val)=>{
            lst.push(val.orderId)
        })
        setPaymentSet(lst)
    },[paymentData])
    const dispatch = useDispatch();
    const [addPaymentData,setAddPaymentData] = useState('');
    const [showAddPayment,setShowAddPayment] = useState(false);
    
    const deleteOrders = (val)=>{
        if (window.confirm(`Are you sure, you want to Cancel Order ${val.orderId}`)) {
            dispatch(deleteOrder(val.orderId))
            dispatch(getOrder(loginData.data.userName));
            
      }  
    }
    const AddPayment = (props)=>{
        if(!props.data) return
       const val = {
        orderId:props.data.orderId,
        customerId:loginData.data.userName,
        status:"SUCCESS",
        amount:props.data.finalAmount.toFixed(2)
       }
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Payment Method</Form.Label>
                        <Form.Select 
                            type="Text"
                            autoFocus
                            placeholder="Type"
                            onChange={(e)=>{val.paidBy=(e.target.value)}}
                        >
                            <option value="false">Choose</option>
                            <option value="CASH">CASH</option>
                            <option value="CARD">CARD</option>
                            <option value="UPI">UPI</option>
                    
                        </Form.Select>
                        
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>{
                    if(val.paidBy && val.paidBy!="false"){
                        dispatch(addPayment(val))
                        setShowAddPayment(false)
                    }
                    else{
                        alert("Please choose payment method to proceed");
                        return;
                    }
                }}>
                    Pay
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return(
        <>
        <AddPayment 
            data={addPaymentData}
            show={showAddPayment}
            onHide={()=>{setShowAddPayment(false)}}
        />
            <div style = {{padding:"200px",paddingTop:"20px"}}>
                {
                    <Table>
                        <thead>
                            <tr>
                                <th>OfferCode</th>
                                <th>Amount</th>
                                <th>Tax</th>
                                <th>Total Amount</th>
                                <th>Final Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            allOrder&& allOrder.map((val)=>{
                                return(
                                <tr>
                                    <td>{val.offerCode}</td>
                                    <td>{val.order[0].amount.toFixed(2)}</td>
                                    <td>{val.tax.toFixed(2)}</td>
                                    <td>{val.totalAmount.toFixed(2)}</td>
                                    <td>{val.finalAmount.toFixed(2)}</td>
                                    <td>
                                        <button disabled={paymentIdSet && paymentIdSet.includes(val.orderId)} onClick={()=>{
                                            setAddPaymentData(val);
                                            setShowAddPayment(true);
                                            }}>Payment</button>&nbsp;&nbsp;&nbsp;
                                        <button onClick={()=>deleteOrders(val)}>Cancel Order</button>
                                    </td>
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

export default OrderTable