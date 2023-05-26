import { Link } from "react-router-dom";

import * as channelService from "../services/channelService";
import { useEffect, useState } from "react";
function Card(props) {
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    const fetchApi = async () => {
      const res = await channelService.channel(props.data.snippet.channelId);
      setAvatar(res.snippet.thumbnails.default.url);
    };
    fetchApi();
  }, [props.data]);
  return (
    <div className="w-full h-auto flex gap-3 flex-col">
      <div className="relative">
        <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
          {props.data.videoDuration}
        </span>
        <Link to={`/watch/${props.data.id}`}>
          <img
            src={props.data.snippet.thumbnails.medium.url}
            className="h-[193px] w-full"
            alt="thumbnail"
          />
        </Link>
      </div>
      <div className="flex gap-2 " >
        <div className="min-w-fit">
          <a href="#">
            <img src={avatar} alt="channel" className="h-9 w-9 rounded-full" />
          </a>
        </div>
        <div>
          <h3>
          <Link to={`/watch/${props.data.id}`} className="line-clamp-2">
              {props.data.snippet.title}
          </Link>
          </h3>
          <div className="text-sm text-gray-400">
            <div>
              <a href="#" className="hover:text-zinc-500">
                {props.data.snippet.channelTitle}
              </a>
            </div>
            <div>
              <span className="after:content-['•'] after:mx-1">
                {props.data.statistics.viewCount} views
              </span>
              <span>{props.data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
