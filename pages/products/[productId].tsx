import Image from "next/image";

import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { productsList, useCart } from "../../base";

const ProductViewPage = () => {
  const params = useParams<{ productId: string }>();
  const { push } = useRouter();

  const product = productsList.find(
    (product) => product.id === params?.productId
  );

  const addToCart = useCart((state) => state.addToCart);
  const carts = useCart((state) => state.carts);

  if (!product) {
    return null;
  }

  return (
    <div className="bg-gray-100 py-8" tabIndex={0}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div
              tabIndex={0}
              className="h-[460px] rounded-lg bg-gray-300 mb-4 overflow-hidden relative"
            >
              <Image
                className="w-full h-full object-cover"
                src={product.img}
                alt={product.title}
                fill
              />
            </div>
            <div className="-mx-2 mb-4">
              <div className="w-full px-2">
                <button
                  onClick={() => {
                    addToCart(product.id);
                  }}
                  className="w-full bg-gray-900 text-white text-xl py-2 px-4 rounded-full font-bold hover:bg-gray-800 outline-2 outline-blue-500"
                >
                  Add to Cart (
                  {carts.find((cart) => cart.id === params.productId)
                    ?.quantity ?? 0}
                  )
                </button>
              </div>
              <div className="w-full px-2 mt-4">
                <button
                  onClick={() => push("/cart")}
                  className="w-full bg-pink-900 text-white text-xl py-2 px-4 rounded-full font-bold hover:bg-pink-800"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
            <div className="flex mb-4 text-2xl">
              <div className="mr-4">
                <span className="font-bold text-gray-700">Price: </span>
                <span className="text-gray-600">£{product.price}</span>
              </div>
              <div>
                <span className="font-bold text-gray-700">Availability:</span>
                <span className="text-gray-600">In Stock</span>
              </div>
            </div>
            <div className="text-2xl">
              <span className="font-bold text-gray-700">
                Product Description:
              </span>
              <p className="text-gray-600 text-xl mt-2">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductViewPage;
