import React,{useState} from "react"
import { Navbar,Container,Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import ItemsTable from "./ItemsTable";
import AddItems from "./AddItems";
import AddCombo from "./AddCombo";
import ComboTable from "./ComboTable";
import AddOrder from "./AddOffer";
import OfferTable from "./OfferTable";
import {getItems} from "../actions/itemsAction";
import { getCombos } from "../actions/comboAction";
import { getOffer } from "../actions/offerAction";



const ManagerHome = ()=>{
    const dispatch = useDispatch();
    const loginData = useSelector((state)=>state.getLogin.getLoginResp);
    
    const [isViewItems,setIsViewItems] = useState(false);
    const [showAddItemsModal,setShowAddItemsModal] = useState(false);
    const [isViewCombos,setIsViewCombos] = useState(false);
    const [showAddComboModal,setShowAddComboModal] = useState(false);
    const [isViewOffer,setIsViewOffer] = useState(false);
    const [showAddOfferModal,setShowAddOfferModal] = useState(false);
    window.onload = function () {
        if(!loginData)
            window.location = "/";
        }.bind(this);
    return(
        <div>
            <AddItems
                show={showAddItemsModal}
                onHide={()=>{setShowAddItemsModal(false)}}
            />
            <AddCombo
                show={showAddComboModal}
                onHide={()=>{setShowAddComboModal(false)}}
            />
            <AddOrder 
                show={showAddOfferModal}
                onHide={()=>{setShowAddOfferModal(false)}}
            />
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
                        style={{ paddingLeft: '340px' }}
                        onClick={()=>{setShowAddItemsModal(!showAddItemsModal)}}
                        >Add Items</Nav.Link>| |
                        <Nav.Link onClick={()=>{setShowAddComboModal(true)}}>Add Combos</Nav.Link>| |
                        <Nav.Link onClick={()=>{setShowAddOfferModal(true)}}>Add Offers</Nav.Link>| |
                        <Nav.Link onClick={()=>{
                            dispatch(getItems());
                            setIsViewItems(!isViewItems);
                            setIsViewCombos(false);
                            setIsViewOffer(false);
                        }}
                        >VIew Items</Nav.Link>| |
                        <Nav.Link onClick={()=>{
                            dispatch(getCombos());
                            setIsViewItems(false);
                            setIsViewCombos(!isViewCombos);
                            setIsViewOffer(false);
                        }}
                        >VIew Combos</Nav.Link>| |
                        <Nav.Link onClick={()=>{
                            dispatch(getOffer());
                            setIsViewItems(false);
                            setIsViewCombos(false);
                            setIsViewOffer(!isViewOffer);
                        }}
                        >VIew Offers</Nav.Link> 
                        <Nav.Link href="/" style={{ paddingLeft: '380px' }}>Logout</Nav.Link>  
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {
                isViewItems?
                <ItemsTable isEditable="true" />:
                null
            }
            {
                isViewCombos?
                <ComboTable isEditable="true" />:
                null
            }
            {
                isViewOffer?
                <OfferTable isEditable="true" />:
                null
            }
        </div>
    )
}

export default ManagerHome;