import React from 'react';

const VideoListItem = ({video}) => {
  //const video = props.video can be pulled in the argument itself by {video
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
            <img className="media-ojbject" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
