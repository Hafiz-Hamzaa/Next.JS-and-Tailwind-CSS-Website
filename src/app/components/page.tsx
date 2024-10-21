import Link from "next/link"
export default function Nav(){
    return(
        <div>
            <div className="  flex justify-between items-center h-20">
            <span className="text-2xl font-bold text-balance text-white pl-6">Infinite Loop</span>
            <div className="pr-6 text-white">
                <a className="mr-6 text-xl" href="/">Home</a>
                <a className="mr-6 text-xl" href="/whatwedo">What We Do</a>
                <a className="mr-6 text-xl" href="/testimonials">Testimonials</a>
                <a className="mr-6 text-xl" href="/gallery">Gallery</a>
                <a className="mr-6 text-xl" href="/Contact">Contact</a>
            </div>
            </div>
        </div>
    )
}