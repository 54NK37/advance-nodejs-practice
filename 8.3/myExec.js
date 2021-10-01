const {exec} = require('child_process')

// directly use shell syntax
exec('ping google.com',(err,stdout,stderr)=>{
    if(err)
    {
        return err
    }

    console.log(stdout.toString());
})

