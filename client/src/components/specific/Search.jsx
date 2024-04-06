import { Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField, } from '@mui/material';
import React, { useState } from 'react'
import { useInputValidation } from '6pp';
import {Search as SearchIcon} from '@mui/icons-material';
import Useritem from '../shared/Useritem';
import { sampleUsers } from '../../constants/sampleData';



 
const Search = () => {

  const search =useInputValidation("");
let isLoadingSendFriendRequest =false;
  const addFriendHandler =(id) =>{
    console.log(id);

  }
  const [users , setUsers] = useState(sampleUsers);
  return ( <Dialog open>
   <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        </Stack>

        <List>
          {
            users.map((i)=>{
             <Useritem user={i} key={i._id} handler={addFriendHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
             />
            })
          }
        </List>


  </Dialog>
  );
};

export default Search