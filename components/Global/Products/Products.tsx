import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import { useRouter } from "next/router";
import { productsList } from "../../../base";

export const Products = () => {
  const { query, push } = useRouter();
  let products = productsList;

  if (query?.search) {
    products = products.filter((product) =>
      product.title
        .toLowerCase()
        .includes((query.search as string).toLowerCase())
    );
  }

  if (query?.category && query?.category.toString().toLowerCase() !== "all") {
    products = products.filter((product) =>
      product.category
        .toLowerCase()
        .includes((query.category as string).toLowerCase())
    );
  }

  return (
    <div className="gap-8 grid grid-cols-2 sm:grid-cols-3 mx-2">
      {products.map((item) => (
        <Card
          key={item.title.toLowerCase()}
          shadow="sm"
          isPressable
          onPress={() => {
            push(`/products/${item.id}`);
          }}
          title={`This product is ${item.title} priced at ${item.price} pounds, click to see more details about this product and purchase`}
          className="h-[350px]"
        >
          <CardBody className="h-full overflow-visible p-0 ">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-contain h-[260px] p-2"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between mt-2 block md:flex">
            <h4 className="font-bold text-2xl">{item.title}</h4>
            <p className="text-white font-bold text-2xl bg-blue-700 p-2">
              £{item.price}
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
