import { React, useState } from "react";

import { Button } from '@/components/UI/button';

function PricingHeader() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  return (
    <div>
      <div className="container  pb-[130px]">
        <div className="text-center">
          <h2 className="   pb-[30px] pt-[120px] text-3xl">
            Plans & <span className="text-[#00B7C1]">Pricing</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 pb-[5px]">
            Looking for advanced features? Check out our latest plans
          </p>
        </div>
        <div className="flex justify-center bg-white dark:bg-dark border-grey-300 my-[30px] w-[20%] mx-auto    rounded-3xl  ">
          <Button
            onClick={() => setBillingCycle("monthly")}
            className={`w-[130px] text-white  rounded-3xl  shadow-none  capitalize h-[45px]  cursor-pointer

                ${
                  billingCycle === "monthly"
                    ? "bg-[#00B7C1] rounded-3xl text-white"
                    : "bg-white dark:bg-dark text-black dark:text-white hover:!bg-white dark:hover:!bg-dark hover:!text-black dark:hover:!text-white"
                }`}
          >
            Monthly
          </Button>
          <Button
            onClick={() => setBillingCycle("yearly")}
            className={`w-[130px] text-white  shadow-none  rounded-3xl  capitalize h-[45px]    cursor-pointer

                ${
                  billingCycle === "yearly"
                    ? "bg-[#00B7C1]   rounded-3xl      text-white "
                    : "bg-white dark:bg-dark text-black dark:text-white hover:!bg-white dark:!bg-dark hover:!text-black dark:hover:!text-white"
                }`}
          >
            yearly
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PricingHeader;
