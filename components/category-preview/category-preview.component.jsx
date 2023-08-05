import "./category-preview.styles.scss";

import Link from "next/link";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => (
  <div className="category-preview-container">
    <h2>
      <Link href={'/shop/' + `${title}`}>
        <span className="title">{title.toUpperCase()}</span>
      </Link>
    </h2>
    <div className="preview">
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
);

export default CategoryPreview;
