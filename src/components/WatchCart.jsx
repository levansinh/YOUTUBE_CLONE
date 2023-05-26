import { Link } from "react-router-dom";

import * as channelService from "../services/channelService";
import { useEffect, useState } from "react";
function WatchCart({data}) {
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    const fetchApi = async () => {
      const res = await channelService.channel(data.snippet.channelId);
      setAvatar(res.snippet.thumbnails.default.url);
    };
    fetchApi();
  }, [data]);
console.log(data);  
  return (
    <div className=" flex gap-3 ">
      <div className="relative min-w-fit ">
        <Link to={`/watch/${data.id}`}>
          <img
            src={data.snippet.thumbnails.medium.url}
            className="h-24 w-40"
            alt="thumbnail"
          />
        </Link>
      </div>
      <div className="flex gap-1 flex-col " >
        <div>
          <h3>
          <Link to={`/watch/${data.id}`} className="line-clamp-2">
              {data.snippet.title}
          </Link>
          </h3>
          <div className="text-sm text-gray-400">
            <div>
              <a href="#" className="hover:text-zinc-500">
                {data.snippet.channelTitle}
              </a>
            </div>
            <div>
              <span className="after:content-['•'] after:mx-1">
                {/* {data.statistics.viewCount} views */}
              </span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchCart;
