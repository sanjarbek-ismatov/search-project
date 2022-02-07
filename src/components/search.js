import React, { useState } from "react";
import '../css/search.css';
import Logo from './images/logo.png';
function Search(){
    const [text, setText] = useState('');
    const [list, setList] = useState();
    const [use, setUse] = useState(false);
    const CONTEXT_KEY = '344518b235096fb90';
    const API_KEY = 'AIzaSyBbFGoK91L85xUu9ONymejA1ecQPAVN8gM';
    let url;
    const fetchData = (target) => {
        if (target.key === 'Enter' && target.target.value !== ''){
            url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${text}`;
            fetch(url)
            .then(response => response.json())
            .then(data => {
                setList(data);
                setUse(true);
            });
            document.title = `${text} - MySearch`;
        }
    }
    const Working =() => {
        let obj;
        if (use){
            
            obj = list.items.map(item => 
            <>
               
                <div className="objects">
                    <a className="displayLink" href={item.link}>{item.displayLink}</a>
                    <div>
                        <a className="link" href={item.link}>{item.title}</a>
                        <p className="desc">{item.snippet}</p>
                    </div>
                </div>

            </>
            
            )
            return (
            <>
             <div className="searchInfo">
                    <p>About {list.searchInformation.formattedTotalResults} results ({list.searchInformation.formattedSearchTime}s)</p>
                </div>
            <div>
                    {obj}
                </div>
                <div className="footer">
                        <p>Barcha huquqlar himoyalangan!</p>
                        <p>Sanjarbek Ismatov 2022 ©</p>
                    </div></>
            )
        }
        else if(!use){
            return (
                <>
                    <div className="objects">
                        <p>Search with MySearch</p>
                    </div>
                </>
            )
        }
    }
    return (
        <>
            <div className="main">
                <div className="input">
                    <img src={Logo} />
                    <input placeholder="Search..." type='text' onChange={({target}) => {
                        setText(target.value);
                        
                    }} onKeyPress={fetchData} />
                    
                </div>
                <Working />
                <div className="fixed">
                    <button onClick={() => {window.location.href = 'https://t.me/sanjarbek_ismatov/'}} id="button">View Telegram</button>
                </div>
            </div>
            
        </>
    )
}
export default Search;