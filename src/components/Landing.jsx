import { Button } from "./ui/button"

var Landing = () => {
    return (<>
        <div className="h-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-3 text-center py-10">
                <div className="flex flex-col items-center text-center w-full p-10">
                    <p className="w-fit font-bold text-grey-900 text-5xl md:text-6xl lg:text-7xl">
                        <span className="bg-sky-500 text-white px-5 mr-2">Affordable</span>
                        lands at various sites.
                    </p>
                    <p className="mt-10 text-[22px] md:lg:xl:text-[30px]">
                        <span className="font-bold">Shanton Peaceful Home</span> got your back, should you need a 
                        <span className="text-sky-500 font-bold"> litigation-free land! </span> Visit any of our
                        offices to make your purchase today!  
                    </p>

                    <section className="mt-10 mb-10">
                        <p>
                            <Button size="lg" className="bg-sky-500 w-full font-bold text-[15px] px-20 md:text-[18px] lg:text-[18px] xl:text-[18px] cursor-pointer">GET IN TOUCH</Button>
                        </p>
                    </section>
                </div>
                <div className="w-fit px-10">
                    <img src="/land_sites/land1.jpg" alt="site-1" />
                </div>
            </div>
        </div>
    </>)
}

export default Landing