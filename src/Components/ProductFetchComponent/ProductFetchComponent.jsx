import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCardComponent from "../ProductCardComponent/ProductCardComponent";
import NavBarComponent from "../NavBarComponent/NavBarComponent";

const ProductFetchComponent = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [search, setSearch] = useState(false);

  const fetchProducts = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    setProduct(response.data);
  };

  const addToCart = (productDetails) => {
    if (cart.includes(productDetails)) {
      alert("Already exists in cart");
    } else {
      setCart([...cart, productDetails]);
    }
    //  setTotal(total+productDetails.price);
  };

  const removeFromCart = (removeId) => {
    cart.splice(`${removeId}`, 1);
    setCart([...cart]);
  };
  const searchBarHandler = (event) => {
    setSearchKey(event.target.value);
    {
      searchKey.length > 1 ? setSearch(true) : setSearch(false);
    }
  };

  console.log(searchKey);
  console.log(cart);

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(product);
  return (
    <React.Fragment>
      <nav className="w-full fixed z-20">
        <NavBarComponent
          data={cart}
          removeFromCart={removeFromCart}
          searchBarHandler={searchBarHandler}
        />
      </nav>
      <main className="bg-slate-100">
        <div>
          {!search && (
            <div className="flex w-full flex-wrap gap-10 justify-evenly py-40 px-12 sm:px-0 ">
              {product &&
                product.map((it, index) => (
                  <div
                    className="w-90 h-96 z-0 bg-blue-100 shadow-md text-gray-800 hover:shadow-2xl hover:scale-105 duration-300 transition-transform hover:bg-white p-4 rounded-lg px-10 xs:mt-10 xs:w-72"
                    key={index}
                  >
                    <ProductCardComponent data={it} addToCart={addToCart} />
                  </div>

                  // <div className='w-1/3 h-2/5' key={index}>
                  //     <div className='flex  justify-center'><img className='w-52 h-52 rounded-md' src={it.image} alt='name' height='200' width={200}/></div>
                  //     <p>{it.title}</p>
                  //     <p>{it.description}</p>
                  // </div>
                ))}
            </div>
          )}
          {search && (
            <div className="flex w-full flex-wrap gap-10 justify-evenly pt-20">
              {product &&
                product
                  .filter((it) =>
                    it.title
                      .toLowerCase()
                      .includes(searchKey.toLowerCase())
                  )
                  .map((it, index) => (
                    <div
                      className="w-90 h-96 z-0 bg-slate-200 hover:scale-105 hover:scale-y-125 transition-transform hover:bg-white p-4 rounded-lg px-10"
                      key={index}
                    >
                      <ProductCardComponent data={it} addToCart={addToCart} />
                    </div>
                  ))}
            </div>
          )}
        </div>
      </main>
    </React.Fragment>
  );
};

export default ProductFetchComponent;
