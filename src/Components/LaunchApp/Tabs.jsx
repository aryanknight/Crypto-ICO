import React ,{useEffect} from 'react';
import Active from './Pages/Active.jsx';
import Upcoming from './Pages/Ucoming.jsx';
import Past from './Pages/Past.jsx';

export default function Tabs({setTab}) {

    const allTabs=document.getElementsByClassName("tab");

    const changeSize =( tab ,no )=>{
        setTab(tab);
        //allTabs[no].classList.add("change-size");
        
        for(var i=0;i<allTabs.length;i++){
            if(i==no){
                allTabs[i].classList.add("change-size");
            }else{
                allTabs[i].classList.remove("change-size");
            }
        }
    }

    useEffect(() => {
        changeSize(<Upcoming/>,0);
    },[])
    return (
        <div className="tabs">
            <div className="tabs-cont">
                <div className="tab" onClick={() =>changeSize(<Upcoming/>,0) } >Upcoming Projects</div>
                <div className="tab" onClick={() =>changeSize(<Active/>,1) } >Active Projects</div>
                <div className="tab" onClick={() =>changeSize(<Past/>,2)} >Past Projects</div>
            </div>
        </div>
    )
}
