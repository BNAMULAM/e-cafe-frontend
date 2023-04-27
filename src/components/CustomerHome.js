import React,{useState} from "react"
import { Navbar,Container,Nav,Dropdown,Form,Col  } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import ItemsTable from "./ItemsTable";
import ComboTable from "./ComboTable";
import OfferTable from "./OfferTable";
import OrderTable from "./ViewOrders";
import {getItems} from "../actions/itemsAction";
import { getCombos } from "../actions/comboAction";
import { getOffer } from "../actions/offerAction";
import {getOrder}  from "../actions/placeOrderAction";
import {getPayment} from "../actions/paymentAction";

const CustomerHome = ()=>{
    const dispatch = useDispatch();
    const loginData = useSelector((state)=>state.getLogin.getLoginResp);
    const [isViewItems,setIsViewItems] = useState(false);
    const [isViewCombos,setIsViewCombos] = useState(false);
    const [isViewOffer,setIsViewOffer] = useState(false);
    const [isViewOrder,setIsViewOrder] = useState(false);
    const URL=`https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhZmV8ZW58MHx8MHx8&w=1000&q=80`
    window.onload = function () {
    if(!loginData)
        window.location = "/";
    }.bind(this);
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand >E-CAFE <a href="/"></a></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link
                        style={{ paddingLeft: '380px' }}
                        onClick={()=>{
                            dispatch(getItems());
                            setIsViewItems(!isViewItems);
                            setIsViewCombos(false);
                            setIsViewOffer(false);
                            setIsViewOrder(false);
                        }}
                        >VIew Items</Nav.Link>| |
                        <Nav.Link onClick={()=>{
                            dispatch(getCombos());
                            setIsViewItems(false);
                            setIsViewCombos(!isViewCombos);
                            setIsViewOffer(false);
                            setIsViewOrder(false);
                        }}
                        >VIew Combos</Nav.Link>| |
                        <Nav.Link onClick={()=>{
                            dispatch(getOffer());
                            setIsViewItems(false);
                            setIsViewCombos(false);
                            setIsViewOffer(!isViewOffer);
                            setIsViewOrder(false);
                        }}
                        >VIew Offers</Nav.Link> 
                        <Nav.Link onClick={()=>{
                            dispatch(getOrder(loginData.data.userName));
                            dispatch(getPayment(loginData.data.userName));
                            setIsViewItems(false);
                            setIsViewCombos(false);
                            setIsViewOffer(false);
                            setIsViewOrder(!isViewOrder);
                        }}
                        >VIew Orders</Nav.Link> 
                        <Nav.Link href="/" style={{ paddingLeft: '450px' }}>Logout</Nav.Link>  
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {
                isViewItems?
                <ItemsTable isEditable="false" />:
                null
            }
            {
                isViewCombos?
                <ComboTable isEditable="false" />:
                null
            }
            {
                isViewOffer?
                <OfferTable isEditable="false" />:
                null 
            }
            {
                isViewOrder?
                <OrderTable />:
                null
            }
        </div>
    )
}

export default CustomerHome;