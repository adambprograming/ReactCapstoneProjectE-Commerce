"use client";

import './category.styles.scss'

import { CategoriesContext } from "../../../contexts/categories.context";
import { useContext, useEffect } from "react";

import ProductCard from "../../../components/product-card/product-card.component";

export const dynamicParams = false;

export async function generateStaticParams() {
    const { categoriesMap } = useContext(CategoriesContext);
    return Object.keys(categoriesMap).map((key) => ({category: key}))
  }

const Page = ({ params }) => {
  const { category } = params
  const { categoriesMap } = useContext(CategoriesContext);
  const pageContent = categoriesMap[category];
  console.log(pageContent);
  return (
  <div className='category-container'>
    {pageContent ? (pageContent.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))): console.log('pageContent')}
  </div>
  )
}

export default Page
