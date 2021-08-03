import React from 'react';
import Active from './Pages/Active.jsx';
import Upcoming from './Pages/Ucoming.jsx';
import Past from './Pages/Past.jsx';

export default function Tabs({tab,setTab}) {
    return (
        <div className="tabs">
            <div className="tabs-cont">
                <div className="tab" onClick={() =>setTab(<Upcoming/>) } >Upcoming Projects</div>
                <div className="tab" onClick={() =>setTab(<Active/>) } >Active Projects</div>
                <div className="tab" onClick={() =>setTab(<Past/>) } >Past Projects</div>
            </div>
        </div>
    )
}
