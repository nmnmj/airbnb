import React, { useState } from 'react'
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
import { AiOutlineStar } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import data from '../data.json'
import Modal from './Modal';

const Sidebar = () => {
    let[show, setShow] = useState(false)
  return (
    <div className='d-flex'>
        <div className="sidebar" >
        <a className="active show ms-3" href="#home" style={{fontSize:"1.5vw"}}>
            <FaAirbnb  />
            <span className='hide ms-2' >All Homes</span>
        </a>
        <a href="#news" className='ms-3 show' style={{fontSize:"1.5vw"}}>
            <GiIndiaGate />
            <span className='hide ms-2' >Amazing Views</span>
        </a>
        <a href="#news" className='ms-3 show' style={{fontSize:"1.5vw"}}>
            <MdMapsHomeWork />
            <span className='hide ms-2' >Tiny Homes</span>
        </a>
        <a href="#news" className='ms-3 show' style={{fontSize:"1.5vw"}}>
            <GiCampCookingPot />
            <span className='hide ms-2' >Kitchen</span>
        </a>
        <a href="#news" className='ms-3 show' style={{fontSize:"1.5vw"}}>
            <MdSurfing />
            <span className='hide ms-2' >Surfing</span>
        </a>
        <a href="#news" className='ms-3 show' style={{fontSize:"1.5vw"}}>
            <GiMedievalGate />
            <span className='hide ms-2' >Mansion</span>
        </a>
        <a href="#news" className='ms-3 show' style={{fontSize:"1.5vw"}}>
            <RiHandCoinLine />
            <span className='hide ms-2' >Luxe</span>
        </a>
        <a href="#news" className='ms-3 show' style={{fontSize:"1.5vw"}}>
            <GiTreeDoor />
            <span className='hide ms-2' >Tree House</span>
        </a>
        <a href="#news" className='ms-3 show' style={{fontSize:"1.5vw"}}>
            <GiCampingTent />
            <span className='hide ms-2' >Camping</span>
        </a>
        <a href="#news" className='ms-3 show' style={{fontSize:"1.5vw"}}>
            <TbBeach />
            <span className='hide ms-2' >Beach Front</span>
        </a>
        <a href="#news" className='ms-3 show' style={{fontSize:"1.5vw"}}>
            <GiFarmTractor />
            <span className='hide ms-2' >Farms</span>
        </a>
        <a href="#news" className='ms-3 show' style={{fontSize:"1.5vw"}}>
            <GiCastle />
            <span className='hide ms-2' >Castles</span>
        </a>
        <a href="#news" className='ms-3 show' style={{fontSize:"1.5vw"}}>
            <GiGrapes />
            <span className='hide ms-2' >Vineyards</span>
        </a>
        <a href="#news" className='ms-3 show' style={{fontSize:"1.5vw"}}>
            <MdPool />
            <span className='hide ms-2' >Pool</span>
        </a>
        <a href="#news" className='ms-3 show' style={{fontSize:"1.5vw"}}>
            <FaSkiing />
            <span className='hide ms-2' >Skiing</span>
        </a>
        <a href="#news" className='ms-3 show' style={{fontSize:"1.5vw"}}>
            <GiDesert />
            <span className='hide ms-2' >Desert</span>
        </a>
      
        </div>
        <div className='' style={{width:"100%", display:"flex", flexWrap:"wrap", justifyContent:"space-evenly"}}>
        {
            data.map((item, i)=>{
                return <>
                    <div className="content ms-2 " key={i} style={{cursor:"pointer"}} onClick={()=>{setShow(!show)}} >
                        <div className="card" style={{"width": "35vw", border:"none"}}>
                        <div className="card-body" >
                        <AiOutlineHeart className='heart' 
                        style={{padding:"3px", borderRadius:"50%", fontSize:"2.5vw", cursor:"pointer",
                        float:"right", position:"absolute", top:"50px", right:"30px"}}  />
                        <img src={item.img} className="card-img-top" style={{borderTopRightRadius:"20%",borderTopLeftRadius:"20%"}} alt="..."  />
                        <div style={{border:"1px solid lightgrey"}}>
                            <h6 className="card-text">{item.title}</h6>
                            <span style={{fontWeight:"lighter"}}>{item.address}</span> <br /> <br />
                            <span className=''>{item.price}</span>
                            <span className='' style={{float:"right"}}>
                                <AiOutlineStar />
                                {item.rating}
                            </span>
                        </div>

                        </div>
                        </div>
                        {
                            show && 
                            <Modal show={show} setShow={setShow}  >
                                <h1>{item.msg}</h1>
                            </Modal>
                        } 
                      
                    </div>
                </>
            })
        }

        </div>
    </div>
  )
}

export default Sidebar