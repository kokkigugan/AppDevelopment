import React, { useState, useEffect } from "react";
import { Category } from "../../components/category/Category";
import { Order } from "../../components/hero/Order";
import { Slider } from "../../components/hero/Slider";
import { Product } from "../../components/product/Product";
import Loader from "../../components/loader/loader";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
    const loadingTimer = setTimeout(() => {
      setIsLoading(false); 
    }, 2000);
    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader /> 
      ) : (
        <>
          <Slider />
          <Order />
          <Category />
          <Product />
        </>
      )}
    </>
  );
};
