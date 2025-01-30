"use client"
import Image from 'next/image'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const data = [
    {
      image: "/images/carousel/degustacion1.jpg",
      title: "Vinos para festividades",
    },
    { image: "/images/carousel/carousel2.jpg", title: "Catas excepcionales" },
    { image: "/images/carousel/carousel3.jpg", title: "Catas en casa" },
    { image: "/images/carousel/marridaje2.jpg", title: "Maridajes" },
    
    { image: "/images/carousel/cata3.jpg", title: "Marcas reconocidas internas e internacionales" },
  ];

export default function CarouselHeader(){
    return(
        
        <Carousel 
        interval={3000}
        autoPlay={true}
        infiniteLoop={true}
        >
            {data.map((item,id)=>{
                return(
                    
                <div key={id} className='rounded-md'>
                    
                    
                <img src={item.image} alt={item.title} className='rounded-md'/>
                <p className="legend">{item.title}</p>
                
            </div>
            
                )
            })}
        
           
    </Carousel>
    
    )

}