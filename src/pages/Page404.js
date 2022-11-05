import React from 'react';
import { Image } from 'react-bootstrap';
// import error404 from "../images/404Error.png";
import error404 from "../images/Page4043.jpg";

const Page404 = () => {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center text-white'>
        <Image src={error404} />
    </div>
  )
}

export default Page404;