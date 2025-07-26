import CardCommon from '@/components/common/CardCommon'
import { cardDetails } from '@/utils/data'
import * as Icons from '@/assets/icons/Icons';
import Btn from '@/components/common/Btn';
export default function Templets() {


    return (
        <section className='dark:bg-dark py-[50px]'>
            <div className="container mx-auto px-8 ">
                <div className='grid grid-cols-1 gap-6'>
                    <h3 className="font-poppins font-semibold text-3xl capitalize leading-13">Popular  <span className="text-main">Templates</span> </h3>

                    {/* Scroll container with fixed max width */}

                    <div className='list-decimal font-poppins font-semibold text-base lg:text-2xl leading-8 '>
                        <div className=''>
                            <div className=' flex justify-between'>

                                <h4 className='font-poppins font-semibold text-sm md:text-xl lg:text-2xl '>Customer Feedback <span className='text-main'>Surveys</span> </h4>

                                <div className='flex items-center justify-center w-20 lg:w-40'>


                                        <p className='text-sm lg:text-xl font-medium font-inter flex items-center'>view all
                                        </p>
                                            <Icons.FaArrowRight className='font-inter ml-[5px]  font-normal text-[15px] text-dark dark:text-light' />
                                </div>
                            </div>

                    <div className="overflow-x-auto scrollbar-hide max-w-full  ">
                        <div className="flex flex-nowrap gap-10 my-9  ">
                            <CardCommon items={cardDetails.feedBack} />
                        </div>
                    </div>
                        </div>
                        <div>
                            <div className=' flex justify-between'>

                                <h4 className='font-poppins font-semibold text-sm  md:text-xl lg:text-2xl '>Market  <span className='text-main'>Research</span> </h4>
                                <div className='flex items-center justify-center w-20 lg:w-40'>


                                    <p className='text-sm lg:text-xl font-medium font-inter flex items-center'>view all
                                    </p>
                                    <Icons.FaArrowRight className='font-inter  font-normal  ml-[5px] text-[15px] text-dark dark:text-light' />
                                </div>
                            </div>
                            <div className="overflow-x-auto scrollbar-hide max-w-full ">
                                <div className="flex flex-nowrap gap-10 my-9">
                                    <CardCommon items={cardDetails.market} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=' flex justify-between'>

                                <h4 className='font-poppins font-semibold text-sm  md:text-xl lg:text-2xl '>Education & <span className='text-main'>Training</span> </h4>
                                <div className='flex items-center justify-center w-20 lg:w-40'>


                                    <p className='text-sm lg:text-xl font-medium font-inter flex items-center'>view all
                                    </p>
                                    <Icons.FaArrowRight className='font-inter  font-normal ml-[5px] text-[15px] text-dark dark:text-light' />
                                </div>
                            </div>
                            <div className="overflow-x-auto scrollbar-hide max-w-full ">
                                <div className="flex flex-nowrap gap-10 my-9">
                                    <CardCommon items={cardDetails.education} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=' flex justify-between'>

                                <h4 className='font-poppins font-semibold text-sm  md:text-xl lg:text-2xl '> Event <span className='text-main'>Feedback</span> </h4>
                                <div className='flex items-center justify-center w-20 lg:w-40'>


                                    <p className='text-sm lg:text-xl font-medium font-inter flex items-center'>view all
                                    </p>
                                    <Icons.FaArrowRight className='font-inter  font-normal  ml-[5px] text-[15px] text-dark dark:text-light' />
                                </div>
                            </div>
                            <div className="overflow-x-auto scrollbar-hide max-w-full ">
                                <div className="flex flex-nowrap gap-10 my-9">
                                    <CardCommon items={cardDetails.events} />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className=' flex items-center justify-center mt-5'>

                    <Btn text={'View All Templates'}/>
                    </div>

                </div>
            </div>
        </section>

    )
}
