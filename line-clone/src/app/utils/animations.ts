/* //import {gsap} from "gsap"
//import { gsap } from "gsap";
//import { useGSAP } from "@gsap/react";

import gsap from "gsap"

export const animationPageIn = () =>{
  const animation = document.getElementsByClassName("container") 

  if(animation){
    const tl = gsap.timeline()

    tl.set([animation],{
      yPercent:0,
    }).to([animation],{
      yPercent:100,
      duration:2
    })
  }
} */