import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCaroselData } from './MainCaroselData';





const MainCarosel = () => (
  //const navigate=useNavi
  //const items = mainCaroselData.map((item)=> <img className='cursor-pointer' role='presentation' src={item.image} alt=""/>)

  const item=[]

    return (<AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy="alternate"
    />)
);

export default MainCarosel;