import { useEffect,useState } from 'react';
import * as videoService from '../services/videoService'
import Helmet from '../components/Helmet';
import Card from '../components/Card';
function Home() {
    const [video,setVideo]= useState([])
    useEffect(()=>{
      
        const fetchApi = async () => {
          const result = await videoService.video('mostPopular')
          setVideo(result)
        }
        fetchApi()
    },[])
    return ( 
      <Helmet title='Trang chủ'>
      <div className="grid w-full gap-y-14 gap-x-8 grid-cols-3 p-8">
      {video && video.map((item,index) => {
        console.log(item);
        return <Card data={item} key={index} />;
      })}
    </div>
      </Helmet>
    );
}

export default Home;