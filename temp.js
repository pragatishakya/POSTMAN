// let submit = document.getElementById("submit")
// submit.addEventListener("click",()=>{
    let method = document.querySelector("input[name='requestType']:checked").value
//     let contentType = document.querySelector("input[name='contentType']:checked").value
//     // let urlField = document.getElementById("urlField").value
  
//     document.getElementById("responseJsonText").value = "Please Wait......"

    // if(method === "GET")
    // {
    //     fetch(urlField,{method:method})
    //       .then(res => res.json())
    //       .then(res => {
            console.log("MYTEST")
    //         document.getElementById("responseJsonText").value = JSON.stringify(res)
    //       })
        console.log("TEST")
    // }
    else{
        let data = document.getElementById('requestJsonText').value
        fetch(urlField,{
            method:method,
            headers:{
                'Content-Type': 'application/json'
            },
            body:data
        }).then(res => res.json())
          .then(res => {
            document.getElementById("responseJsonText").value = JSON.stringify(res)
          })

    }
   
// })