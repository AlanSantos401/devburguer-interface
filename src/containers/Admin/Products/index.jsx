import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

import { api } from '../../../services/api';
import { formatPrice } from '../../../utils/formatPrice';
import { Container, ProductImage, EditButton } from './styles';
import { CheckCircle, Pencil, XCircle } from '@phosphor-icons/react';


export function Product() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    const navigate = useNavigate();

    useEffect(() => {

      async function loadProducts() {
        const { data } = await api.get('/products');
          
        setProducts(data);
      }

      async function loadCategories() {
        const { data } = await api.get('/categories');
        setCategories(data);
      }

      loadProducts();
      loadCategories();
    },[])

    function isOffer(offer) {
      if(offer) {
        return <CheckCircle color='#61A120' size="28"/>;
      } else {
      return <XCircle color='#FF3205' size="28"/>
    }
   }

   function editProduct(product) {
    navigate('/admin/editar-produto', { state: { product } });
   }

   const filteredProducts = selectedCategory
       ? products.filter(product => product.category.name === selectedCategory)
       : products;

    return(
        <Container>
          <FormControl sx={{minWidth: 200, marginBottom: 2}} >
            <InputLabel>Filtar por Categoria</InputLabel>
            <Select
               value={selectedCategory}
               onChange={(e) => setSelectedCategory(e.target.value)}
              >
               <MenuItem value="">Todas</MenuItem>  
               {categories.map((category) => (
                <MenuItem key={category.id} value={category.name}>
                    {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="center">Preço</TableCell>
            <TableCell align="center">Produto em Ofertas</TableCell>
            <TableCell align="center">Imagem do Produto</TableCell>
            <TableCell align="center">Editar produto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredProducts.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="center">{formatPrice(product.price)}</TableCell>
              <TableCell align="center">{isOffer(product.offer)}</TableCell>
              <TableCell align="center">
                <ProductImage src={product.url}/>
              </TableCell>
              <TableCell align="center">
                <EditButton onClick={() => editProduct(product)}>
                  <Pencil />
                </EditButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
       </Table>
      </TableContainer>
     </Container>
    )
}