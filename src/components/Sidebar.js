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
            $(".hide").show(200)
        },function(){
            $(".hide").hide(500)
        })
    },[])
  return (
    <div className='d-flex'>
        <div className="sidebar" >
            <div className='aa mt-2 p-2'>
                <a className="home show ms-3" href="#home" >
                    <FaAirbnb  className='me-3' />
                    <span className='hide ms-1' >All Homes</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <GiIndiaGate className='me-3' />
                    <span className='hide ms-1' >Amazing View</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <MdMapsHomeWork className='me-3' />
                    <span className='hide ms-1' >Tiny Homes</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <GiCampCookingPot className='me-3' />
                    <span className='hide ms-1' >Kitchen</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <MdSurfing className='me-3' />
                    <span className='hide ms-1' >Surfing</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <GiMedievalGate className='me-3' />
                    <span className='hide ms-1' >Mansion</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <RiHandCoinLine className='me-3' />
                    <span className='hide ms-1' >Luxe</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <GiTreeDoor className='me-3' />
                    <span className='hide ms-1' >Tree House</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <GiCampingTent className='me-3' />
                    <span className='hide ms-1' >Camping</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <TbBeach className='me-3' />
                    <span className='hide ms-1' >Beach Front</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <GiFarmTractor className='me-3' />
                    <span className='hide ms-1' >Farms</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <GiCastle className='me-3' />
                    <span className='hide ms-1' >Castles</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <GiGrapes className='me-3' />
                    <span className='hide ms-1' >Vineyards</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <MdPool className='me-3' />
                    <span className='hide ms-1' >Pool</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <FaSkiing className='me-3' />
                    <span className='hide ms-1' >Skiing</span>
                </a>
                <a href="#news" className='ms-3 show' >
                    <GiDesert className='me-3' />
                    <span className='hide ms-1' >Desert</span>
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