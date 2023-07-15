import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const Directory = ({categories}) => {
  return (
    <section className="directory">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </section>
  );
};

export default Directory;
