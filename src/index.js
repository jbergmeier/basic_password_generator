// Numbers: 48-57
// SmallLetters: 97-122
// UpperLetters: 65-90
// specialChar: 33-47 && 58-64 && 91-96 && 123-126
// This is a basic random password generator API based on ASCII 128 Chars

const allowedChars =('!,#,$,%,&,(,),*,+,,,-,.,/,0,1,2,3,4,5,6,7,8,9,:,;,<,=,>,?,@,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,[,],^,_,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,{,|,},~')
const allowedCharsArray = allowedChars.split(",")
console.log(allowedCharsArray)

const express = require('express');
const cors = require('cors');
const port = 3333 || process.env.PORT;

const app = express();
app.use(cors())


app.get("/:length", (req, res) => {
    const passwordLength = req.params.length;
    

    if(isNaN(passwordLength)){
        res.status(404).send({
            message: "length has to be a number!",
        })
     }else{
         if(passwordLength > 20) {
            res.status(404).json({
                message: "Max Password length is 20!"
            })
         }else {
        res.status(200).json({
            password: getRandomPwd(passwordLength)
             })
        }
        } 
    
})


const getRandomPwd = (length) => {
    const passwordLength = length;
    let result = ''

    const getRandomNumber = () => {
       return Math.floor(
            Math.random() * (allowedCharsArray.length - 0 ) + 0
          )
          
    }

    for(i=1; i<=passwordLength; i++){
        result += allowedCharsArray[getRandomNumber()]
     }
    console.log(result)
    return result


}



app.listen(port, () => {
    console.log("Server is running")
})