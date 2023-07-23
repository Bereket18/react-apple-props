import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function YoutubeApi() {
	const [youTubeVideos, setYouTubeVideos] = useState([]);
	useEffect(() => {
		fetch(
			// `https://www.googleapis.com/youtube/v3/search?key=${AIzaSyCNVXb1E-DA92AcpbsK0QcUsyXW8XlqLTE}&channelId=${process.env.REACT_APP_CHANNEL_ID}&part=snippet,id&order=date&maxResults=6`
			`https://youtube.googleapis.com/youtube/v3/search?part=snippet%2Cid&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyCNVXb1E-DA92AcpbsK0QcUsyXW8XlqLTE`
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				const videos = data.items;
				setYouTubeVideos(videos);
			});
	}, []);
	console.log(youTubeVideos);
	return (
		<div className="allVideosWrapper">
			<div className="container">
				<div className="row h-100 align-items-center justify-content-center text-center">
					<div className="col-12">
						<div className="title-wraper bold video-title-wrapper">
							Latest Videos
						</div>
					</div>
					{/* "?" optional chaining- if you get the data map otherwise ignore it */}
					{youTubeVideos?.map((singleVideo, i) => {
						let vidId = singleVideo.id.videoId;
						let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
						let videoWrapper = (
							<div key={i} className="col-sm-12 col-md-4">
								<div className="singleVideoWrapper">
									<div className="videoThumbnail">
										<Link to={vidLink} target="_blank" rel="noreferrer">
											<img
												src={singleVideo.snippet.thumbnails.high.url}
												alt="youtube"
											/>
										</Link>
									</div>
									<div className="videoInfoWrapper">
										<div className="videoTitle">
											<Link to={vidLink} target="_blank" rel="noreferrer">
												{singleVideo.snippet.title}
											</Link>
										</div>
										<div className="videoDesc">
											{singleVideo.snippet.description}
										</div>
									</div>
								</div>
							</div>
						);
						return videoWrapper;
					})}

					{/* {this.videoWrapper} */}
				</div>
			</div>
		</div>
	);
}

export default YoutubeApi;
