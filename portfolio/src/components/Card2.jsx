import React from "react";
import { motion } from "framer-motion";

const Card2 = () => {
    return (
        <motion.div
          initial={"hidden"}
          whileInView={"visible"}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
        >
          <a href="hello">
            <img
              class="rounded-t-lg w-full"
              src="https://assets.gadgets360cdn.com/pricee/assets/category/202006/og-banner-himalaya-1200x628_1591165053.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="helo">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Himalaya Drug company site Clone
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Himalaya is an E-commerce website, where custamurs can go throgh all the daily usage cosmetic products and can order through online to get deliveed to their home. <br /> <br />
    
              Myself built entire project within in 5 days <br /> <br />
    
              in this website user can signup if somone dont has account previouslly and user can search the products with some filters and can also add to cart.
            </p>
    
            <h3 href="hello"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 margin-bottom: 25px "
            >
              HTML | CSS | JS 
            </h3>
            <br /> <br />
    
            <a
              href="hello"
              class="   inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300" href="https://github.com/Murali149/projectHimalayaSiteclone"
            >
              Code
              <svg
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
    
            <a  href="">     </a>
    
            <a
              href="hello"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300" href="https://project-himalaya-siteclone-jyp73t7wl-murali149.vercel.app"
            >
              Demo
              <svg
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </motion.div>
      );
};

export default Card2;