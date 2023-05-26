import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
  faSort,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import "tippy.js/dist/tippy.css"; // optional

import * as watchService from "../services/watchService";
import * as channelService from "../services/channelService";
import * as commentService from "../services/commentService";
import * as videoService from "../services/videoService";
import * as RecommendedVideosService from "../services/RecommendedVideosService";

import Button from "../components/Button";
import Helmet from "../components/Helmet";
import WatchCart from "../components/WatchCart";
function Watch() {
  const [showMoreStatus, setShowMoreStatus] = useState(false);
  const { id } = useParams();
  const [data, setData] = useState({});
  const [channel, setChannel] = useState({});
  const [comment, setComment] = useState([]);
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true)
      const res = await watchService.watch(id);
      setData(res[0]);
setLoading(false);
      const getChannel = async () => {
        const channel = await channelService.channel(res[0].snippet.channelId);
        setChannel(channel);
      };

      getChannel();
    };
    fetchApi();
  }, [id]);
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const comments = await commentService.comment(id);
  //   };
  //   fetchApi();
  // }, [id]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await videoService.video("mostPopular");
      setVideos(res);
    };
    fetchApi();
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowMoreStatus(false);
  }, [id]);
  console.log(channel);
  const convertTime = (time) =>{
    var milliseconds = Date.parse("2023-05-17T12:30:00Z");
    var date = new Date(milliseconds);
    var hour = date.getHours();
    return hour
  }
  const numberFormat = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(0) + 'K';
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M';
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B';
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T';
};
console.log(channel);
  return (
    <Helmet title={data.snippet?.title}>
      {loading && <div className="loading"></div> }
      <div className="flex w-full">
        <div className="flex gap-y-10 gap-x-5 p-7 mx-20 mr-0 w-full overflow-auto">
          <div className="" style={{ maxWidth: "800px" }}>
            <ReactPlayer
              width="800px"
              url={`https://www.youtube.com/watch?v=${id}`}
              playing={false}
              muted={true}
              controls={true}
              height="450px"
            />

            <div className="mt-5">
              <p className="text-2xl font-bold line-clamp-1">
                {data.snippet?.title}
              </p>
              <div className="flex my-3 items-center justify-between">
                <div className="flex  ">
                  <div className="flex mr-10">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={channel?.snippet?.thumbnails.medium.url}
                      alt=""
                    />
                    <div className="ml-5">
                      <p className="text-xl font-bold line-clamp-1 w-[200px]">
                        {channel?.snippet?.title}
                      </p>
                      <p className="text-zinc-500">{} subscibe</p>
                    </div>
                  </div>
                  <Button black> Subcribe</Button>
                </div>
                <div className="">
                  <Tippy content="Hello" zIndex={99}>
                    <Button small>
                      <FontAwesomeIcon icon={faThumbsUp} />  Like
                    </Button>
                  </Tippy>
                  <Tippy content="Hello">
                    <Button small>
                      <FontAwesomeIcon icon={faThumbsDown} /> {" "}
                    </Button>
                  </Tippy>

                  <Tippy content="Hello">
                    <Button small>
                      <FontAwesomeIcon icon={faShare} /> Share{" "}
                    </Button>
                  </Tippy>
                  <Tippy content="Hello">
                    <Button rounded> ...</Button>
                  </Tippy>
                </div>
              </div>
            </div>

            <div className="mt-5 bg-gray-200 p-2 rounded-xl">
              <div
                className={`${
                  !showMoreStatus ? "max-h-16 overflow-hidden" : ""
                } text-sm w-11/12`}
              >
                <div className="">
                  <span className="font-bold text-xl mr-1">{data.statistics?.viewCount} Views</span>
                  <span className="font-bold text-xl mr-1">{convertTime(data?.snippet?.publishedAt)} hour ago</span>
                  {/* <span className="text-xl text-gray-500">1</span> */}
                </div>
                <div
                  className="text-base leading-10"
                  dangerouslySetInnerHTML={{
                    __html: data?.snippet?.description,
                  }}
                ></div>
              </div>
              <div
                className="font-bold text-xl"
                onClick={() => setShowMoreStatus(!showMoreStatus)}
              >
                Show {showMoreStatus ? "less" : "more"}
              </div>
            </div>

            <div className="mt-10 flex justify-items-start ">
              <p className="text-2xl mr-3">{numberFormat(data.statistics?.commentCount)}  Comments</p>
              <p className="text-2xl">
                <FontAwesomeIcon icon={faSort} /> Sort by
              </p>
            </div>

            <div className="mt-10 w-full">
              {/* commemnt */}
              commemnt
            </div>
            <div className="mt-10 w-full">
              {/* list comment */}
              list
            </div>
          </div>
          <div className="mr-24 flex flex-col gap-3">
            {videos &&
              videos.length &&
              videos.map((item) => (
                <WatchCart data={item} key={item.videoId} />
              ))}
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default Watch;
