import React,{useEffect,useState,Component} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";

function ReadCards() {


    const { id } = useParams()
    const senddata = {"id": id}

    const [backendData,setBackendData] = useState([{}])
    useEffect(() => {
    fetch('/getindex', {
      method: 'POST',
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(senddata)
    }).then(
      Response => Response.json()
    ).then(data =>{
      setBackendData(data)

    }
    )
    },[])


    
    const [visible,setVisible] = useState(false);

    return(

      
      <div>
        <h1>{backendData[0].name}</h1>
        {(typeof backendData === 'undefined') ? (
            <p>Loading...</p>
        ):(



            backendData.map((user,i) => (               
                <a>
                <p key={i}>{`${i}: ${user.question}`}</p>
                {visible && <div><p key={i}>{`Answer: ${user.answer}`}</p></div>}
                <button onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Show'}</button>                                               
                </a>
            ))
        )
        }




      </div>
    )
  }

function output()
{}













  export default ReadCards;