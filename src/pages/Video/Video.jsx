import { useContext, useEffect, useState } from "react";
import VideoItem from "../../components/VideoItem/VideoItem";
import { Context } from "../../context/Context";
import "./Video.scss"

function Video() {
    const {movie, setMovie} = useContext(Context)
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(res=> res.json())
        .then(date=> setVideos(date.filter((v) => v.id === movie )))
    },[])
    
    return(
        <div className="video">
            {videos.length > 0 && (
                <ul className="video-list">
                    {videos.map((v)=>(
                            <li className="video-list__item" key={v.id}>
                                <h5>{v.albumId} - channel</h5>
                                <h2>{v.id} - video</h2>
                                <p>{v.title}</p>
                            </li>
                    ))}
                </ul>

            )}
            <VideoItem></VideoItem>
        </div>
    )
}
export default Video;