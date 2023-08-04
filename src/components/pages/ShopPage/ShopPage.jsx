import { Grid, Container  } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchShopsData } from '../../../store/actions/fetchShopsDataActions';
import { ProductViews } from '../../ProductView/ProductView'; 

import './shopsPage.css' 

function ShoppingPage() {
   const dispatch = useDispatch() 
    const {products, loading} = useSelector(state => state.shops)
   useEffect(() => {
    dispatch(fetchShopsData());
  }, []);
 
    if (loading) return <p>Loading...</p>

     return (
        <Container sx={{ py: 8 }} maxWidth="md">
         <Grid container spacing={4}>
            {products.map(item => <ProductViews productId={item.id} key={item.id} />)}
            </Grid>
        </Container> 
    );
}

export default ShoppingPage;
