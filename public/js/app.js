

console.log('Client side javascript')


const inp=document.querySelector('input')
const btn=document.querySelector('form')
const uppdt=document.querySelector('#mess')


btn.addEventListener('submit',(e)=>{
    e.preventDefault()
    uppdt.textContent='Loading...'

    const location=inp.value
    fetch('/weather?search='+String(location)).then((response)=>{
        response.json().then((data)=>{
            if(data.error)
            {
                uppdt.textContent='Sorry could not find address'
            }
            else
            {
              const st=data
                uppdt.textContent='Temp of '+location+data.temp+' and rainprob '+data.rainprob
            }
        })

    })
    console.log(location)
})