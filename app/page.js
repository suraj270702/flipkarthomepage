import Image from "next/image";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
import Products from "./components/Products";

export default function Home() {
  return (
    <>
    <Navbar />
    <Categories />
    <Banner />
    <Products />
    </>
  );
}
