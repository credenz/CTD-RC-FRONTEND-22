import './Coding.css';
// import AceEditor from "react-ace";

// import "ace-builds/src-noconflict/mode-c_cpp";
// import "ace-builds/src-noconflict/theme-monokai";
// import "ace-builds/src-noconflict/ext-language_tools";
// import { React } from "react";
import Ldiv from './ldiv/Ldiv';
import Rdiv from './rdiv/Rdiv';
// import { useCookies } from "react-cookie";
import React, { useEffect, useState } from 'react'
// import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
// var axios = require('axios');

function Coding(){
    const [cookies] = useCookies(["token"]);
    const [question, setQuestion] = useState([]);
    const [loading, setLoading] = useState(false);

    const params = useParams();
    useEffect(() => {

        const loadData = async () =>{
        setLoading(true);
        var config = {
            method: 'get',
            url: `https://admin.rc.pictieee.in/RC/user`,
            headers: {
                'Authorization': `Token ${cookies.token}`
            },
        };

        const questionsList = await axios(config)
          .catch(function (err) {
              console.log('err',err);
            });
        console.log('questionsList', questionsList.data)
        //   .then(function (response) {
        //     console.log(JSON.stringify(response.data));
        //   })
        setQuestion(questionsList.data);
        setLoading(false);
    }
    loadData();

    }, [])

    if (loading) {
        return (
            <>Loadingg....</>
        )
    }
    
    
    // console.log('id: ', params.id)

    return(
    <div className='mdiv rows'>
        {/* <AceEditor
        mode="c_cpp"
        theme="monokai"
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        /> */}
        <div className="col-12 col-sm-12 col-sx-12 col-md-6 col-l-6 col-lg-6 col-xxl-6">
            <Ldiv qnIdParam={params.id} userScoreProp={question.total_score} />
        </div>
        <div className="col-12 col-sm-12 col-sx-12 col-md-6 col-l-6 col-lg-6 col-xxl-6">
            <Rdiv qnIdParam={params.id} />
        </div>
    </div>
    )
}

export default Coding;