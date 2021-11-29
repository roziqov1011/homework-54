import {  useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { VidContext } from "../../context/VidContext";
import "./VideoItem.scss"

function VideoItem() {
    const {movies, setMovies} = useContext(VidContext)
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(res=> res.json())
        .then(date=> setVideos(date.filter((v) => v.albumId == window.localStorage.getItem("aId"))))
    },[])
    return(
        <div className="videoItem">
            {videos.length > 0 && (
                <ul className="videoItem-list">
                    {videos.map((v)=>(
                        <Link to="/video" key={Math.random()} onClick={()=>{
                            setMovies(v.id)
                            window.localStorage.setItem("aId", v.albumId)
                            window.localStorage.setItem("vId", v.id)
                            }}>
                            <li className="videoItem-list__item" key={v.id}>
                                <h6>{v.albumId} - channel</h6>
                                <h3>{v.id} - video</h3>
                            </li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    )
}
export default VideoItem;