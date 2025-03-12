import { Button } from "./ui/button"

const OurServices = () => {
    return (<>
        <div className="grid grid-rows-3 items-center md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3
         bg-gray-50 px-10 text-center gap-2 pt-10">
            <div className="border-1 p-10 bg-white">
                <p className="text-3xl font-bold text-sky-500 border-b-1 border-sky-200 mb-5 pb-3">Lands</p>
                <p className="text-[22px]">
                    Our lands are situated at vantage points, devoid of litigation issues, and the prices, so 
                    affordable that you could buy stacks of pieces of land. 

                    <section className="mt-10">
                        <Button size="lg" className="bg-sky-500 font-bold w-full text-[15px] px-20 md:text-[18px] lg:text-[18px] xl:text-[18px] cursor-pointer">GET IN TOUCH</Button>
                    </section>
                </p>
            </div>
            <div className="border-1 p-10 bg-white">
                <p className="text-3xl font-bold text-sky-500 border-b-1 border-sky-200 pb-3">Architectural Designs</p>
            </div>
            <div className="border-1 p-10 bg-white">
                <p className="text-3xl font-bold text-sky-500 border-b-1 border-sky-200 pb-3">Surveying</p>
            </div>
        </div>
    </>)
}

export default OurServices