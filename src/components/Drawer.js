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
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        { item && [item ].map((text, index) => (
          <div className='d-flex ms-2'>
            <div>
              <img src={item.img} alt="..." className='drawerimg' />
            </div>
            <div>
              <img src={item.img} alt="..." className='drawerimg2' />
              <img src={item.img} alt="..." className='drawerimg2' />
            </div>
        
          </div>
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