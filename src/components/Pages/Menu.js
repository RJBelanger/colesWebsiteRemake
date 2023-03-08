import { GlobalStyle } from "../../globalStyles";
import Footer from "../Footer";
import FullMenu from "../FullMenu";
import { productData } from "../FullMenu/data";

export const Menu = () => {
  return (
    <>
      <GlobalStyle />
      <FullMenu data={productData}/>
      <Footer />
    </>
  );
};
