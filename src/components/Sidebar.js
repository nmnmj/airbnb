import React, { useEffect, useState } from 'react'
import { FaAirbnb } from 'react-icons/fa';
import { GiIndiaGate } from 'react-icons/gi';
import { MdMapsHomeWork } from 'react-icons/md';
import { GiCampCookingPot } from 'react-icons/gi';
import { MdSurfing } from 'react-icons/md';
import { GiMedievalGate } from 'react-icons/gi';
import { RiHandCoinLine } from 'react-icons/ri';
import { GiTreeDoor } from 'react-icons/gi';
import { GiCampingTent } from 'react-icons/gi';
import { TbBeach } from 'react-icons/tb';
import { GiFarmTractor } from 'react-icons/gi';
import { GiCastle } from 'react-icons/gi';
import { GiGrapes } from 'react-icons/gi';
import { MdPool } from 'react-icons/md';
import { FaSkiing } from 'react-icons/fa';
import { GiDesert } from 'react-icons/gi';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import data from '../data.json'
import TemporaryDrawer from './Drawer';
import $ from 'jquery';

const Sidebar = () => {
    let[modalprop, setModalprop] = useState()
    useEffect(()=>{
        $(".aa").hover(function(){
            $(".hide").show(500)
        },function(){
            $(".hide").hide(500)
        })
    },[])
  return (
    <div className='d-flex'>
        <div className="sidebar" >
            <div className='aa'>
                <a className="home show ms-3" href="#home" >
                    <FaAirbnb  />
                    <span className='hide ms-2' >All Homes</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <GiIndiaGate />
                    <span className='hide ms-2' >Amazing View</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <MdMapsHomeWork />
                    <span className='hide ms-2' >Tiny Homes</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <GiCampCookingPot />
                    <span className='hide ms-2' >Kitchen</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <MdSurfing />
                    <span className='hide ms-2' >Surfing</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <GiMedievalGate />
                    <span className='hide ms-2' >Mansion</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <RiHandCoinLine />
                    <span className='hide ms-2' >Luxe</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <GiTreeDoor />
                    <span className='hide ms-2' >Tree House</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <GiCampingTent />
                    <span className='hide ms-2' >Camping</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <TbBeach />
                    <span className='hide ms-2' >Beach Front</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <GiFarmTractor />
                    <span className='hide ms-2' >Farms</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <GiCastle />
                    <span className='hide ms-2' >Castles</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <GiGrapes />
                    <span className='hide ms-2' >Vineyards</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <MdPool />
                    <span className='hide ms-2' >Pool</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <FaSkiing />
                    <span className='hide ms-2' >Skiing</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <GiDesert />
                    <span className='hide ms-2' >Desert</span>
                </a>

            </div>
      
        </div>
        <div className='container-fluid' style={{width:"100%", display:"flex", flexWrap:"wrap", justifyContent:"space-evenly"}}>
        {
            data.map((item, i)=>{
                return <>
                    <TemporaryDrawer item={modalprop} >
                        <div className="" key={i} style={{cursor:"pointer", margin: "-1vw"}} onClick={()=>{
                            setModalprop(item)
                        }} >
                            <div className="card" style={{width: "23vw", border:"none"}}>
                                <div className="card-body" >
                                <AiOutlineHeart className='heart' />
                                <img src={item.img} className="card-img-top" style={{borderTopRightRadius:"10%",borderTopLeftRadius:"10%"}} alt="..."  />
                                    <div style={{border:"1px solid lightgrey"}}>
                                        <div className='ms-3 mt-2'>
                                            <h6 className="card-text fw-bold">{item.title}</h6>
                                            <span style={{fontWeight:"lighter"}}>{item.address}</span> <br /> <br />
                                            <span className='fw-bold'>${item.price}/night</span>
                                            <span className='me-2' style={{float:"right"}}>
                                                <AiFillStar   />
                                                {item.rating}
                                            </span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </TemporaryDrawer>
                </>
            })
        }

        </div>
    </div>
  )
}

export default Sidebar