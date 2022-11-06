import React, { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { useCookies } from "react-cookie";
import axios from 'axios';

const Login_page = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [cookies, setCookie] = useCookies(["token"]);
    // const [cookies, setCookie] = useCookies(["token"]);

    const [alertMessage, setAlertMessage] = React.useState({
        message: "",
        icon: "d-none ",
        wholeAlert: "alert d-none alert-success"
    })
    const [formValue, setFormValue] = React.useState({
        username: "",
        password: ""
    })
    const onChange1 = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
        setAlertMessage({
            message: "",
            icon: "d-none ",
            wholeAlert: "alert d-none alert-success"
        })
        // console.log("name",e.target.name,"e.target.value",e.target.value)
    }

    const validate = async () => {
        setLoading(true);
        if (formValue.username === "") {
            setAlertMessage({
                ...alertMessage,
                message: "Username can't be empty!",
                icon: "fa fa-exclamation-triangle",
                wholeAlert: "alert d-block alert-danger"
            })
        } else if (formValue.password === "") {
            setAlertMessage({
                ...alertMessage,
                message: "Password can't be empty!",
                icon: "fa fa-exclamation-triangle",
                wholeAlert: "alert d-block alert-danger"
            })
        } else {
            // navigate("/instruction")
            // var raw = JSON.stringify({
            //     "username": "admins",
            //     "password": "admins"
            //   });
            localStorage.setItem('c1', ` //your code here`)
            localStorage.setItem('c_cpp1', `#include<iostream> \n using namespace std; \n \n int main(){ \n //your code here \n return 0; \n }`)
            localStorage.setItem('python1', "#your code here")
            localStorage.setItem('c2', ` //your code here`)
            localStorage.setItem('c_cpp2',`#include<iostream> \n using namespace std; \n \n int main(){ \n //your code here \n return 0; \n }`)
            localStorage.setItem('python2', "#your code here")
            localStorage.setItem('c3', ` //your code here`)
            localStorage.setItem('c_cpp3', `#include<iostream> \n using namespace std; \n \n int main(){ \n //your code here \n return 0; \n }`)
            localStorage.setItem('python3', "#your code here")
            localStorage.setItem('c4', ` //your code here`)
            localStorage.setItem('c_cpp4', `#include<iostream> \n using namespace std; \n \n int main(){ \n //your code here \n return 0; \n }`)
            localStorage.setItem('python4', "#your code here")
            localStorage.setItem('c5', ` //your code here`)
            localStorage.setItem('c_cpp5', `#include<iostream> \n using namespace std; \n \n int main(){ \n //your code here \n return 0; \n }`)
            localStorage.setItem('python5', "#your code here")
            localStorage.setItem('c6', ` //your code here`)
            localStorage.setItem('c_cpp6', `#include<iostream> \n using namespace std; \n \n int main(){ \n //your code here \n return 0; \n }`)
            localStorage.setItem('python6', "#your code here")

            var loginTimeConfig = {
                method: 'get',
                url: `https://admin.rc.pictieee.in/RC/time`,
                // no header needed
            };

            await axios(loginTimeConfig).then((res)=>{
                // var now2 = new Date();
                // console.log("before login - time.data.start_time", res.data.start_time);
                // console.log("before login - time.data.now", Date.now());
                // var isoDate = new Date(now2).toISOString()
                // console.log("before login - new Date(now2).toISOString()", isoDate);
                if((Date.now() - Date.parse(res.data.start_time))>0 && (Date.parse(res.data.end_time) - Date.now())>0){
                    console.log("user can login as starttime has arrived", (Date.parse(res.data.start_time) - Date.now())/1000)
                    var raw = JSON.stringify(formValue);
                    var requestOptions = {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: raw,
                    redirect: 'follow'
                    };
                      
                    fetch("https://admin.rc.pictieee.in/auth/token/login", requestOptions)
                    .then(response => response.text())
                    .then(result => {
                        var tokenObject = JSON.parse(result);
                        var token = tokenObject.auth_token;
                        if(token){
                            setCookie("token", token, { path: "/", maxAge: 4320 }); // 3 days
                            if(cookies){
                                console.log(" ")
                            }
                            localStorage.setItem("token", token)
                            navigate("/instruction")
                        }else{
                            setAlertMessage({
                                ...alertMessage,
                                message: "Incorrect Username or Password!",
                                icon: "fa fa-exclamation-triangle",
                                wholeAlert: "alert d-block alert-danger"
                            })
                        }
                        // console.log('formValue',formValue)
        
                    })
                    .catch(error => {
                        // console.log('formValue',formValue)
                        setAlertMessage({
                            ...alertMessage,
                            message: "Incorrect Username or Password!",
                            icon: "fa fa-exclamation-triangle",
                            wholeAlert: "alert d-block alert-danger"
                        })
                        console.log('error', error)
                    });



                }else{
                    if((Date.now() - Date.parse(res.data.start_time))<0){

                        setAlertMessage({
                            ...alertMessage,
                            message: "Event Has Not Started Yet !",
                            icon: "fa fa-exclamation-triangle",
                            wholeAlert: "alert d-block alert-danger"
                        })
                    }else{

                        setAlertMessage({
                            ...alertMessage,
                            message: "Event Has Ended !",
                            icon: "fa fa-exclamation-triangle",
                            wholeAlert: "alert d-block alert-danger"
                        })
                    }
                }
            }).catch((err)=>{
                console.log("err in login timer: ", err)
            });

    }
        setLoading(false);
    }

    const handleEnter = (e) => {
        if (e.keyCode === 13 || e.key === 'Enter') {
            validate();
          }
    }

    if (loading) {
        return (
            <Container>
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </Container>
        )
    }


    return (
        <Container>
            <div>
                {/* <div className="d-flex justify-content-around align-items-center"> */}
                <Row className="d-flex justify-content-around align-items-center">
                    <Col xxl={6} xl={6} lg={6} md={6} sm={0} xs={0} >
                        <div className="RCTEXT">Reverse Coding 2.0</div>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className="myLoginColumn" >

                        <Card className="overflow-hidden myLoginCard">
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <div className={alertMessage.wholeAlert} role="alert">
                                    <i className={alertMessage.icon} aria-hidden="true" />
                                    <span> {alertMessage.message}</span>
                                </div>
                                <Card.Text>
                                    <div className="logintitle text-white">LOGIN</div>
                                    {/* <form> */}
                                        {/* <InputGroup className="mb-3"> */}
                                        {/* <InputGroup.Text id="inputGroup-sizing-default">
                                                    Username
                                                </InputGroup.Text> */}
                                        {/* <Form.Control
                                                    className="myInput"
                                                    aria-label="Default"
                                                    placeholder="Username"
                                                    aria-describedby="inputGroup-sizing-default"
                                                />
                                            </InputGroup> */}
                                        {/* <div className="formInput"> */}
                                        {/* </div> */}
                                        <span><label className="form-check-label text-white pe-2" htmlFor="username">
                                            <i className="fa fa-user" aria-hidden="true" />
                                        </label></span>
                                        <input name="username" onKeyPress={handleEnter} tabIndex="1" value={formValue.username} type="text" className="myInput" placeholder="Username" id="username" onChange={onChange1} />

                                        {/* <InputGroup className="mt-3"> */}
                                        {/* <InputGroup.Text id="inputGroup-sizing-default">
                                                    Password
                                                </InputGroup.Text> */}
                                        {/* <Form.Control
                                                    className="myInput"
                                                    aria-label="Default"
                                                    placeholder="Password"
                                                    aria-describedby="inputGroup-sizing-default"
                                                />
                                            </InputGroup> */}
                                        <br />
                                        <label className="form-check-label text-white pe-2" htmlFor="password">
                                            <i className="fa-solid fa-key" />
                                        </label>
                                        <span><input name="password" onKeyPress={handleEnter} tabIndex="2" value={formValue.password} type="password" id="password" className="myInput" placeholder="Password" onChange={onChange1} /></span>
                                        <button disabled={"true"} onClick={validate} onKeyDown={handleEnter} tabIndex="3" className="myButton text-white">Login</button>
                                        <h4 className="text-danger">We will start at 11:30 AM</h4>
                                        
                                    {/* </form> */}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* </div> */}
            </div>
        </Container>
    )
}

export default Login_page