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
     <div class="container-fluid sticky-top bg-white mt-2">
        <div class="d-flex justify-content-between">
        <div class="mt-2">
            <span className="navbar-brand ms-3 bg-dark dashboard text-decoration-none" href="#">
                <RxDashboard />
            </span>
            <a className="navbar-brand text-dark map" href="#">
                <FiMap />
            </a>
        </div>
        <div class="">
            <div className='d-flex'>
                <a className="nav-link text-dark text-bold me-2 cdiv "  aria-current="page" href="#">
                    Anywhere <RiArrowDropDownLine />
                </a>
                <a className="nav-link text-dark text-bold cdiv "  href="#">
                    <SlCalender /> June 14 - 21
                </a>
                <span className="nav-link text-dark text-bold ms-2 cdiv "   href="#">
                    <a href="#" className='text-decoration-none text-danger' >
                    <AiOutlineMinus style={{backgroundColor:"white", fontSize:"25px", marginRight:"10px"}} />
                    </a>
                    4 guests
                    <a href="#" className='text-decoration-none text-danger' >
                    <AiOutlinePlus style={{backgroundColor:"white", fontSize:"25px", marginLeft:"10px"}} />
                    </a>
                </span>
            </div>
        </div>
        <div class="">
            <a className="me-3 filterr" type="submit">
                <GrFilter data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" />
            </a>
        </div>
        </div>
    </div>

    <div className="collapse" id="collapseExample">
            <div className="card card-body" style={{width:"35vw", float:"right", fontSize:"1vw"}}>
                <div>
                <span style={{fontWeight:"normal"}}>Filters</span>
                <a className='' style={{ color:"red", marginLeft:"20vw", textDecoration:"none", cursor:"pointer"}}>Clear All </a>
                <hr />
                <span style={{fontWeight:"bold"}}>Price Range</span> <br />
                <span>The average nightly price is $133</span> <br /> <br />
                <div className='d-flex'>
                    <div>
                    <span style={{fontWeight:"lighter"}}>Min Price</span> <br />
                    <input className='mt-2 form-control price' type="text" name="minp" />
                    </div>
                    <div>
                    <span style={{fontWeight:"lighter"}}>Max Price</span> <br />
                    <input className='mt-2 form-control price' type="text" name="maxp" />
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
    <hr style={{margin:"0.3vh", color:"gray"}} />
    </>
    
  )
}

export default Bnavbar