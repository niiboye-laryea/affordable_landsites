import { Star } from "lucide-react";

const Testimonials = () => {
    return (<>
        <div className="w-full pt-20 px-10 text-center">
            <p className="font-bold text-5xl text-sky-500">What our customers say</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 pb-20 mt-15">
                <div className="testimonies grid grid-cols-1 text-center">
                    <div>
                        <img src="/profile_pictures/profile-1.jpg" alt="profile picture" className="profile" />
                        <p className="font-bold text-[18px] mt-3">Joshua</p>
                        <p className="flex flex-row justify-center gap-3 p-3 mr-auto ml-auto">
                            <Star className="w-5 h-5 text-green-500 fill-green-500" />
                            <Star className="w-5 h-5 text-green-500 fill-green-500" />
                            <Star className="w-5 h-5 text-green-500 fill-green-500" />
                            <Star className="w-5 h-5 text-green-500 fill-green-500" />
                            <Star className="w-5 h-5 text-green-500 fill-green-500" />
                        </p>
                    </div>
                    <div>
                        <p className="px-10 text-[20px]">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta repellendus 
                            totam nam incidunt id praesentium et explicabo voluptates maiores quos sequi 
                            sunt error quibusdam porro, maxime vero beatae consequuntur nihil.
                        </p>
                    </div>
                </div>
                <div className="testimonies grid grid-cols-1 text-center">
                    <div>
                        <img src="/profile_pictures/profile-2.jpg" alt="profile picture" className="profile" />
                        <p className="font-bold text-[18px] mt-3">Micky</p>
                        <p className="flex flex-row justify-center gap-3 p-3 mr-auto ml-auto">
                            <Star className="w-5 h-5 text-green-500 fill-green-500" />
                            <Star className="w-5 h-5 text-green-500 fill-green-500" />
                            <Star className="w-5 h-5 text-green-500 fill-green-500" />
                            <Star className="w-5 h-5" />
                            <Star className="w-5 h-5" />
                        </p>
                    </div>
                    <div>
                        <p className="px-10 text-[20px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam possimus expedita, 
                            at, similique aut illo molestiae repellat eum neque tempora quidem quis nesciunt. 
                            Soluta expedita temporibus quasi dolore debitis consectetur.
                        </p>
                    </div>
                </div>
                <div className="testimonies grid grid-cols-1 text-center">
                    <div>
                        <img src="/profile_pictures/profile-3.jpg" alt="profile picture" className="profile" />
                        <p className="mt-3 font-bold text-[18px]">Bismark</p>
                        <p className="flex flex-row justify-center gap-3 p-3 mr-auto ml-auto">
                            <Star className="w-5 h-5 text-green-500 fill-green-500" />
                            <Star className="w-5 h-5 text-green-500 fill-green-500" />
                            <Star className="w-5 h-5 text-green-500 fill-green-500" />
                            <Star className="w-5 h-5 text-green-500 fill-green-500" />
                            <Star className="w-5 h-5 text-green-500 fill-green-500" />
                        </p>
                    </div>
                    <div>
                        <p className="px-10 text-[20px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, maxime accusantium! 
                            Unde id ducimus voluptatibus. Molestias quo harum sunt magnam! Perferendis, ullam est. 
                            Quod at veniam ratione asperiores iste modi?
                        </p>
                    </div>
                </div>
                <div className="testimonies grid grid-cols-1 text-center">
                    <div>
                        <img src="/profile_pictures/profile-4.jpg" alt="profile picture" className="profile" />
                        <p className="mt-3 font-bold text-[18px]">Judith</p>
                        <p className="flex flex-row justify-center gap-3 p-3 mr-auto ml-auto">
                            <Star className="w-5 h-5 text-green-500 fill-green-500" />
                            <Star className="w-5 h-5 text-green-500 fill-green-500" />
                            <Star className="w-5 h-5 text-green-500 fill-green-500" />
                            <Star className="w-5 h-5 text-green-500 fill-green-500" />
                            <Star className="w-5 h-5 text-green-500 fill-green-500" />
                        </p>
                    </div>
                    <div>
                        <p className="px-10 text-[20px]">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui officia autem dolore 
                            maxime inventore ullam sit. Iure incidunt quasi culpa porro aut maiores autem aliquid, 
                            voluptatem temporibus, sequi inventore blanditiis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Testimonials;