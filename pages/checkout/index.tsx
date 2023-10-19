import dynamic from "next/dynamic";

const CheckoutPageD = dynamic(
  () => import("../../components/Page/Checkout/CheckoutPage"),
  {
    ssr: false,
  }
);
export default function Checkout() {
  return <CheckoutPageD />;
}
