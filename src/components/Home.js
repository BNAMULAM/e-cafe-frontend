import React, { useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import NavBar from "./Nav";

const Home = () =>{
    return(
        <>
            <NavBar/>
            <div>
                <img
                    style={{width:"1268px",height:"555px"}}
                    src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhZmV8ZW58MHx8MHx8&w=1000&q=80"
                    />
            </div>
        </>
    )
}


export default Home;
