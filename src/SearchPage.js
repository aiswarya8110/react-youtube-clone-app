import React, { useEffect, useState } from 'react';
import './SearchPage.css';
import VideoRow from './VideoRow';
import { useParams } from 'react-router-dom';
import { getSearchResults } from './youtube';

function SearchPage(){
    const [searchedVideos, setSearchedVideos] = useState([]);
    const { searchValue } = useParams();

    useEffect(()=>{
        getSearchResults(searchValue)
        .then(searchResults =>{
            setSearchedVideos(searchResults.items);
        }).catch((error)=> console.log(error))
    },[])

    return (
        <div className="searchPage">
            {
                searchedVideos?.map((video)=>{
                    const { channelTitle, title, description, thumbnails, publishedAt } = video.snippet;
                    const { videoId } = video.id;
                    return (
                    <VideoRow
                    key={publishedAt}
                    channel={channelTitle}
                    title={title}
                    description={description}
                    image={thumbnails.medium.url}
                    videoId={videoId}
                    publishedAt={publishedAt}/>
                    )
            })
            }
        </div>
    )
}

export default SearchPage;