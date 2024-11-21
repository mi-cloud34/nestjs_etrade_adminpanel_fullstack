  "use client"

import Cart from "@/components/ECommerce/Cart";
import { Feature } from "@/components/ECommerce/Feature";
import Hero from "@/components/ECommerce/Hero";
import Navbar from "@/components/ECommerce/Navbar";
import TrendingProduct from "@/components/ECommerce/TrendingProduct";
import { useState } from "react";
export default function Home() {
  const [showCart,setShowCart] =useState(false)
  return (
    <main>
    {/*   <Navbar setShowCart={setShowCart}/> */}
     {showCart&& <Cart setShowCart={setShowCart}/>}
     <Hero/>
     <Feature/>
     <TrendingProduct/>
    </main>
  );
}
