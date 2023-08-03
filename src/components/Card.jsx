import { Link } from "react-router-dom";

import * as channelService from "../services/channelService";
import { useEffect, useState } from "react";
function Card(props) {
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    const fetchApi = async () => {
      const res = await channelService.channel(props.data.snippet.channelId);
      setAvatar(res.snippet.thumbnails.high.url);
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
            style={{ imageRendering: "pixelated" }}
            src={props.data.snippet.thumbnails.standard.url}
            className="h-[193px] w-full object-cover rounded-2xl"
            alt="thumbnail"
          />
        </Link>
      </div>
      <div className="flex gap-2 ">
        <div className="min-w-fit">
          <Link href="#">
            <img src={avatar} alt="channel" className="h-[36px] w-[36px] object-cover rounded-full" />
          </Link>
        </div>
        <div>
          <h3>
            <Link to={`/watch/${props.data.id}`} className="text-[16px] font-bold line-clamp-2">
              {props.data.snippet.title}
            </Link>
          </h3>
          <div className="text-[13px] text-[#858484] ">
            <div>
              <Link href="#" className=" hover:text-zinc-500">
                {props.data.snippet.channelTitle}
              </Link>
            </div>
            <div>
              <span className="after:content-['•'] after:mx-1">
                {props.data.statistics.viewCount} views
              </span>
              <span>1 day</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
