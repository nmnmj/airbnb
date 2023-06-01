import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import wine from '../images/wine.png'
import {BsUpload} from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineCalendar } from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CiCircleAlert } from 'react-icons/ci';
import { BiBed } from 'react-icons/bi';
import { RiHotelBedFill } from 'react-icons/ri';
import { FaShower } from 'react-icons/fa';
import guest from '../images/travel.png'


export default function TemporaryDrawer({children, item}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "85vw" }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        { item && [item ].map((text, index) => (
          <>
            <div className='d-flex ms-2'>
              <div>
                {/* <AiOutlineCloseCircle className='close' /> */}
                <img src={item.img} alt="..." className='drawerimg' />
              </div>
              <div>
                <img src={item.img} alt="..." className='drawerimg2' />
                <img src={item.img} alt="..." className='drawerimg2' />
              </div>
            </div>
            <span className='winediv'>
            <img src={wine} className='wine' alt="" />
            Superhost
            </span>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-6'>
                  <div className='ms-2'>
                    <BsUpload className='upl' />
                    <AiOutlineHeart className='upl' />
                    <div>
                      <h4 className='fw-bolder'>{item.title}</h4>
                      <p>{item.address}</p>
                    </div>
                  </div>
                  <div className='ms-2 mt-4'>
                    <img src={guest} alt="guest" width="25px" />
                    <span>{item.guest} Guests</span>
                  </div>
                  <div className='ms-2 mt-4'>
                    <BiBed style={{fontSize:"2vw"}} />
                    <span>{item.bedroom} Bedrooms</span>
                  </div>
                  <div className='ms-2 mt-4'>
                    <RiHotelBedFill style={{fontSize:"2vw"}} />
                    <span>{item.bed} Beds</span>
                  </div>
                  <div className='ms-2 mt-4'>
                    <FaShower style={{fontSize:"2vw"}} />
                    <span>{item.bath} Baths</span>
                  </div>
                </div>
            {/* second part********************************************************************* */}
                <div className='col-6'>
                  <div className='p-4 sticky-top'>
                    <div className="card beigecard p-2" >
                      <div className="card-body">
                        <p className="card-title">
                          <span className='fw-bold h4'>
                          ${item.price}
                          </span>
                          /night
                          <span style={{float:"right", fontSize:"small"}}>
                            <AiFillStar /> {item.rating}
                          </span>
                        </p>
                        <div className='d-flex justify-content-between mt-4'>
                          <div>
                          <small className=''>Check In</small> <br />
                          <div>
                            {/* <AiOutlineCalendar /> */}
                            <input className='dateinp' type="date" />
                          </div>
                          </div>
                          <div>
                          <small className=''>Check Out</small> <br />
                          <div>
                            {/* <AiOutlineCalendar/> */}
                            <input className='dateinp' type="date" />
                          </div>
                          </div>
                        </div>
                        <p className="card-text mt-4">
                          <small>
                          Guests <br />
                          </small>
                          <select className='form-control ' name="" id="">
                            <option >1 guests</option>
                            <option >2 guests</option>
                          </select>
                        </p>
                        <p className='mt-4'>
                          <span>
                            <span className='fw-bold'>
                            1 night
                            </span>
                            <CiCircleAlert />
                          </span>
                          <span className='' style={{float:"right"}}>
                            ${item.price}
                          </span>
                        </p>
                        <p>
                          <span>
                            <span className="fw-bold">
                            Cleaning Fee
                            </span>
                            <CiCircleAlert />
                          </span>
                          <span className='' style={{float:"right"}}>
                            ${item.cleaning}
                          </span>
                        </p>
                        <p>
                          <span>
                            <span className="fw-bold">
                            Airbnb Service Fee
                            </span>
                            <CiCircleAlert />
                          </span>
                          <span className='' style={{float:"right"}}>
                            ${item.airbnbfee}
                          </span>
                        </p>
                        <p>
                          <span className='fw-bold'>
                            Total<CiCircleAlert /> <br />
                            <small className='fw-light'>Before taxes</small>
                          </span>
                          <span className='' style={{float:"right"}}>
                            ${(Number(item.airbnbfee)+Number(item.cleaning)+ Number(item.price))}
                          </span>
                        </p>
                        <a href="#" className="btn btn-danger p-2 form-control">Reserve</a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
           
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button sx={{color:"black", textTransform:"none", textAlign:"start"}} onClick={toggleDrawer('right', true)}>{children} </Button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}