import { Banner, Container, CategoryMenu, ProductsContainer } from "./styles";

export function Menu() {
  return (
     <Container>
      <Banner>
        <h1>O MELHOR
            <br />
            HAMBURGER 
            <br />
                ESTÁ  AQUI!
                <span>esse cardápio está irresistivel!</span>
            </h1>
       
       </Banner>
       <CategoryMenu>

       </CategoryMenu>

       <ProductsContainer> </ProductsContainer>
        
    </Container>
  );
}