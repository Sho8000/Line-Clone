"use client"
import Image from "next/image";
import HeaderMain01 from "../../../public/images/header/HeaderMain01.jpg"
import HeaderMain02 from "../../../public/images/header/HeaderMain02.jpg"
import iconLine from "../../../public/images/header/icon-line-w.png"
import iconApple from "../../../public/images/header/appleLogo.png"
import iconAnd from "../../../public/images/header/androidLogo.png"
import iconDownload from "../../../public/images/header/iconDownload.png"
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";    
import { redirect } from "next/navigation";
import "./Header.css";
import { useScroll } from "motion/react";

import styles from '../../../src/app/components/Header/Header.module.css'
import Link from "next/link";

export default function Header() {
  const [opacity1,setOpacity1] = useState(0);
  const [opacity2,setOpacity2] = useState(1);
  const pic1 = useRef(0)

  /* very first animation */
  const firstWallRef = useRef(null);
  const lineLogoRef = useRef(null);
  const lineLogoAnimation = gsap.timeline();
  useGSAP(() => {
    lineLogoAnimation
      .to(lineLogoRef.current,{scaleX:0 ,duration:0})
      .to(lineLogoRef.current,{opacity:1 ,duration:0})
      .to(lineLogoRef.current,{scaleX:1 ,duration:1, transformOrigin:"left"})
      .to(lineLogoRef.current,{scaleX:0 ,duration:1, transformOrigin:"right"},4)
      .to(firstWallRef.current,{opacity:0,zIndex:-1 , duration:2},6)
  }, [lineLogoRef]);

  /* main animation */
  const pic1Ref = useRef(null);
  const pic2Ref = useRef(null);
  const pic1Animation = gsap.timeline();
  const pic1AnimationOpacity = gsap.timeline();
  const pic2Animation = gsap.timeline();
  const pic2AnimationOpacity = gsap.timeline();

  useEffect(()=>{
    const selectPic = setTimeout(()=>{
      if(pic1.current===1){
        pic1.current = 0
        setOpacity1(0)
        setOpacity2(1)
        pic2Animation.fromTo(pic2Ref.current,{scale:1.5, ease:"none",duration:1},{scale:1, ease:"none", duration:6})
        pic2AnimationOpacity
          .fromTo(pic2Ref.current,{opacity:0, ease:"none",duration:0},{opacity:1, ease:"none",duration:2})
          .to(pic2Ref.current,{opacity:0, ease:"none",duration:2},4)

      } else{
        pic1.current = 1
        setOpacity1(1)
        setOpacity2(0)
        pic1Animation.fromTo(pic1Ref.current,{scale:1.5, ease:"none",duration:0.1},{scale:1, ease:"none", duration:6})
        pic1AnimationOpacity
        .fromTo(pic1Ref.current,{opacity:0, ease:"none",duration:0},{opacity:1, ease:"none",duration:2})
        .to(pic1Ref.current,{opacity:0, ease:"none",duration:2},4)
      }
    },5000)
    return () => clearTimeout(selectPic);
  },[opacity1,opacity2])

  /* download hover */
  const [isHoveringApple, setIsHoveredApple] = useState(false);
  const [isHoveringAnd, setIsHoveredAnd] = useState(false);
  const onMouseEnterApple = () => setIsHoveredApple(true);
  const onMouseLeaveApple = () => setIsHoveredApple(false);
  const onMouseEnterAnd = () => setIsHoveredAnd(true);
  const onMouseLeaveAnd = () => setIsHoveredAnd(false);
  const downloadApple = () => {
    redirect("https://apps.apple.com/us/app/line/id443904275")
  }
  const downloadAndloid = () => {
    redirect("https://play.google.com/store/apps/details?id=jp.naver.line.android")
  }

  /* scrollText animation*/
  const scrollText = useRef(null);
  const scrollTextAnimation = gsap.timeline();

  /* Scrollbar animation */
  const scrollBar = useRef(null);
  const scrollBarAnimation = gsap.timeline();

  /* common GSAP part */
  useGSAP(() => {
    pic2Animation.fromTo(pic2Ref.current,{scale:1.5, ease:"none",duration:1},{scale:1, ease:"none", duration:6})
    pic2AnimationOpacity
      .to(pic2Ref.current,{opacity:1, ease:"none",duration:2})
      .to(pic2Ref.current,{opacity:0, ease:"none",duration:2},4);

    scrollTextAnimation
      .fromTo(scrollText.current,{y:10, ease:"power1.inOut"},{y:-10, ease:"power1.inOut"  })
      .yoyo(true).repeat(-1)

    scrollBarAnimation
      .fromTo(scrollBar.current,{scaleY:0, transformOrigin:"top"},{scaleY:1, transformOrigin:"top"})
      .fromTo(scrollBar.current,{scaleY:1, transformOrigin:"bottom"},{scaleY:0, transformOrigin:"bottom"})
      .repeat(-1)
    
  }, []);

  /* Scroll effect */
  const mainScrollAnimation = gsap.timeline()
  const [shrinkBG,setShrinkBG] = useState(false);
  const scrollBG = useRef<HTMLDivElement>(null);
  const MainScroll = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({target:MainScroll});

  useEffect(()=>{
    const scrollAction = scrollYProgress.on('change',(latest)=> {
      console.log("scrollProgresY",latest)
      if(latest<0.01){
        setShrinkBG(false)
      } else{
        setShrinkBG(true)
      }
    })

    if(shrinkBG){
      mainScrollAnimation
        .to(".pic1Container",{scaleY:0.7, duration:0.1})
        .to(".pic2Container",{scaleY:0.7, duration:0.1})
        .to(".scrollText",{opacity:0, duration:0})
        .to(scrollBar,{opacity:0, duration:0})
    }else{
      mainScrollAnimation
        .to(".pic1Container",{scaleY:1, duration:0.1})
        .to(".pic2Container",{scaleY:1, duration:0.1})
        .to(".scrollText",{opacity:1, duration:0})
        .to(scrollBar,{opacity:1, duration:0})
    }

    return()=>{
      scrollAction();
    }
  },[scrollYProgress,shrinkBG])

  return (
    <>
      <section ref={scrollBG} id="header" className="h-[100vh] w-[100vw] overflow-hidden">
        <div className="h-[100vh] w-[100vw] relative">
          <div ref={firstWallRef} className="h-[100vh] w-[100vw] fixed z-50 bg-white firstWall">
            <div ref={lineLogoRef} className="h-[130] w-[400] bg-green-500 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0">
            </div>
            <h1 className="text-white absolute  top-[50%] left-[50%] translate-x-[30%] text-6xl font-bold firstWall_text">LINE</h1>
          </div>

          {/* added to adjust navbar height */}
          <header>
            <div>
              <div className={styles.headerTopRow}>
                  <h1><Link href="/">LINE</Link></h1>
              </div>
              <div className={styles.navigationContainer}>
              </div>
            </div>
          </header>
          {/* until here */}
          
          <div className="absolute h-[100vh] w-[100vw] mainWall">
            <div className="absolute h-[100vh] w-[100vw] pic1Container overflow-hidden">
              <Image
                ref={pic1Ref}
                src={HeaderMain01}
                alt="image"
                style={{width:"100%", height:"100%", position:"absolute", objectFit:"cover", opacity:opacity1}}
              />
            </div>
            <div className="absolute h-[100vh] w-[100vw] pic2Container overflow-hidden">
              <Image
                ref={pic2Ref}
                src={HeaderMain02}
                alt="image"
                style={{minWidth:"100vw", minHeight:"100vh", position:"absolute", objectFit:"cover", opacity:opacity2}}
              />
            </div>
            <div className="w-[840px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white textArea">
              <h1 className="text-[140px] font-bold leading-none mainText">Life on LINE</h1>
              <p className="text-[40px] subText">LINE—always at your side.</p>
              <div className="flex gap-5 mt-10">
                <Image
                  src={iconLine}
                  width={25}
                  height={25}
                  alt="LINE img"
                />
                <p className="text-[14px]">Download</p>
              </div>
              <div className="flex gap-2 mt-3">
                <div className="w-[55] h-[55] border-2 rounded-md flex justify-center items-center"
                  onMouseEnter={onMouseEnterApple}
                  onMouseLeave={onMouseLeaveApple}
                >
                  {isHoveringApple ? (
                    <Image
                      src={iconDownload}
                      width={45}
                      height={45}
                      alt="download img"   
                      onClick={downloadApple}
                      style={{ width:"105%", height:"100%", borderRadius:5 , backgroundColor:"rgb(99, 244, 99)"}}             
                    />
                  ):(
                    <Image
                      src={iconApple}
                      width={45}
                      height={45}
                      alt="Apple img"   
                      style={{height:"70%", width:"60%"}}             
                    />
                  )}
                </div>
                <div className="w-[55] h-[55] border-2 rounded-md flex justify-center items-center"
                  onMouseEnter={onMouseEnterAnd}
                  onMouseLeave={onMouseLeaveAnd}
                >
                  {isHoveringAnd ? (
                    <Image
                      src={iconDownload}
                      width={45}
                      height={45}
                      alt="download img"   
                      onClick={downloadAndloid}
                      style={{ width:"105%", height:"100%", borderRadius:5 ,backgroundColor:"rgb(10, 244, 10)"}}             
                    />                
                  ):(
                    <Image
                      src={iconAnd}
                      width={15}
                      height={35}
                      alt="And img"
                      style={{height:"70%", width:"60%"}}             
                    />
                  )}
                </div>
              </div>
            </div>
            <div ref={scrollText} className="absolute top-[80%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white ">
              <p className="text-[14px] scrollText">scroll</p>
            </div>
            <div ref={scrollBar} className="w-1 h-[15%] absolute bottom-[0%] left-[50%] -translate-x-1/2 bg-white"></div>
          </div>
        </div>
      </section>
    </>
  );
}
