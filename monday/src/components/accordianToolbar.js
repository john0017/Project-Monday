import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Divider from '@mui/material/Divider';
import ImageGridView from './imageList';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import { imageWindow } from '../App';
import { useRecoilState } from 'recoil';


const AccordianToolbar = () => {

    const [imageWin, setImageWin] = useRecoilState(imageWindow)


    const handleOpen = () => {
        console.log('image')
        setImageWin({
            open:true,
            id:'',
            name:'',
            image_list:[]
        });
    };


    return (
        <div>
          
            <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={1}
            >
                <Badge 
                    badgeContent={4} 
                    color="primary"
                    sx={{
                        marginRight: '3px'
                    }}
                    >
                    <Chip
                        label="Media"
                        onClick={handleOpen}
                        deleteIcon={<PhotoCamera />}
                        variant="outlined"
                    />
                </Badge>
                
                <Chip
                    label="Assign Job"
                    // onClick={handleClick}
                    // onDelete={handleDelete}
                    // deleteIcon={<DeleteIcon />}
                    variant="outlined"
                    disabled
                />
                    <Chip
                    label="Custom delete icon"
                    // onClick={handleClick}
                    // onDelete={handleDelete}
                    // deleteIcon={<DeleteIcon />}
                    variant="outlined"
                />
            </Stack>
        </div>
    );
};

export default AccordianToolbar;