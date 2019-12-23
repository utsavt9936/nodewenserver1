const request=require('request')

const geocode=(address,callback)=>{
    const url2='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoidXQ5OTM2IiwiYSI6ImNrNGY1ZjY0cDBqY2czbm8zNmQ1cDRma2MifQ.Poli8yooFIrQBTUPp8uZ9A&limit=1'

request({url:url2},(error,response)=>{
    const dat=JSON.parse(response.body)
    if(error||dat.message||(dat.features.length==0))
    {
        callback('Unable to connect',undefined)
    }
    else
    {
        
     const long=dat.features[0].center[0]
     const lat=dat.features[0].center[1]
     const {features}=dat
     const {center}=features[0]
     const cent0=center[0]
     const cent1=center[1]
     const obj={
         long:cent0,
         lat:cent1
     }
     callback(undefined,obj)
    }
})
}
module.exports=geocode