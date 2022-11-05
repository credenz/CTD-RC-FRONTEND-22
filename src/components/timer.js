
import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

const Timer = () => {
  var axios = require('axios');
  const navigate=useNavigate();
  const location = useLocation();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  // var deadline = "November, 06, 2022";
  // var deadline = "06 Nov 2022 12:00:00"; 
  const [deadline, setDeadline] = useState("06 Nov 2022 12:00:00")
  useEffect(() => {
    const loadData = async () => {
      var config = {
        method: 'get',
        url: `https://admin.rc.pictieee.in//RC/time`,
        // no header required
    };

    const time = await axios(config)
    //   .catch(function (error) {
    //       console.log(error);
    //     });
    // console.log('time', time.data.end_time)
    // deadline=time.data.end_time;
    setDeadline(time.data.end_time)
    let tx = Date.parse(deadline) - Date.now();
    let tx2=Date.parse(time.data.start_time)-Date.now();
    if(tx2>0){
      navigate("/");
    }
    // console.log("time.data.end_time: ",time.data.end_time);
    // console.log("time.data.start_time: ",time.data.start_time);
    // console.log("time.now: ", new Date().toISOString() );
    console.log("tx: ",tx/1000);
    // localStorage.setItem('h',2);
    }
    loadData();
  }, []);


  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    if(time<0){
      // console.log('timer ended');
      // window.location.pathname="/result";
      navigate("/result")
    }
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    // console.log("MY interval in timer is: ",interval )
    // console.log("MY getTime(deadline) in timer is: ",getTime(deadline) )
    // return () => {clearInterval(interval);navigate("/");};
    return () => {clearInterval(interval);};
  // }, []);
});

  return (
    <div className="timer">
       {days}:{hours}:{minutes}:{seconds}
    </div>
  );
};

export default Timer;