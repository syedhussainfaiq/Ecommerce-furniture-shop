
import HeroSection from "./components/herosection";
import CompanyLogos from "./components/companeylogo";
import CategoriesSection from "./components/catagorysection";
import HotegorySection from "./components/hotcatagorysection";
import ProductsSection from "./components/productlist";
import FeaturedProducts from "./components/topproduct";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <CompanyLogos/>
      <FeaturedProducts/>
      <CategoriesSection/>
      <HotegorySection/>
      <ProductsSection/>
      
    </div>
  );
}
