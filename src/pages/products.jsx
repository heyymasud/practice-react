import { useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProducts";
import { getProduct } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import { TableCart } from "../components/Fragments/TableCard";
import { Navbar } from "../components/Layouts/Navbar";

// const products = [
//   {
//     id: 1,
//     name: "Sepatu Baru",
//     price: 1200000,
//     image: "/images/shoes-1.jpg",
//     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti fuga
//         aliquam a quod accusantium recusandae dicta blanditiis sequi eaque
//         minus! Ducimus consectetur quaerat qui saepe animi excepturi temporibus
//         quis rerum.`,
//   },
//   {
//     id: 2,
//     name: "Sepatu Bekas",
//     price: 800000,
//     image: "/images/shoes-1.jpg",
//     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
//   },
//   {
//     id: 3,
//     name: "Sepatu Abibas",
//     price: 2800000,
//     image: "/images/shoes-1.jpg",
//     description: `The best sepatu in the world Abibas!.`,
//   },
// ];

const ProductsPage = () => {
  // const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  useLogin();

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

  // const handleAddToCart = (id) => {
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === id ? { ...item, qty: item.qty + 1 } : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { id, qty: 1 }]);
  //   }
  // };

  return (
    <>
      <Navbar />
      <div className="flex justify-start py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id}/>
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  // handleAddToCart={handleAddToCart}
                ></CardProduct.Footer>
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6 fixed right-0">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
      {/* <div className="flex justify-center my-5">
      <Counter></Counter>
      </div> */}
    </>
  );
};

export default ProductsPage;
