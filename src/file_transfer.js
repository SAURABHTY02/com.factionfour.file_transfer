const fs = require('fs');
const axios = require('axios');

const upload =(filepath)=>{
    var formData = new FormData();
    formData.append('file', fs.createReadStream(filepath));
    axios.post('[Custom URL]', formData, {
    headers: {
       'Content-Type': 'multipart/form-data'
      }
   });

};

const download =()=>{
    
}

const progressResult =()=>{
    
}


const fileTransferResult =()=>{
    
}


module.exports={
    upload,
    download,
    progressResult,
    fileTransferResult
}