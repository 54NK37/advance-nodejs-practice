const dns= require('dns')

dns.lookup('pluralsight.com',(error,address)=>{
    console.log(address);
})

// gets ipv4 address
dns.resolve4('pluralsight.com',(error,address)=>{
    console.log(address);
})

dns.resolveMx('pluralsight.com',(error,address)=>{
    console.log(address);
})

dns.reverse('52.35.255.4',(error,hostnames)=>{
    console.log(hostnames);
})