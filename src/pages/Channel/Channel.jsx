import "./Channel.scss"
import Sidebar from "../../components/Sidebar/Sidebar";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";

function Channel() {
    const {movie, setMovie} = useContext(Context)
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(res=> res.json())
        .then(date=> setVideos(date.filter((v) => v.albumId === movie)))
    },[])

    return(
        <div className="channel">
            <Sidebar></Sidebar>
            {videos.length > 0 && (
                <div>
                    <div className="channel-poster">{movie} - channel</div>
                    <div className="channel-sub__poster"><span>{movie}</span> - channel</div>
                    <ul className="channel-list">
                    {videos.map((video)=>(
                        <Link to="/video" key={video.id} onClick={()=>{
                            setMovie(video.id)
                            window.localStorage.setItem("aId", video.albumId)
                            window.localStorage.setItem("vId", video.id)
                            }}>
                            <li className="channel-list__item" key={video.id}>
                                <div>
                                <h2>{video.albumId} - channel</h2>
                                <h4>{video.id} - video</h4>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
                </div>
            )}
        </div>
    )
}
export default Channel;