import React,{useEffect,useState,Component} from 'react'


const upcomingJson = [];

function CreateCards() {

  useEffect(() => {
  fetch('/getindex', {
    method: 'POST',
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(upcomingJson)
  })
  },[])

  return (CreateCollection)



  

}

const CreateCollection = () =>{
  const [name,setname] = useState('')

  const handlesubmit = (e) =>{
    e.preventDefault();
    const title = {name};
    console.log(title);
    upcomingJson.push(title);
  }

  return(
    <div>
    <h1>CreateCards Page</h1>
    <p>{upcomingJson}</p>

    <form onSubmit={handlesubmit}>
      <label>Collection Title:</label>
      <input
        type='text'
        required
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <button>Add name</button>       
    </form>
    </div>
  ) 
}


const CreateOneCard = () =>{

  const [question,setquestion] = useState('')
  const [answer,setanswer] = useState('')
  let numberOf = 0;


  const handlesubmit = (e) =>{
    e.preventDefault();
    const input = {question,answer};
    console.log(input);
        document.getElementById('question').value='';
        document.getElementById('answer').value='';
        upcomingJson.push(input);
  }




  return(
    <form onSubmit={handlesubmit}>
    <label>Card question</label>
      <textarea
      id='question'
        required  
        value={question}
        onChange={(e)=>setquestion(e.target.value)}     
      ></textarea>


    <label>Card answer</label>
      <textarea
      id='answer'
        required
        value={answer}
        onChange={(e)=>setanswer(e.target.value)}      
      ></textarea>


    <button>Add Card</button>
    <p>Number of cards created: {numberOf}</p>
    </form>
  )



}


export default CreateCollection;