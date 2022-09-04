import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import PropertyStack from './propertyStacks'
import { inputDialog } from '../App';
import { useRecoilState } from 'recoil';


const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar() {

  const [inputDialog_, setInputDialog] = useRecoilState(inputDialog)

  const addAsset=()=>{
    console.log('fab')
    setInputDialog({open:true, msg:'Add'})
  }


  return (
    <React.Fragment>
      <CssBaseline />

      <PropertyStack />

      <AppBar 
        position="fixed" 
        color="primary" 
        sx={{ 
            top: 'auto',
            bottom: 0,
            display:{md:'none'}
            }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>

          <StyledFab 
            color="secondary" 
            aria-label="add"
            onClick={addAsset}
          >
            <AddIcon />
          </StyledFab>

          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
