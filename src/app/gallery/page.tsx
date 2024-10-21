import Nav from "../components/page"
export default function Gallery(){
    return(
        <div>
            <Nav/>
            <h2 className="text-center text-4xl mt-8">Gallery</h2>
            <p className="font-semibold text-center mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nemo necessitatibus, iusto unde quo praesentium.
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ut distinctio cum?
            </p>

            <div className="flex justify-around mt-12 flex-wrap">
                <div className="h-56 w-52 border-2  border-solid bg-[url('https://img.freepik.com/free-photo/futuristic-business-building-architecture_23-2151003670.jpg?ga=GA1.1.904921068.1702209666&semt=ais_hybrid')] bg-cover"></div>
                <div className="h-56 w-52 border-2  border-solid bg-[url('https://img.freepik.com/free-photo/empire-state-building-night_23-2150897730.jpg?ga=GA1.1.904921068.1702209666&semt=ais_hybrid')] bg-cover"></div>
                <div className="h-56 w-52 border-2  border-solid bg-[url('https://img.freepik.com/free-photo/empire-state-building-night-time_23-2150699519.jpg?ga=GA1.1.904921068.1702209666&semt=ais_hybrid')] bg-cover"></div>
                <div className="h-56 w-52 border-2  border-solid bg-[url('https://img.freepik.com/premium-photo/building-with-large-glass-front-that-says-st-louis_1103290-58099.jpg?ga=GA1.1.904921068.1702209666&semt=ais_hybrid')] bg-cover"></div>
                <div className="h-56 w-52 border-2  border-solid bg-[url('https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896782.jpg?ga=GA1.1.904921068.1702209666&semt=ais_hybrid')] bg-cover"></div>
            </div>
        </div>
    )
}