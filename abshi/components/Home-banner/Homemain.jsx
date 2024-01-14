import React from 'react';
import Homepage from "./Homepage"
import CardList from "./CardList"
import Consultant from "./Consultant"
import Acheivment from "./Acheivment"
import Testimonials from "./Testimonials"

const Homemain = () => {
  return (
    <div>
        <Homepage/>
        <CardList/>
        <Consultant/>
        <Acheivment/>
        <Testimonials/>

    </div>
  );
}

export default Homemain;
