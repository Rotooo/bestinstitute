import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerIcon from '../../assets/besticons/banner.png';

export default function CarouselHome() {
  return (
    <>
        <Carousel 
            autoPlay={true} 
            showArrows={false} 
            showThumbs={false} 
            transitionTime={1}
        >
                <div>
                    <img src={BannerIcon} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={BannerIcon}/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={BannerIcon} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </>
  )
}
