import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { assetTaskImageList } from '../App';
import { useRecoilState } from 'recoil';




export default function ImageGridView() {

  const [assetMedia, setAssetMedia] = useRecoilState(assetTaskImageList)


  return (
    <Box sx={{ height: 'auto', overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={{ xl: 3, md: 2, sm: 1 }} gap={2}>
        {
          assetMedia.length>0? assetMedia.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={item.image_url}
                  // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  // alt={item.title}
                  loading="lazy"
                />
                {/* <ImageListItemBar
                    title={item.title}
                    subtitle={<span>by: {item.author}</span>}
                    position="below"
                /> */}
              </ImageListItem>
            )
          ): <Box sx={{margin:'auto', textAlign:'center'}}>No Media Available</Box>
        }
      </ImageList>
    </Box>
  );
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      featured: true,
    }
  ];
