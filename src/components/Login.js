
import React from "react"
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import { Navbar,Container,Nav } from 'react-bootstrap';
import { registerAction,loginAction } from "../actions/loginAction";


const Login = ({role}) => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNmber] = useState("");

  const navigate = useNavigate();
  let [authMode, setAuthMode] = useState("signin")
  const loginResp = useSelector((state)=>state.getLogin.getLoginResp)
  
  const handleSignIn=async()=>{
    
    if(!(userName && password)){
      alert("all fields are mandatory");
      return;
    }
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userName)){
      alert("email is not valid");
      return;
    }
    if(password.length<4 || password.length>10){
      alert("Password lenght should be with 4-10");
      return;
    }
    dispatch(loginAction(userName,password))
  }

  useEffect(()=>{
	console.log(loginResp)
    if(loginResp && loginResp.status==200){
		if(role=="CUSTOMER")	
 		     navigate("/customerHome")
		else
		navigate("/managerHome")

    }
    else if(loginResp){
      alert("login Failed, Please check the username and password")
    }
  },[loginResp])

  const handleSignUp = async()=>{

    
    if(!(userName && password)){
      alert("all fields are mandatory");
      return;
    }
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userName)){
      alert("email is not valid");
      return;
    }
    if(password.length<4 || password.length>10){
      alert("Password lenght should be with 4-10");
      return;
    }
    if(mobileNumber.length!=10){
      alert("Mobile number should be of 10 digits");
      return;
    }
    if(!/^[6-9]\d{9}$/.test(mobileNumber)){
      alert("Not a valid number");
      return;

    }
    const obj = {
      userName:userName,
      password:password,
      mobileNumber: mobileNumber,
      role: role
    }

    dispatch(registerAction(obj))
    setAuthMode("signin")
  }
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">E-CAFE <a href="/"></a></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link onClick={()=>{navigate('/customerLogin');}}>Customer Login</Nav.Link>
                    <Nav.Link onClick={()=>{navigate('/memberLogin');}}>Manager Login</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
              <div className="form-group mt-3">
                <label>User Name</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  value={userName}
                  onChange={(e)=>setUserName(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="button" onClick={handleSignIn} className="btn btn-primary">
                  Submit
                </button>
              </div>
              
            </div>
          </form>
        </div>
        </>
    )
  }

  return (
    <>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">E-CAFE <a href="/"></a></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link onClick={()=>{navigate('/customerLogin');}}>Customer Login</Nav.Link>
                    <Nav.Link onClick={()=>{navigate('/memberLogin');}}>Member Login</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    <div style={{
      height: '100vh'}}>
        <div className="Auth-form-container">
        <form className="Auth-form">
            <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
                Already registered?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                Sign In
                </span>
            </div>
            
            <div>
                <div className="form-group mt-3">
                <label>User Name</label>
                <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Email"
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)}
                />
                </div>
                <div className="form-group mt-3">
                <label>password</label>
                <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                </div>
                <div className="form-group mt-3">
                <label>Mobile Number</label>
                <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Mobile Number"
                    value={mobileNumber}
                    onChange={(e)=>setMobileNmber(e.target.value)}
                />
                </div>
            </div>
            <div className="d-grid gap-2 mt-3">
                <button type="button" onClick={handleSignUp}className="btn btn-primary">
                Submit
                </button>
            </div>
            
            </div>
        </form>
        </div>
    </div>
    </>
  )
}

export default  Login;