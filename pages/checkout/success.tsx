import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";
import { useCart } from "../../base";

const SuccessPageD = dynamic(
  () => import("../../components/Page/Checkout/CheckoutPage"),
  {
    ssr: false,
  }
);
export default function SuccessfulPayment() {
  const { query } = useRouter();
  const clearCart = useCart((state) => state.clearCart);

  useLayoutEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-24 p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-green-500 text-center">
        Payment Successful!
      </h1>

      <p className="mt-4 text-gray-800">
        Your payment of £{query.amount} has been successfully processed. Thank
        you for your purchase!
      </p>

      <div className="flex justify-center mt-8">
        <a
          href="#"
          className="py-2 px-4 bg-green-500 hover:bg-green-600 rounded-lg text-white"
        >
          Continue to Website
        </a>
      </div>
    </div>
  );
}
