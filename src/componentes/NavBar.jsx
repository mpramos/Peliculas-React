import { Drawer ,List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <Drawer variant='permanent' sx={{width:240}}>
        <List>
            <ListItem button component={Link} to='/home'>
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText primary='Home'/>
            </ListItem>
            <ListItem button component={Link} to='/trending'>
                <ListItemIcon><TrendingUpIcon/></ListItemIcon>
                <ListItemText primary='Trending'/>
            </ListItem>
            <ListItem button component={Link} to='/favorite'>
                <ListItemIcon><FavoriteIcon/></ListItemIcon>
                <ListItemText primary='Favorite'/>
            </ListItem>
        </List>
    </Drawer>
  )
}

export default NavBar