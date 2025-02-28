import PropTypes from "prop-types";
import { Container, CardImage } from './styles'
import { CartButton } from "../CardButton";

export function CardProduct({product}) {
   console.log(product);
    return (
        <Container>
            <CardImage src={product.url} alt={product.name} />
            <div>
                <p>{product.name}</p>
                <strong>{(product.currencyValue)}</strong>
            </div>
           <CartButton> </CartButton>
        </Container>
    );
}
CardProduct.PropTypes = {
    product: PropTypes.object,
}