import { Box, Button, Container, Grid, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import './productDetailView.css'
import ProductNotFoundImage from '../../assets/product_not_found.png'

function ProductDetail() {
    const { productId } = useParams()
    const { products } = useSelector(state => state.shops)
    const product = products.find(prod => prod.id == parseInt(productId))
    
    if(!product) {
        return (<p>Oups, something goes wrong! please go back to shops page. <Link to={'/app/shop'}> go back</Link></p>)
    }
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Paper elevation={3} >
                        <img src={ProductNotFoundImage} />
                    </Paper>
                </Grid>
                <Grid item xs={8} className='c_product_detail_content'>
                    <Box sx={{mb: '15px' }}>
                        <h3>price: {product.id}</h3>
                        <h3>collection number: {product.collection_id}</h3>    
                    </Box>
                    <Button variant="outlined" color='success'>buy now</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ProductDetail;