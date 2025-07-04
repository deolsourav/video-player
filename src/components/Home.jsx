import { useEffect, useState } from 'react';
import Sidenav from './partials/Sidenav';
import Topnav from './partials/Topnav';
import axios from '../utils/axios';
import Header from './partials/Header';

const Home = () => {
    document.title = "Video Player | Homepage";
  
    
    const [sidnav, setsidnav] = useState(false);
    const clickHandler = ()=> setsidnav(!sidnav);
    
    const [wallpaper, setwallpaper] = useState(null);

    const GetHeaderWallpaper = async()=>{
        try{
            const response = await axios.get(`/`);
           let randomData = (Math.random()*response.data.length).toFixed();
            setwallpaper(randomData);
        }catch(error){
            console.log("Error:",error);
            
        }
    };
    console.log(wallpaper);
    
    
    
    useEffect(()=>{
        !wallpaper && GetHeaderWallpaper();
    },[]);

    return <>
       <Sidenav sidnav={sidnav}/>
       <div className={` h-full  transition-ease duration-400 ${sidnav ? "w-[80%] ml-[20%]" : "w-full"}`}>
        <Topnav clickHandler={clickHandler}/>
        <Header data={wallpaper}/>
       </div>
    </>;
    
};

export default Home;