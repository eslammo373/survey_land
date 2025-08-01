import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/UI/card"

import {cardData} from '@/utils/data'
export default function CardComp() {


    return <>
        
        {cardData.map((card, i) => (
            
            <Card
                key={i}
                className="dark:bg-dark  rounded-xl border-0 py-10 px-8 [box-shadow:0_4px_16px_#00000814]  gap-3 transition-transform duration-300 hover:translate-y-2"
            >
            <CardHeader>
                    <CardTitle className={``}>
                        <h4 className="text-primryBtn font-poppins font-semibold text-lg">

                        {card.title}
                        </h4>
                    </CardTitle>
            </CardHeader>
            <CardContent>
                    <p className="text-grayDark  text-grayText leading-6 ">{ card.content}</p>
            </CardContent>
        </Card>
        ))}

    </>
}
