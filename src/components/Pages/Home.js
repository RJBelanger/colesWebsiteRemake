import { GlobalStyle } from "../../globalStyles";
import Feature from "../Feature";
import Footer from "../Footer";
import Hero from "../Hero";
import Products from "../Products";
import { productData, productDataTwo } from "../Products/data";

export const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Products heading="Chiefs Favorites" data={productData} />
      <Feature />
      <Products heading="Sweet Treats from the Bakery" data={productDataTwo} />
      <Footer />
    </>
  );
};
