import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMY = [
    {
      title: "Test1",
      price: 1,
      description: "This is a first product - amazing!",
    },
    {
      title: "Test2",
      price: 2,
      description: "This is a first product - amazing!",
    },
    {
      title: "Test3",
      price: 3,
      description: "This is a first product - amazing!",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY.map((item) => {
          return (
            <ProductItem
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
