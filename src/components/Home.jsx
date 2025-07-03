import { useState } from 'react';
import Sidenav from './partials/Sidenav';
import Topnav from './partials/Topnav';

const Home = () => {
  
    
    const [sidnav, setsidnav] = useState(false)
    
    const clickHandler = ()=> setsidnav(!sidnav);
    
    document.title = "Video Player | Homepage";
    return <>
       <Sidenav sidnav={sidnav}/>
       <div className={` h-full  transition-ease duration-400 ${sidnav ? "w-[80%] ml-[20%]" : "w-full"}`}>
        <Topnav clickHandler={clickHandler}/>
       </div>
    </>;
    
};

export default Home;