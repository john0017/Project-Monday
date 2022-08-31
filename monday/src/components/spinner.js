import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { spinner } from '../App';
import { useRecoilState } from 'recoil';
import Stack from '@mui/material/Stack';



export default function Spinner(props) {
  const [spin, setSpin] = useRecoilState(spinner);

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={spin}
        // onClick={handleClose}
      >
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={0.5}
        >
            <CircularProgress color="inherit" />
            { props.msg }
        </Stack>
      </Backdrop>
    </div>
  );
}
