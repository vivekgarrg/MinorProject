import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './items.css'
import headphone from '../Assets/headphone.jpg'
import watch from '../Assets/watch.jpg'

export default function ActionAreaCard() {
  return (
    <div className='items-div'>
   <div className='card'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
       <img src={watch} width="400"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Watch $200
          </Typography>
          <Typography variant="body2" color="text.secondary">
           This type of data we have to attach to our react app
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    <div className='card'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
       <img src={headphone} width="440"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Watch $200
          </Typography>
          <Typography variant="body2" color="text.secondary">
           This type of data we have to attach to our react app
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    <div className='card'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
       <img src={watch} width="400"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Watch $200
          </Typography>
          <Typography variant="body2" color="text.secondary">
           This type of data we have to attach to our react app
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
  );
}
