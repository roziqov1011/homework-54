import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import Favourites from "../../Lib/Favourites";
import Games from "../../Lib/Games";
import Histor from "../../Lib/History";
import Home from "../../Lib/Home";
import Library from "../../Lib/Library";
import Likedvideos from "../../Lib/Likedvideos";
import Music from "../../Lib/Music";
import Subscriptions from "../../Lib/Subscriptions";
import Trending from "../../Lib/Trending";
import Watchlater from "../../Lib/Watchlater";
import "./Sidebar.scss"

function Sidebar() {
    const array = [];
    const {movie, setMovie} = useContext(Context)
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then(res=> res.json())
    .then(date=> setVideos(date))
    },[])
    videos.map((vid)=>{
    array.push(vid.albumId)
    })
    const arr = [...new Set(array)];
    return(
    <div className="sidebar">
        <ul className="sidebar-icon__list">
            <li>
            <Home></Home>                <span>lorem</span>
            </li>
            <li>
            <Trending></Trending>
                <span>lorem</span>
            </li>
            <li>
                <Subscriptions></Subscriptions>
                <span>lorem</span>
            </li>
        </ul>
        <ul className="sidebar-icon__list">
            <li>
                <Library></Library>
                <span>lorem</span>
            </li>
            <li>
                <Histor></Histor>
                <span>lorem</span>
            </li>
            <li>
                <Watchlater></Watchlater>
                <span>lorem</span>
            </li>
            <li>
                <Favourites></Favourites>
                <span>lorem</span>
            </li>
            <li>
                <Likedvideos></Likedvideos>
                <span>lorem</span>
            </li>
            <li>
                <Music></Music>
                <span>lorem</span>
            </li>
            <li>
                <Games></Games>
                <span>lorem</span>
            </li>
        </ul>
        <h3 className="sidebar-content__title">Subscriptions</h3>
        {arr.length > 0 && (<ul className="sidebar-content__list">
            {arr.map((chanelId)=>(
            <li className="sidebar-content__list__item" key={chanelId}>
                <Link to="/channel" key={Math.random()} onClick={()=>{setMovie(chanelId)}}>
                <p>{chanelId}<span>- channel</span></p>
                </Link>
            </li>
            ))}
        </ul>)}
    </div>
    )
}
export default Sidebar;