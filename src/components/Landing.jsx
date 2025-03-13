import { Button } from "react-bootstrap"

var Landing = () => {
    return (<>
        <div className="h-auto w-full pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-center py-10 px-10">
                <div className="flex flex-col items-center text-center w-full px-10">
                    <p className="w-fit font-bold text-grey-900 text-5xl md:text-6xl lg:text-7xl mb-5">
                        <span className="bg-sky-500 text-white px-3 mr-2">Affordable</span>
                        lands at various sites.
                    </p>
                    <p className="text-[22px] md:lg:xl:text-[30px]">
                        <span className="font-bold">Shanton Peaceful Home</span> got your back, should you need a 
                        <span className="text-sky-500 font-bold"> litigation-free land! </span> Visit any of our
                        offices to make your purchase today!  
                    </p>
                </div>
                <div className="w-auto">
                    <img src="/land_sites/land1.jpg" alt="site-1" className="mr-auto ml-auto" />
                </div>
                <div className="w-full lg:col-span-2">
                    <section className="w-full">
                        <Button size="md" variant="primary" className="bg-sky-500 w-full md:w-80 font-bold text-[15px] px-20 md:text-[18px] lg:text-[18px] xl:text-[18px] cursor-pointer">GET IN TOUCH</Button>
                    </section>
                </div>
            </div>
        </div>
    </>)
}

export default Landing