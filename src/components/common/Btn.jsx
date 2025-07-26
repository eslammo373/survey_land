import { Button } from "@/components/UI/button"
export default function Btn({text}) {
    return <>
        <Button className={`bg-main text-xs md:text-[16px] w-40 lg:w-52 py-3 px-5 rounded-xl text-gray-200 font-medium leading-8 capitalize hover:bg-secondary`} >{text}</Button>
    </>
}
