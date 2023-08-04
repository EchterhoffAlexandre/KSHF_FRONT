import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link, redirect, useParams } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductNotFoundImage from '../../assets/product_not_found.png'

export function ProductViews({ productId }) {
     return (

             <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  image={ProductNotFoundImage}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the
                    content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" endIcon={<ArrowForwardIcon />} >
                    <Link to={`${productId}/detail`} underline="none" style={{ 'color': 'white' }}>View</Link>
                  </Button> 
                  <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
                    Buy
                  </Button>
                </CardActions> 
              
              </Card>
              
        </Grid>
    )
}