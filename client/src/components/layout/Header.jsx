import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { orange } from '../../constants/color'
import {Notifications as NotificationsIcon,Add as AddIcon,Logout as LogoutIcon, Group as GroupIcon,Menu as MenuIcon ,Search as SearchIcon} from "@mui/icons-material"; 
import {useNavigate} from "react-router-dom";
import SearchDialog from '../specific/Search';
const Header = () => {



    const[isMobile, setIsMobile] = useState(false);
    const[isSearch, setIsSearch] = useState(false);
    const[isNewGroup, setIsNewGroup] = useState(false);
    const[isNotification, setIsNotification] = useState(false);



   const navigate = useNavigate();
     
    const handleMobile =()=>{
        setIsMobile((prev) =>!prev);
    }

    // const openSearch =()=>{
    //     setIsSearch(true);
    // }
    const openSearch =()=>{
        setIsSearch((prev) =>!prev);
    }

    const openNewGroup =()=>{
      setIsNewGroup((prev) =>!prev);
    }

    const openNotification =()=>{
      setIsNotification((prev) =>!prev);
    }
    const logoutHandler =()=>{
        console.log("logout");
    }

    const navigateGroup =()=> navigate("/groups");
 

  return (
    <>
        <Box sx={{flexGrow:1}} height={"4rem"}>
        <AppBar position="static" sx={{
            bgcolor:orange
        }}>
        <Toolbar>
     <Typography variant='h6' sx={{
        display:{xs:'none', sm:"block"},
     }}>Messenger</Typography>
     <Box  sx={{
        display:{xs:'block', sm:"none"},}}>
            <IconButton color='inherit' onClick={handleMobile}>
                <MenuIcon/>
            </IconButton>
        </Box>

        <Box sx={{
         flexGrow:1,
}}></Box>
        <Box> 
         <IconBtn title={"Search"}
         icon={<SearchIcon/>}
         onClick={openSearch}
         />

         <IconBtn title={"NewGroup"}
         icon={<AddIcon/>}
         onClick={openNewGroup}
         />

         <IconBtn title={"ManageGroup"}
         icon={<GroupIcon/>}
         onClick={navigateGroup}
         />

         <IconBtn title={"Notification"}
         icon={<NotificationsIcon/>}
         onClick={openNotification}
         />

         <IconBtn title={"Logout"}
         icon={<LogoutIcon/>}
         onClick={logoutHandler}
         />

        </Box>
        </Toolbar>

        </AppBar>

        </Box>

        {isSearch && <SearchDialog />}
    </>
  );
};

const IconBtn =({ title, icon,onClick}) =>{
    return (
        <Tooltip title ={title}>
            <IconButton color='inherit' size='large' onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    )
}

export default Header