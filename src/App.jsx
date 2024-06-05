import "./styles/App.css";
import { fetchProducts, fetchCategories } from "./api/api";
import { ProductContext } from "./context/products-context";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Categories from "./components/Categories/Categories";
import ProductList from "./components/ProductList/ProductList";
import ShopList from "./components/ShopList/ShopList";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";

function App() {
  const [products, setProducts] = useState([]);
  const [productsCopy, setProductsCopy] = useState([]);

  const [categories, setCategories] = useState([]);

  const [showShopList, setShowShopList] = useState(false);

  const [productsInBasket, setProductsInBasket] = useState([]);

  const [productsCountInBasket, setProductsCountInBasket] = useState(0);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts()
      .then((dataProducts) => {
        setProducts(dataProducts);
        setProductsCopy(dataProducts);
      })
      .finally(() => {
        setLoading(true);
      });

    fetchCategories().then((dataCtaegories) => {
      dataCtaegories.unshift("all");
      setCategories(dataCtaegories);
    });
  }, []);

  function handleShowShopList() {
    setShowShopList(!showShopList);
  }

  function handleProductInBasket(product) {
    if (productsInBasket.some((x) => x.id == product.id)) {
      const newProductsInBasket = productsInBasket.map((x) => {
        if (x.id == product.id) {
          x.count++;
        }
        return x;
      });
      setProductsInBasket(newProductsInBasket);
    } else {
      product.count = 1;

      setProductsInBasket([...productsInBasket, product]);
    }
  }

  useEffect(() => {
    updateProductCount();
  }, [productsInBasket]);

  function updateProductCount() {
    const newProductsCountInBasket = productsInBasket.reduce(
      (acc, x) => acc + x.count,
      0
    );

    setProductsCountInBasket(newProductsCountInBasket);
  }

  return (
    <ProductContext.Provider
      value={{
        products: products,
        setProducts: setProducts,
        categories: categories,
        handleShowShopList: handleShowShopList,
        handleProductInBasket: handleProductInBasket,
        handleAllProduct: productsInBasket,
        handleAllProductFunc: setProductsInBasket,
      }}
    >
      <main className="App" id="home">
        <Header productCount={productsCountInBasket} />
        {showShopList ? (
          <ShopList
            products={productsInBasket}
            productsCountInBasket={productsCountInBasket}
            setProductsInBasket={setProductsInBasket}
          />
        ) : (
          <></>
        )}
        <Banner />
        {loading ? (
          <>
            <Categories productsCopy={productsCopy} />
            <ProductList />
          </>
        ) : (
          <Loading />
        )}

        <About />
        <Contact />
        <Footer />
      </main>
    </ProductContext.Provider>
  );
}

export default App;
