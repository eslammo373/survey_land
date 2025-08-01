import CardComp from "./CardComp/CardComp";

export default function HowItWorks() {
    return <>
        <section className="  p-[80px] md:mt-0 dark:bg-secondaryDark">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center text-center">

                    <div className="mb-[30px]">
                        <h3 className="font-poppins text-dark dark:text-light font-semibold text-3xl capitalize leading-13">How It <span className="text-main">Works</span> </h3>
                        <p className="text-grayLight  dark:text-grayDark text-lg leading-8 font-medium">Get started in just 3 simple steps</p>
                    </div>
                    <div className=" flex flex-col lg:flex-row gap-10 mt-4">
                        <CardComp/>
                    </div>

                </div>
            </div>
      </section>
  
  </>
}
