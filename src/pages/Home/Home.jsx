import "./Home.scss"
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";

function Home() {
    const array = [];
    const {movie, setMovie} = useContext(Context);
    console.log(movie);
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then(res=> res.json())
    .then(date=> setVideos(date))
    },[])
    videos.map((vid) => {
    array.push(vid.albumId)
    })
    const arr = [...new Set(array)];



    return(
    <div className="home">
        <Sidebar></Sidebar>
        <div className="home-content">
            {arr.length > 0 && (<ul className="home-content__list">
                {arr.map((chanelId)=>(
                <li className="home-content__list__item" key={chanelId}>
                    <Link className="channel-name" to="/channel" key={Math.random()} onClick={()=>{setMovie(chanelId)}}>
                    <h3 >{chanelId}<span> -channel</span></h3>
                    </Link>
                    {videos.length > 0 && (
                    <ul className="home-content__block" key={chanelId}>
                        {videos.filter((v)=>v.albumId === chanelId).map((video)=>(
                        <Link className="video-name" to="/video" key={video.id} onClick={()=>{
                            setMovie(video.id)
                            window.localStorage.setItem("aId", video.albumId)
                            window.localStorage.setItem("vId", video.id)
                            }}>
                        <li key={video.id}>
                            <h4>{video.id} -video</h4>
                            <img src={video.url} alt="" width="200" height="100" />
                            {/* <p>{video.title}</p> */}
                        </li>
                        </Link>
                        ))}
                    </ul>
                    )}
                </li>
                ))}
            </ul>)}
        </div>
    </div>
    )
}
export default Home;