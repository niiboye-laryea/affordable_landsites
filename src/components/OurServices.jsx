import { Button } from "./ui/button"

const OurServices = () => {
    return (<>
        <div className="bg-sky-50 text-center pt-10">
            <p className="text-4xl font-bold text-sky-500">What we offer</p>
            <div className="grid grid-rows-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 px-10 pt-10">
                <div className="border-1 p-10 bg-white">
                    <div>
                        <p className="text-3xl font-bold border-b-1 border-sky-200 mb-8 pb-5">Lands</p>
                    </div>
                    <div>
                        <p className="text-[22px]">
                            Our lands are situated at <span className="font-bold">vantage points</span>, devoid of litigation issues, and the prices, so 
                            affordable that you could buy stacks of pieces of land. 
                        </p>
                    </div>
                    <div >
                        <section className="mt-10">
                            <Button size="lg" className="bg-sky-500 font-bold w-full text-[15px] px-20 md:text-[18px] lg:text-[18px] xl:text-[18px] cursor-pointer">GET IN TOUCH</Button>
                        </section>
                    </div>
                </div>
                <div className="border-1 p-10 bg-white">
                    <p className="text-3xl font-bold border-b-1 border-sky-200 mb-8 pb-3">Architectural Designs</p>
                    <p className="text-[22px]">
                        Perfectly turning your building ideas into <span>aesthetically pleasing</span> 
                        arhitectural designs is also our thing. Oh, YES! And this doesn't cost much; so so affordable.
                        Just bring all your building ideas and witness our magic.

                        <section className="mt-10">
                            <Button size="lg" className="bg-sky-500 font-bold w-full text-[15px] px-20 md:text-[18px] lg:text-[18px] xl:text-[18px] cursor-pointer">GET IN TOUCH</Button>
                        </section>
                    </p>
                </div>
                <div className="border-1 p-10 bg-white">
                    <p className="text-3xl font-bold border-b-1 border-sky-200 mb-8 pb-3">Surveying</p>
                </div>
            </div>
        </div>
    </>)
}

export default OurServices