import React from "react";

const Navbar = () => {
  return (
    <div className="navbar py-4 mx-auto bg-[#fff]">
      <div className="flex items-center gap-[30px]">
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
          alt="flipkartLogo"
        />
        <div className="w-[600px] h-[40px] rounded-lg py-[5px] bg-blue-50 flex items-center gap-x-[30px]">
          <div className="ml-4">
            <svg
              width="24"
              height="24"
              class=""
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Search Icon</title>
              <path
                d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                stroke="#717478"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M16 16L21 21"
                stroke="#717478"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <input
            className="bg-transparent text-[#000] w-full"
            placeholder="Search for Products,Brands and More"
          />
        </div>
        <div className="flex group gap-[10px] items-center py-2 px-4 hover:bg-blue-700  rounded-lg transition ease-in-out cursor-pointer">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
            alt=""
          />
          <span className="text-[20px] font-[500] text-[#000]  not-italic leading-normal">
            Login
          </span>
        </div>
        <div className="flex group gap-[10px] items-center py-2 px-4 ">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
            alt=""
          />
          <span className="text-[20px] font-[500] text-[#000]  not-italic leading-normal">
            Cart
          </span>
        </div>
        <div className="flex group gap-[10px] items-center py-2 px-4 ">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
            alt=""
          />
          <span className="text-[20px] font-[500] text-[#000]  not-italic leading-normal">
            Become a Seller
          </span>
        </div>
        <div>
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
