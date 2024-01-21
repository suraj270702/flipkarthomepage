import React from "react";

const Products = () => {
  const products = [
    {
      desc: "Top Selling Dell Keyboard",
      price: 229,
      imgUrl:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/keyboard/gaming-keyboard/e/l/r/hydra-10-5-0-2-4-ghz-rgb-type-c-charging-brown-switch-mechanical-original-imagtyz3zbya4gf3.jpeg?q=70",
    },
    {
      desc: "Pendrives & SD Cards",
      price: 289,
      imgUrl:
        "https://rukminim2.flixcart.com/image/850/1000/jwfa5jk0/pendrive/pendrive/z/f/p/sandisk-sdcz50-128g-i35-original-imafh3xkthkjzhkv.jpeg?q=90&crop=false",
    },
    {
      desc: "Printers",
      price: 399,
      imgUrl:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/printer/e/n/x/-original-imagnuwemgbmc6ay.jpeg?q=70&crop=false",
    },
    {
      desc: "Premium Powerbanks",
      price: 599,
      imgUrl:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/power-bank/5/s/u/-original-imagmgtrzfynwhfy.jpeg?q=70&crop=false",
    },
    {
      desc: "Top Selling SD Cards",
      price: 599,
      imgUrl:
        "https://rukminim2.flixcart.com/image/832/832/l2jcccw0/memory-card/sdxc-uhs-i-card/s/w/y/sdsqua4-064g-gn6mn-sandisk-original-imagdv2wy6qub3az.jpeg?q=70&crop=false",
    },
  ];
  return (
    <div className="mx-[20px] mt-[40px]">
      <div className="bg-[#fff] min-h-[360px] px-3">
        <div className="">
          <div className="pt-4">
            <h1 className="text-[24px] font-bold not-italic leading-normal text-[#000]">
              Best of Electronics
            </h1>
          </div>
          <div className="products mt-4 flex gap-[20px]">
            {products.map((product, i) => (
              <div
                className="h-full w-[250px] border border-solid border-gray-200 rounded-md px-5 py-3"
                key={i}
              >
                <div className="flex flex-col items-center">
                  <div className="h-full">
                    <img src={product.imgUrl} className="w-[200px] h-[100px]" />
                  </div>
                  <div className="mt-[20px] flex flex-col items-center gap-y-1">
                    <span className="text-[16px] font-[500] leading-normal not-italic text-gray-400">
                      {product.desc}
                    </span>
                    <span className="text-[16px] font-bold leading-normal not-italic text-[#000]">
                      From &#8377;{product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
