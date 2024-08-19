import Category from "../components/stickers/Category"
import Hero from "../components/hero/Hero"
import Partner from "../components/Partener/Partner"
import Advantage from "../components/Advantage/Adventage"
import Custom from "../components/custom/Custom"
import { useEffect } from "react"
import Hot from "../components/popular/popularSticker/Hot"
import PopularSkin from "../components/popular/popularSkin/PopularSkin"
import SkinCategory from "../components/Laptop_skin/SkinCategory"
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <Custom />
      <Hot />
      <Category />
      <PopularSkin />
      <SkinCategory />
      <Partner />
      <Advantage />
    </>
  )
}

export default Home