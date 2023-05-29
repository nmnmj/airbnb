import React from 'react'
import { RxDashboard } from 'react-icons/rx';
import { FiMap } from 'react-icons/fi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { SlCalender } from 'react-icons/sl';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { GrFilter } from 'react-icons/gr';

const Bnavbar = () => {
  return (
    <>
    <div className='sticky-top'>
        <nav className="navbar navbar-expand-lg navbar-white bg-white">
            <div className="container-fluid">
                <a className="navbar-brand ms-3 bg-dark" style={{padding:"10px", borderRadius:"30%", color:"white", textAlign:"center"}} href="#">
                    <RxDashboard />
                </a>
                <a className="navbar-brand text-dark" style={{padding:"10px", backgroundColor:"beige", borderRadius:"30%", color:"white", textAlign:"center"}} href="#">
                    <FiMap />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
                  
                    <li className="nav-item" style={{marginLeft:"26vw"}}>
                    <a className="nav-link text-dark text-bold me-2" style={{backgroundColor:"beige", padding:"2vh", borderRadius:"1vw"}} aria-current="page" href="#">
                       Anywhere <RiArrowDropDownLine />
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-dark text-bold" style={{backgroundColor:"beige", padding:"2vh", borderRadius:"1vw"}} href="#">
                        <SlCalender /> June 14 - 21
                    </a>
                    </li>
                    <li className="nav-item">
                    <span className="nav-link text-dark text-bold ms-2" style={{backgroundColor:"beige", padding:"2vh", borderRadius:"1vw"}}  href="#">
                        <a href="#" style={{textDecoration:"none", color:"red"}}>
                        <AiOutlineMinus style={{backgroundColor:"white", fontSize:"25px", marginRight:"10px"}} />
                        </a>
                        4 guests
                        <a href="#" style={{textDecoration:"none", color:"red"}}>
                        <AiOutlinePlus style={{backgroundColor:"white", fontSize:"25px", marginLeft:"10px"}} />
                        </a>
                    </span>
                    </li>
                    
                   
                  
                </ul>
                <form className="d-flex">
                    <a className="me-3" style={{fontSize:"larger",padding:"15px", backgroundColor:"beige", borderRadius:"30%", color:"white", textAlign:"center"}} type="submit">
                        <GrFilter data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" />
                    </a>
                </form>
                </div>
            </div>
        </nav>
       
    </div>
    <div className="collapse" id="collapseExample" style={{width:"35vw", float:"right"}}>
            <div className="card card-body">
                <div>
                <span style={{fontWeight:"bold"}}>Filters</span>
                <a className='' style={{ color:"red", marginLeft:"22vw", textDecoration:"none", cursor:"pointer"}}>Clear All </a>
                <hr />
                <span style={{fontWeight:"bold"}}>Price Range</span> <br />
                <span>The average nightly price is $133</span> <br /> <br />
                <div className='d-flex'>
                    <div>
                    <span style={{fontWeight:"lighter"}}>Min Price</span> <br />
                    <input className='mt-2' type="text" name="minp" style={{borderRadius:"30%", padding:".5vw", border:"1px solid grey"}} />
                    </div>
                    <div>
                    <span style={{fontWeight:"lighter"}}>Max Price</span> <br />
                    <input className='mt-2' type="text" name="maxp" style={{borderRadius:"30%", padding:".5vw", border:"1px solid grey"}} />
                    </div>
                </div>
                <hr />
                <div>
                    <h5>Type of place</h5> <br />
                    <div>
                        <input type="checkbox" name="" id="" className='chkbx' />
                        <span className='ms-2'>Entire Place</span> <br />
                        <span className='ms-3' style={{fontWeight:"lighter"}}>A place all to yourself</span>
                    </div>
                    <br />
                    <div>
                        <input type="checkbox" name="" id="" className='chkbx' />
                        <span className='ms-2'>Private Room</span> <br />
                        <span className='ms-3' style={{fontWeight:"lighter"}}>Your own room in a home or a hotel, plus some shared common spaces.</span>
                    </div>
                    <br />
                    <div>
                        <input type="checkbox" name="" id="" className='chkbx' />
                        <span className='ms-2'>Shared Room</span> <br />
                        <span className='ms-3' style={{fontWeight:"lighter"}}>A sleeping space and common areas that may be shared with others.</span>
                    </div>
                </div> <hr />
                <div>
                    <h5>Rooms, Beds and Baths.</h5> <br />
                    <div>
                        <span className=''>Bedrooms</span> <br />
                        <div className='mt-2'>
                            <button style={{backgroundColor:"black", color:"white", borderRadius:"40%", padding:".6vw"}}>Any</button>
                            <button style={{backgroundColor:"white", color:"black", borderRadius:"40%", paddingInline:"1.5vw", borderColor:"lightgrey"}}>1</button>
                            <button style={{backgroundColor:"white", color:"black", borderRadius:"40%", paddingInline:"1.5vw", borderColor:"lightgrey"}}>2</button>
                            <button style={{backgroundColor:"white", color:"black", borderRadius:"40%", paddingInline:"1.5vw", borderColor:"lightgrey"}}>3</button>
                            <button style={{backgroundColor:"white", color:"black", borderRadius:"40%", paddingInline:"1.5vw", borderColor:"lightgrey"}}>4</button>
                            <button style={{backgroundColor:"white", color:"black", borderRadius:"40%", paddingInline:"1.5vw", borderColor:"lightgrey"}}>5+</button>
                        </div>

                    </div> <br />
                    <div>
                        <span className=''>Beds</span> <br />
                        <div className='mt-2'>
                            <button style={{backgroundColor:"black", color:"white", borderRadius:"40%", padding:".6vw"}}>Any</button>
                            <button style={{backgroundColor:"white", color:"black", borderRadius:"40%", paddingInline:"1.5vw", borderColor:"lightgrey"}}>1</button>
                            <button style={{backgroundColor:"white", color:"black", borderRadius:"40%", paddingInline:"1.5vw", borderColor:"lightgrey"}}>2</button>
                            <button style={{backgroundColor:"white", color:"black", borderRadius:"40%", paddingInline:"1.5vw", borderColor:"lightgrey"}}>3</button>
                            <button style={{backgroundColor:"white", color:"black", borderRadius:"40%", paddingInline:"1.5vw", borderColor:"lightgrey"}}>4</button>
                            <button style={{backgroundColor:"white", color:"black", borderRadius:"40%", paddingInline:"1.5vw", borderColor:"lightgrey"}}>5+</button>
                        </div>

                    </div> <br />
                    <div>
                        <span className=''>Bathrooms</span> <br />
                        <div className='mt-2'>
                            <button style={{backgroundColor:"black", color:"white", borderRadius:"40%", padding:".6vw"}}>Any</button>
                            <button style={{backgroundColor:"white", color:"black", borderRadius:"40%", paddingInline:"1.5vw", borderColor:"lightgrey"}}>1</button>
                            <button style={{backgroundColor:"white", color:"black", borderRadius:"40%", paddingInline:"1.5vw", borderColor:"lightgrey"}}>2</button>
                            <button style={{backgroundColor:"white", color:"black", borderRadius:"40%", paddingInline:"1.5vw", borderColor:"lightgrey"}}>3</button>
                            <button style={{backgroundColor:"white", color:"black", borderRadius:"40%", paddingInline:"1.5vw", borderColor:"lightgrey"}}>4</button>
                            <button style={{backgroundColor:"white", color:"black", borderRadius:"40%", paddingInline:"1.5vw", borderColor:"lightgrey"}}>5+</button>
                        </div>

                    </div>

                </div> <br />
                <button className='' style={{fontSize:"larger", backgroundColor:"red", color:"white", textAlign:"center", width:"100%", borderRadius:"20%", padding:"1vw", position:"sticky", bottom:"0"}} >Show 836 Home</button>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Bnavbar