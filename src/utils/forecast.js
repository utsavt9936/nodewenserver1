const request=require('request')

const forecast=(lat,long,callback)=>{

    const url='https://api.darksky.net/forecast/be9f5db5b6854b3c87c1a428954ad45c/'+String(lat)+','+String(long)+'?units=si'

    request({url:url,json:true},(error,response)=>{
     if(error||response.body.error)
     {
         callback('Unable to connect',undefined)
     }
     else
        callback({temp:response.body.currently.temperature,rainprob:response.body.currently.precipProbability})
    })
}
module.exports=forecast