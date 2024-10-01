import { Link } from "react-router-dom"
import error404 from "../assets/404purp.png"

const NoFound = () => {
  return (
    <div className="error-page">
        <p>Ooops.. This page doesn't exist. </p>
        <div> Go back to <Link to="/">Home</Link></div>
        <img className="error-img" src={error404} alt="error 404"></img>

    </div>
  )
}

export default NoFound
