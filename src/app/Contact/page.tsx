import Nav from "../components/page"
export default function Contact(){
    return(
        <div className="bg-[url('https://img.freepik.com/premium-photo/modern-buildings-against-sky_636537-275702.jpg?ga=GA1.1.904921068.1702209666&semt=ais_hybrid')] bg-cover h-screen">
            <Nav/>
            <h1 className=" mt-6 text-center text-white text-6xl">Contact</h1>
            <p className="text-xl mt-6 text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci libero provident quasi saepe ipsa sequi.
                Lorem ipsum dolor sit amet consectetur adipisicing. <br />  Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>

            <form action="./action.php" className="text-center mt-6">
                <input type="text" placeholder="Name" className="pl-2 mb-2 h-22 w-96 border-4 border-solid border-black" /><br />
                <input type="text" placeholder="Email" className="pl-2 mb-2 h-22 w-96 border-4 border-solid border-black" /> <br />
                <input type="text" placeholder="Message" className="text-left pb-36 pl-2 w-96 h-44 border-4 border-solid border-black"></input> <br />
                <button className="border-4 border-solid border-blue-800 w-32 h-7 mt-2 text-black font-bold ">Submit</button>
            </form>
        </div>
    )
}