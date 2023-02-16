let parameterBox= document.getElementById('parameterBox')
parameterBox.style.display="none"

let paramsRadio= document.getElementById('paramsradio')
paramsRadio.addEventListener("click",()=>{
    document.getElementById('requestJsonBox').style.display='none'
    document.getElementById('parameterBox').style.display='block'
    document.getElementById('params').style.display='block'
})

let jsonRadio= document.getElementById('jsonradio')
jsonRadio.addEventListener("click",()=>{
    document.getElementById('requestJsonBox').style.display='block'
    document.getElementById('parameterBox').style.display='none'
    document.getElementById('params').style.display='none'
})

paramsCount=1

let addParam=document.getElementById('addParam')
addParam.addEventListener("click",()=>{
    let params=document.getElementById('params')
    paramsCount++
    let string=`<div class="form-row my-2">
    <label for="url" class="col-sm-2 col-form-label">Parameter ${paramsCount} </label>
    <div class="col-md-4">
      <input type="text" class="form-control" id="parameterkey${paramsCount}" placeholder="Enter Parameter ${paramsCount} Key">
    </div>
    <div class="col-md-4">
      <input type="text" class="form-control" id="parametervalue${paramsCount}" placeholder="Enter Parameter ${paramsCount}  Value">
    </div>
    <button type="button" id="addParam" class="btn btn-primary delete">-</button>
  </div>`
    let newChild= getElementByString(string)
    params.appendChild(newChild)
})

function getElementByString(string){
    let div=document.createElement('div')
    div.innerHTML=string
    return div.firstElementChild
}

let submit=document.getElementById("submit")
submit.addEventListener("click",()=>{
    let urlField=document.getElementById('urlField').value
    let requestType= document.querySelector("input[name='requestType']:checked").value
    // console.log(requestType)
    let contentType= document.querySelector("input[name='contentType']:checked").value
    // console.log(contentType)


    let responseJsonText=document.getElementById("responseJsonText").value="Please wait..."

    if(requestType==='GET'){
        // fetch(resource, options)
        fetch(urlField,{method:requestType,})
        .then(res=>res.json())
        .then(res=>{
            document.getElementById("responseJsonText").value = JSON.stringify(res)
        })
    }
    else if(requestType==='POST'){
        let data = document.getElementById('requestJsonText').value
        fetch(urlField,{method:method,
            headers:{'Content-Type': 'application/json'},
            body:data})
            .then(res => res.json())
            .then(res => {document.getElementById("responseJsonText").value = JSON.stringify(res)
          })
    }
})
