import PropTypes from "prop-types";

import { Container, CardImage } from './styles'
import { useCart } from "../../hooks/CartContext";
import { CartButton } from "../CardButton";

export function CardProduct({product}) {
    const { putProductInCart } = useCart();
    return (
        <Container>
            <CardImage src={product.url} alt={product.name} />
            <div>
                <p>{product.name}</p>
                <strong>{(product.currencyValue)}</strong>
            </div>
           <CartButton onClick={ () => putProductInCart(product)}> </CartButton>
        </Container>
    );
}
CardProduct.propTypes = { // "propTypes" deve ter p minúsculo
    product: PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      currencyValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    }).isRequired,
};  