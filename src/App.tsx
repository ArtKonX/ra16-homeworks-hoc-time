import { useState } from "react";
import VideoList from "./components/VideoList";

import './App.css';

import videos from '../data/videos.json';

export default function App() {
    const [list] = useState<Video[]>(videos);

    return (
        <VideoList list={list} />
    );
}