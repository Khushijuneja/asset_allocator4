import React from "react";
import { useParams } from "react-router-dom";
import {
  AboutSection,
  AdvisorTips,
  Benefits,
  CTA,
  FAQ,
  Features,
  HeroSection,
  Regulations,
} from "./ProductComponent";
import { productsMap } from "../../constants/products";
import ProductSidebar from "./ProductSidebar";

const ProductLayout = () => {
  const { slug } = useParams();
  const product = productsMap[slug];

  if (!product)
    return <div className="p-4 text-red-500">Product not found</div>;

  return (
    <div className="container mx-auto mt-28 grid grid-cols-1 lg:grid-cols-4 gap-6 p-4 lg:p-10">
      <div className="lg:col-span-3 space-y-10">
        <HeroSection {...product} />
        <AboutSection content={product.aboutContent} />
        <Features features={product.features} />
        <Benefits benefits={product.benefits} />
        {product.advisorTips && <AdvisorTips {...product.advisorTips} />}
        {product.regulations && <Regulations {...product.regulations} />}
        <FAQ faqs={product.faqs} />
        <CTA {...product.cta} />
      </div>

      <div className="lg:col-span-1">
        <ProductSidebar sidebarLinks={product.sidebarLinks} />
      </div>
    </div>
  );
};

export default ProductLayout;
