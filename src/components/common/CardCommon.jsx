import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/UI/card"
import Btn from "./Btn"

export default function CardCommon({ items }) {
    return (
        <>
            {items?.map((item, i) => (
                <Card
                    key={i}
                    className="w-[250px] p-[20px] bg-white dark:bg-secondaryDark  lg:w-[300px] lg:h-[440px] border-0 ms-2 [box-shadow:0_4px_16px_#00000814 flex-shrink-0 flex flex-col  justify-between "
                >
                    <CardHeader className="text-center">
                    {item.img && (
                            <img
                                src={item.img}
                                alt={item.title || "item"}
                                className="w-[200px] md:w-[280px] h-[200px] rounded-xl object-cover mx-auto"
                            />
                        )}

                        <CardTitle className="mt-4  dark:text-light text-lg font-semibold font-poppins">
                            {item.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-sm  text-gray-600 dark:text-grayDark font-medium  ">
                        <p>{item.content}</p>
                    </CardContent>
                    <CardFooter className="flex justify-center items-center">
                        <Btn text={'Use Template'} />
                    </CardFooter>
                </Card>
            ))}
        </>
    )
}
