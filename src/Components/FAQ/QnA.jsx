import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Addbtn from '../../Images/addbtn.png';
import gsap from 'gsap';

export default function QnA({question,answer,no}) {

    const expandAns =()=>{
        const ans=document.getElementsByClassName("faq-ans")[no];
        const circle=document.getElementsByClassName("add-circle")[no];
        if(ans.style.maxHeight){
            circle.style.transform = 'rotate(0deg)';
            ans.style.maxHeight= null;
        }else{
            circle.style.transform = 'rotate(135deg)';
            ans.style.maxHeight=ans.scrollHeight + "px";  
        }
    }
    return (
        <div className="faq-ques-ans" >
            <div className="faq-question" onClick={expandAns}>
                {question}
                <img src={Addbtn} className="add-circle" />
            </div>
            <div className="faq-ans">
                {answer}
                <br/><br/>
            </div>
        </div>
    )
}
