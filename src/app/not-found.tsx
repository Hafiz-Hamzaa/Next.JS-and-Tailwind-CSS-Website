import './not-found.css'
export default function Notfound(){
    return(
        <div>
        <h2>Oops!</h2>
        <p>We can't seem to find the page <br /> you'are looking for.</p>
        <p className='code'>Error Code : 404</p>
        <img src="https://img.freepik.com/free-vector/404-error-with-portals-concept-illustration_114360-28346.jpg?ga=GA1.1.904921068.1702209666&semt=ais_hybrid" alt="" />
    </div>
    )
}