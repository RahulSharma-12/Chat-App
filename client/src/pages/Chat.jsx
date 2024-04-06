import React,{useRef} from 'react'
import AppLayout from '../components/layout/AppLayout'
import { grayColor, orange } from "../constants/color";
import { IconButton, Skeleton, Stack } from "@mui/material";

const Chat = () => {

  const containerRef = useRef(null);
  return (
     <>
      <Stack 
      ref={containerRef}
      boxSizing={"border-box"}
      padding={"1rem"}
      spacing={"1rem"}
      bgcolor={grayColor}
      height={"90%"}
      sx={{
        overflow:"hidden",
        overflow:"auto",
      }}
      
      
      ></Stack>

      <form style={{
        height:"10%",
      }}>

      <Stack></Stack>

      </form>
     </>
  )
}

export default AppLayout()(Chat);