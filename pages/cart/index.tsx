import dynamic from "next/dynamic";

const CartPageD = dynamic(() => import("../../components/Page/Cart/CartPage"), {
  ssr: false,
});
export default function CartIndexPage() {
  return <CartPageD />;
}
