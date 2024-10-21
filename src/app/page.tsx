import Nav from "./components/page"
export default function Home(){
    return(
        <div className="bg-[url('https://img.freepik.com/premium-photo/striking-black-white-architectural-photography-dramatic-modern-highquality-realistic_1310094-48370.jpg?ga=GA1.1.904921068.1702209666&semt=ais_hybrid')] bg-cover h-screen">
            <Nav/>
            <h3 className="text-5xl text-center mt-32 text-white">Infinite Loops</h3>
            <p className="text-center mt-8 text-white">Tailwind CSS Framework . It's provide utility classses.
            <br /> Free Webpage Template by TOOLKIT
            </p>
            <div className="rounded-md m-auto flex justify-center items-center h-12 w-14 border-2 border-solid border-white mt-4">
            <span className="h-6">&#8595;</span>
            </div>
        </div>
    )
}