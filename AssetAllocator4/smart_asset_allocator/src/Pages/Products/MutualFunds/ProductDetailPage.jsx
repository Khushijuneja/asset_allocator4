// ProductDetailPage.js
import { useParams } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import financialProductsData from "../../../constants/financialProducts.json";
import "./style.css";

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = financialProductsData.financialProducts.find(
    (p) => p.id === slug
  );

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  const renderContent = () => {
    return product.content.map((item, index) => {
      switch (item.type) {
        case "heading":
          const IconComponent = item.icon ? LucideIcons[item.icon] : null;
          return (
            <div key={index} className="content-heading">
              {IconComponent && (
                <IconComponent className="heading-icon" size={24} />
              )}
              <h2>{item.text}</h2>
            </div>
          );
        case "subheading":
          return (
            <h3 key={index} className="content-subheading">
              {item.text}
            </h3>
          );
        case "paragraph":
          return (
            <p key={index} className="content-paragraph">
              {item.text}
            </p>
          );
        case "list":
          return (
            <ul key={index} className="content-list">
              {item.items.map((listItem, i) => (
                <li key={i}>{listItem}</li>
              ))}
            </ul>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="container mt-20 mx-auto p-10">
      <div className="product-header">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <div className="product-title-container">
          <h1 className="product-title">{product.title}</h1>
        </div>
      </div>

      <div className="product-content">{renderContent()}</div>
    </div>
  );
};

export default ProductDetailPage;
