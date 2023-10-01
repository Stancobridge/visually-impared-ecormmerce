import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";

import { productsList } from "../../../base";

export const Products = () => {
  return (
    <div className="gap-8 grid grid-cols-2 sm:grid-cols-3 mx-2">
      {productsList.map((item, index) => (
        <Link
          href={`/products/${item.title.toLowerCase()}-${item.price}`}
          key={index.toString()}
        >
          <Card
            shadow="sm"
            isPressable
            onPress={() => console.log("item pressed")}
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
                {item.price}
              </p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};
