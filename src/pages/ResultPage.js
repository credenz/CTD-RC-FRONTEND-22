import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useLocation, useNavigate } from 'react-router-dom';
import "./ResultPage.css"
const gold = require("../images/gold 3.png")
const silver = require("../images/silver 3.png")
const bronze = require("../images/bronze 3.png")

const ResultPage = (  ) => {
    const [userRankData, setUserRankData] = useState({
        rank: 10,
        name: "Vijay",
        total_score: 10,
      })
      const [userRank1Data, setUserRank1Data] = useState({
        name: "Kedar",
        total_score: 50,
      })
      const [userRank2Data, setUserRank2Data] = useState({
        name: "Devraj",
        total_score: 49,
      })
      const [userRank3Data, setUserRank3Data] = useState({
        name: "Jahan",
        total_score: 45,
      })
    const [loading, setLoading] = useState(true);
    const [cookies, removeCookies] = useCookies(["token"]);
    const location = useLocation();

    const [topRankData, setTopRankData] = useState([])

      useEffect(() => {
        let token = localStorage.getItem("token");

        const loadData = async () => {
            setLoading(true);

            var config = {
                method: 'get',
                url: 'https://admin.rc.pictieee.in/RC/rank',
                headers: { 
                  'Authorization': `Token ${token}`
                }
              };
              
              let userdatarank = await axios(config)
              console.log('userdatarank.data', userdatarank.data)
              setUserRankData({
                rank: userdatarank.data.rank,
                name: userdatarank.data.name,
                total_score: userdatarank.data.total_score,
              })

              console.log("userdatarank",userRankData)

              var config2 = {
                method: 'get',
                url: 'https://admin.rc.pictieee.in/RC/allranks?page=1',
                headers: { 
                  'Authorization': `Token ${token}`
                }
              };

              let leaderdatarank = await axios(config2)

              console.log("leaderdatarank.data.results ", leaderdatarank.data.results)
              console.log("leaderdatarank.data.results[0].name ", leaderdatarank.data.results[0].name)
              console.log("leaderdatarank.data.results[1].name ", leaderdatarank.data.results[1].name)
              console.log("leaderdatarank.data.results[2].name ", leaderdatarank.data.results[2].name)
              let resultdata = leaderdatarank.data.results;
              setTopRankData((data) => [...data, ...resultdata])
              setUserRank1Data({
                name: leaderdatarank.data.results[0].name,
                total_score: leaderdatarank.data.results[0].total_score,
              })
              setUserRank2Data({
                name: leaderdatarank.data.results[1].name,
                total_score: leaderdatarank.data.results[1].total_score,
              })
              setUserRank3Data({
                name: leaderdatarank.data.results[2].name,
                total_score: leaderdatarank.data.results[2].total_score,
              })
              console.log("topRankData ", topRankData)
              console.log("topRankData[0] ", topRankData[0])
              console.log("topRankData[1] ", topRankData[1])
              console.log("topRankData[2] ", topRankData[2]) 
              console.log("userRank1Data ", userRank1Data)
              console.log("userRank2Data ", userRank2Data)
              console.log("userRank3Data ", userRank3Data) 

            setLoading(false);
        }
        
        // console.log(" location.state in useEffect in result",  location.state)
        // setLoading(true);
        // setUserRankData({
        //     "userName":  location.state.userName,
        //     "userScore":  location.state.userScore,
        //     "userRank":  location.state.userRank,
        // });
        
        // var config = {
        //     method: 'get',
        //     url: 'https://admin.rc.pictieee.in/RC/rank',
        //     headers: { 
        //       'Authorization': `Token ${cookies.token}`
        //     }
        //   };
  
        //   axios(config)
        //   .then(function (response) {
        //     let userData = JSON.stringify(response.data)
        //     console.log("logout data:",userData);
        //     console.log("logout data.rank:",userData.rank);
        //     console.log("logout data.name:",userData.name);
        //     console.log("logout data.total_score:",userData.total_score); 

        //     removeCookies("token", "", { path: "/" })
        //     localStorage.setItem("token", "")
  
        //     localStorage.setItem('c1', ` `)
        //     localStorage.setItem('c_cpp1', ``)
        //     localStorage.setItem('python1', ` `)
        //     localStorage.setItem('c2', ` `)
        //     localStorage.setItem('c_cpp2', ``)
        //     localStorage.setItem('python2', ` `)
        //     localStorage.setItem('c3', ` `)
        //     localStorage.setItem('c_cpp3', ``)
        //     localStorage.setItem('python3', ` `)
        //     localStorage.setItem('c4', ` `)
        //     localStorage.setItem('c_cpp4', ``)
        //     localStorage.setItem('python4', ` `)
        //     localStorage.setItem('c5', ` `)
        //     localStorage.setItem('c_cpp5', ``)
        //     localStorage.setItem('python5', ` `)
        //     localStorage.setItem('c6', ` `)
        //     localStorage.setItem('c_cpp6', ``)
        //     localStorage.setItem('python6', ` `)
  
        //   }).catch(err => console.log('error in logout timer:', err));
        // setLoading(false);


        loadData();

            removeCookies("token", "", { path: "/" })
            // localStorage.setItem("token", "")
  
            localStorage.setItem('c1', ` `)
            localStorage.setItem('c_cpp1', ``)
            localStorage.setItem('python1', ` `)
            localStorage.setItem('c2', ` `)
            localStorage.setItem('c_cpp2', ``)
            localStorage.setItem('python2', ` `)
            localStorage.setItem('c3', ` `)
            localStorage.setItem('c_cpp3', ``)
            localStorage.setItem('python3', ` `)
            localStorage.setItem('c4', ` `)
            localStorage.setItem('c_cpp4', ``)
            localStorage.setItem('python4', ` `)
            localStorage.setItem('c5', ` `)
            localStorage.setItem('c_cpp5', ``)
            localStorage.setItem('python5', ` `)
            localStorage.setItem('c6', ` `)
            localStorage.setItem('c_cpp6', ``)
            localStorage.setItem('python6', ` `)

    }, [])
    
   
  if(loading){
    return(
        <>Loadingg....</>
    )
  } 

    return (
        <Container>
            <Row className="heightManage d-flex justify-content-center align-content-center text-white">
                <Col xxl={4} lg={4} md={4} sm={12} xs={12}>
                    <Row className="h-100">
                        {/* <Card border="light" style={{ width: '18rem' }}> */}
                        <Card border="success" className="my-auto mx-auto myResultCard" >
                            {/* <Card.Header ><h2><u>Username</u></h2><h4>Ankit Badode</h4></Card.Header> */}
                            <Card.Body className="d-flex flex-wrap justify-content-center justify-items-center">
                                {/* <Card.Title>Light Card Title</Card.Title> */}
                                <Row>
                                    <h1 className="mt-3"><u>Username</u></h1><h3>{userRankData.name }</h3>
                                </Row>
                                <Row className="my-3 d-flex justify-content-center align-items-center w-100">
                                    <Card.Text className="my-3 d-flex justify-content-center align-items-center">
                                        {/* <Row> */}
                                        <Col xxl={6} lg={6} md={6} sm={12} xs={12}>
                                            <h4><u>Rank</u></h4> <h5>{userRankData.rank}</h5>
                                        </Col>
                                        <Col xxl={6} lg={6} md={6} sm={12} xs={12}>
                                            <h4><u>Score</u></h4> <h5>{userRankData.total_score }</h5>
                                        </Col>
                                        {/* </Row> */}
                                    </Card.Text>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
                <Col xxl={8} lg={8} md={8} sm={12} xs={12} >
                    {/* <Row className="h-50"> */}
                    <h2 className="my-auto mx-auto text-light">Leaderboard</h2>
                    {/* <Card border="light" style={{ width: '18rem' }}> */}
                    <Row className="my-3 mx-3 px-3 d-flex justify-content-center align-items-center">
                        <Col>
                            {/* <Card border="success" bg="light" style={{ width: '13rem' }} className="px-2">
                                <Card.Header ><h5>Rank 1</h5></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <span> ABC </span>
                                    </Card.Text>
                                </Card.Body>
                            </Card> */}
                            <Image className="myResultImage" draggable="false" src={gold} height="160px" width="160px" />
                            {/* <br /> */}
                            <p className="text-white">{`${loading ? "Rank 1" : userRank1Data.name}`} : {`${loading ? "4000" : userRank1Data.total_score}`}</p>
                        </Col>
                    </Row>
                    <Row className="my-3 mx-3 px-2">
                        <Col xxl={6} lg={6} md={6} sm={12} xs={12} >
                            {/* <Card border="success" bg="light" style={{ width: '13rem' }} className="mx-2 px-2">
                                <Card.Header ><h5>Rank 2</h5></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <span> ABC </span>
                                    </Card.Text>
                                </Card.Body>
                            </Card> */}
                            <Image className="myResultImage" draggable="false" src={silver} height="160px" width="160px" />
                            {/* <br /> */}
                            <p className="text-white">{`${loading ? "Rank 2" : userRank2Data.name}`} : {`${loading ? "2300" : userRank2Data.total_score}`}</p>

                            {/* <Card border="success" bg="light" style={{ width: '13rem' }} className="mx-2 px-2">
                                <Card.Header ><h5>Rank 3</h5></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <span> ABC </span>
                                    </Card.Text>
                                </Card.Body>
                            </Card> */}
                        </Col>
                        <Col xxl={6} lg={6} md={6} sm={12} xs={12}>
                            <Image className="myResultImage" draggable="false" src={bronze} height="160px" width="160px" />
                            {/* <br /> */}
                            <p className="text-white">{`${loading ? "Rank 3" : userRank3Data.name}`} : {`${loading ? "2000" : userRank3Data.total_score}`}</p>
                        </Col>
                    </Row>
                    {/* </Row> */}
                </Col>
            </Row>
        </Container>
    )
}

export default ResultPage