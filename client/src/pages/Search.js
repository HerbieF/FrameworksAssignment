import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

function Search() {

  

  const [backendData,setBackendData] = useState([{}])
  useEffect(() => {
      fetch("/listOfCards").then(
        Response => Response.json()
      ).then(data =>{
          setBackendData(data)

        }
      )
    },[])

    
    return( 
        <div>
        <h1>Search Page</h1>

        {(typeof backendData === 'undefined') ? (
            <p>Loading...</p>
        ):(
            backendData.map((user,i) => (
                <div>
                <p key={i}>{`${i}: ${user}`}</p>
                <Link to={`/ReadCards/${i}`}>                      
                <button data-cy="onClick">view</button>
                </Link>
                </div>
            ))
        )
        }
        </div>
    )
  }




  export default Search;