const fs = require('fs');
const axios = require('axios');

const upload =(url,filepath)=>{
    var formData = new FormData();
    formData.append('file', fs.createReadStream(filepath));
    axios.post(url, formData, {
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