const fs = require('fs');

const conversionMap = {
  '88': '65',
  '89': '66',
  '90': '67',
};

// __filename means the file which is executing
fs.readFile(__filename,(err,buffer)=>{

  let bufferToBeChanged = buffer.slice(-4,-1);

  // any changes made to buffer after slicing reflects exisiting buffer as they share same memory
  for(var i =0 ;i<3;i++)
  {
    bufferToBeChanged[i]= conversionMap[bufferToBeChanged[i]];
  }
  console.log(buffer.toString());
  console.log(bufferToBeChanged.toString());
})

// XYZ
