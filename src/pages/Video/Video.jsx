import { useContext, useEffect, useState } from "react";
import VideoItem from "../../components/VideoItem/VideoItem";
import { Context } from "../../context/Context";
import { VidContext } from "../../context/VidContext";
import "./Video.scss"

function Video() {
    const {movies, setMovies} = useContext(VidContext)
    const {movie, setMovie} = useContext(Context)
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(res=> res.json())
        .then(date=> setVideos(date.filter((v) => v.id === movie )))
    },[])
    console.log(movie,movie);
    return(
        <div className="video">
            {videos.length > 0 && (
                <ul className="video-list">
                    {videos.map((v)=>(
                            <li className="video-list__item" key={v.id}>
                                <h5>{movie} - channel</h5>
                                <h2>{movies} - video</h2>
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