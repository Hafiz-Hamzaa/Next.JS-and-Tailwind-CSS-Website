import Nav from "../components/page"
export default async function Testimonial(){
    await new Promise((res)=>{
        setTimeout(res,8000)
    })
    return(
        <div className="bg-[url('https://img.freepik.com/free-photo/empire-state-building-night_23-2150897730.jpg?ga=GA1.1.904921068.1702209666&semt=ais_hybrid')] bg-cover h-screen">
            <Nav/>
            <h2 className="text-center text-white  text-4xl mt-8">Testimonials</h2>
            <p className=" text-white font-semibold text-center mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nemo necessitatibus, iusto unde quo praesentium.
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ut distinctio cum?
            </p>

            <div className="flex justify-evenly mt-8">
                <div className="bg-[url('https://img.freepik.com/premium-photo/young-handsome-man-wearing-casual-tshirt_1296789-2.jpg?ga=GA1.1.904921068.1702209666&semt=ais_hybrid')] bg-cover  w-32 h-32 border-2 border-black rounded-full"></div>
                <div className="bg-[url('https://img.freepik.com/premium-photo/paper-sculpture-made-by-paper-elephant-generative-ia_1286397-994.jpg?ga=GA1.1.904921068.1702209666&semt=ais_hybrid')] bg-cover  w-32 h-32 border-2 border-black rounded-full"></div>
                <div className="bg-[url('https://img.freepik.com/premium-photo/hypnotist-swinging-pocket-watch-world-hypnotism-day_1198884-52688.jpg?ga=GA1.1.904921068.1702209666&semt=ais_hybrid')] bg-cover w-32 h-32 border-2 border-black rounded-full"></div>
            </div>

            <div className=" text-white flex justify-around mt-8">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing . <br />
                ipsum dolor sit amet, consectetur adipisicing .
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing. <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur. <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
        </div>
        </div>
    )
}