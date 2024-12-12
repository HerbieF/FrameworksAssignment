const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(express.urlencoded());
const nameArray=[];

getCardCollectionName();
getDataFromIndex();
writeToJson();

function getCardCollectionName()
{
    const fs = require('fs');
    const cards = JSON.parse(fs.readFileSync('./allCards.json','utf-8'))

    cards.forEach(element => {
        nameArray.push(element[0].name)
    });


    app.get("/listOfCards", (req, res) =>{
        res.send(nameArray);
        
    })

}

function getDataFromIndex()
{
    app.post('/getindex', (req,res)=> {
    const index = req.body.id;
    res.send(getCollection(index))
    })

}


function getCollection(i)
{
    const fs = require('fs');
    const cards = JSON.parse(fs.readFileSync('./allCards.json','utf-8'))
    return cards[i];
}


function writeToJson()
{
    app.post('/createdCollection', (req,res)=>{
    const array = req.body;
    res.send(array);
    
    const jsonData = JSON.stringify(array,null,4);
    const fs = require('fs');
    fs.writeFile('./allCards.json',jsonData, err =>{
        if(err)
        {
            throw err;
        }
        console.log("Written to file");

    })
    });



}






app.listen(5000, () => {console.log("Server started on port 5000")})