import * as React from 'react';
import { alerts } from '../App';
import Alert from '@mui/material/Alert';
import { useRecoilState } from 'recoil';
import Snackbar from '@mui/material/Snackbar';


export default function CustomizedSnackbars() {
    const [alert, setAlerts] = useRecoilState(alerts)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setAlerts ({
                open:false,
                type:'',
                color:'',
                message:''
            })
    };

    return (
        <Snackbar 
            anchorOrigin={{ 
                vertical: 'top',
                horizontal: 'center' 
            }}
            open={alert.open} 
            autoHideDuration={1900} 
            onClose={handleClose}
            
        >
            <Alert
                elevation={1}
                onClose={handleClose} 
                severity={alert.type} 
                sx={{ width: '100%',
                    borderRadius:'20px', 
                }}
            >
                {alert.message}
            </Alert>
        </Snackbar>
        );
}

