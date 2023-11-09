const YOUTUBE_API_KEY = "AIzaSyC0UFgl5a4CmTucspk4JLVICNMBFD0TJRE";

const baseUrl = "https://youtube.googleapis.com/youtube/v3";

// const url="https://youtube-v31.p.rapidapi.com"

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'a42ec88b2amsh123640a96506b09p1c2027jsnaf92d7010eea',
// 		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
// 	}
// };

// export const getSearchResults = async (query)=>{
//     let searchResults;

//     let response =await fetch(`https://youtube-v31.p.rapidapi.com/search?q=${query}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`, options);

//     searchResults = await response.json();
//     return searchResults;
// }


export const getSearchResults = async (query)=>{
    let searchResults;

    let response = await fetch(`${baseUrl}/search?part=snippet&q=${query}&maxResults=50&key=${YOUTUBE_API_KEY}`)
    searchResults = await response.json();
    return searchResults;
}

export const getChannel = async (channelId)=>{
    let channelDetails;

    let response = await fetch(`${baseUrl}/channels?part=snippet&id=${channelId}&key=${YOUTUBE_API_KEY}`)
    channelDetails = await response.json();
    return channelDetails;
}

export const getChannelVideos = async (channelId)=>{
    let channelVideos;

    let response = await fetch(`${baseUrl}/search?part=snippet&channelId=${channelId}&maxResults=50&key=${YOUTUBE_API_KEY}`)
    channelVideos = await response.json();
    return channelVideos;
}

export const getVideo = async(videoId)=>{
    let video;

    let response = await fetch(`${baseUrl}/videos?part=snippet,statistics&id=${videoId}&key=${YOUTUBE_API_KEY}`)
    video = await response.json();
    return video;
}

export const getRelatedVideos = async(videoId)=>{
    let relatedVideos;

    let response = await fetch(`${baseUrl}/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=50&key=${YOUTUBE_API_KEY}`)
    relatedVideos = await response.json();
    return relatedVideos;
}

export const getSubscribers = async(channelId)=>{
    let videoData;

    let response = await fetch(`${baseUrl}/channels?part=statistics&id=${channelId}&key=${YOUTUBE_API_KEY}`)
    videoData = await response.json();
    return videoData;
}