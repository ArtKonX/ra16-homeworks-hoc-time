import Video from "./Video";

function VideoList(props: { list: Video[] }) {
    return (
        <ul className="videos-list">
            {props.list.map((item, indx) => (<li key={indx} className="video-elem"><Video url={item.url} date={item.date} /></li>))}
        </ul>)
}

export default VideoList