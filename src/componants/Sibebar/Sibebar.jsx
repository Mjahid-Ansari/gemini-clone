import React, { useContext, useState } from 'react'
import './Sibebar.css'
import { Context } from '../../context/Context'
//import {assets} from '../../assets/assets'

const Sibebar = () => {

    const [exended, setExtended] = useState(false)
    const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context)

    const loadPrompt = async (prompt)=> {
        setRecentPrompt(prompt)
       await onSent(prompt)
    }

    return (
        <div className='sibebar'>
            <div className="top">

                <img onClick={()=>setExtended(prev=>!prev)} className='menu' src=" https://maxst.icons8.com/vue-static/icon/menu/logo.svg"
  alt="=" />
                <div onClick={() => newChat()} className="new-chat">
                    <img src="chrome://browser/skin/preferences/category-sync.svg" alt="+" />
                    {exended ? <p>New Chat</p> : null}

                </div>
                {exended
                    ? <div className="recent">

                        <p className="recent-title">Recent</p>
                        {prevPrompts.map((item,index)=>{
                            return(

                                <div onClick={() =>loadPrompt(item)} className="recent-entry">
                            <img src="" alt="@" />
                            <p>{item.slice(0,18)} ....</p>
                        </div>
                            )
                        })}
                        
                    </div>
                    : null

                }

            </div>
            <div className="bottom">
                <div className="bottom-item">
                    <img src="chrome://global/skin/icons/help.svg" alt="?" />
                   {exended?<p>Help</p>:null}
                </div>
                <div className="bottom-item">
                    <img src="chrome://browser/skin/home.svg" alt="$" />
                   {exended?<p>Acativitty</p>:null}
                </div>
                <div className="bottom-item">
                    <img src="chrome://browser/skin/preferences/category-general.svg"  alt="#" />
                   {exended?<p>Setting</p>:null}
                </div>

            </div>
        </div>



    )
}

export default Sibebar

