import React ,{useEffect,useState} from 'react';
import Particles from "react-particles-js";

export default function Particle() {

    const [particleNo,setParticleNo] = useState();
    useEffect(()=>{
      if(window.screen.width < 650){
        setParticleNo(30);
      }else{
        setParticleNo(80)
      }
    },[]);

    return (
    <div className='particles-cont'>
        <Particles height="95vh" width="95vw" params={{
          particles:{
            number:{
              value:particleNo
            },
            size:{
              value:5
            },color:{
              value:'#3261b8'
            },links:{
              color:'#3261b8'
            },
            move:{
              speed:3
            }
          }
        }} />
    </div>
    )
}
