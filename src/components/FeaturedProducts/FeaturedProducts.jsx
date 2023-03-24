import React, { useEffect } from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card'
// import axios from "axios"
// import { useState } from 'react'
import useFetch from '../../hooks/useFetch'

export const FeaturedProducts = ({type}) => {

    // const data = [
    //     {
    //         id: 1,
    //         img:         "https://images.pexels.com/photos/8106257/pexels-photo-8106257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",            
    //         img2:         "https://images.pexels.com/photos/8107059/pexels-photo-8107059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         title: "Mint green tuxido",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,
    //     },
    //     {
    //         id: 2,
    //         img:         "https://images.pexels.com/photos/12277704/pexels-photo-12277704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",            
    //         img2:         "https://images.pexels.com/photos/12093813/pexels-photo-12093813.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    //         title: "Jeans coat",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,
    //     },
    //     {
    //         id: 3,
    //         img:         "https://images.pexels.com/photos/6974967/pexels-photo-6974967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",            
    //         img2:         "https://images.pexels.com/photos/6975060/pexels-photo-6975060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         title: "Hoodie",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,
    //     }
    // ]

    // const FeaturedProducts = ({ type }) => {
    //     const { data, loading, error } = useFetch(
    //       `/products?populate=*&[filters][type][$eq]=${type}`
    //     );


    // const [data, setData] =useState([])
    const { data, loading, error } = useFetch(
      `/products?populate=*&[filters][type][$eq]=${type}`
    );

    return (
      <div className="featuredProducts">
        <div className="top">
          <h1>{type} products</h1>
          <p>
          We're excited to present our featured and trending products, which have been carefully selected by our team as some of our most popular items.
          Products that have quickly become a customer favorite. Customers love it and we think you will too.
          </p>
        </div>
        <div className="bottom">
          {error
            ? "Something went wrong!"
            : loading
            ? "loading"
            : data?.map((item) => <Card item={item} key={item.id} />)}
        </div>
      </div>
    );
}


export default FeaturedProducts;

