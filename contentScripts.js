

( async ()=>{


    const delay = async (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms))
    chrome.runtime.onMessage.addListener((obj,sender,response) => {
        const {type} = obj;
        let temp;
        if(type==="CLICKED"){
            let x = document.getElementsByClassName("artdeco-button artdeco-button--2 artdeco-button--secondary ember-view")
            let y = document.getElementsByClassName("artdeco-button--muted")
            console.log(x)
            console.log(y)
            let z = []
            for(let i of x){
       
                if(i?.lastChild.innerText == "Connect"){
                    z.push(i)
                }
            }
          
                            
            let running = async ()=>{

                for(let j of z){


                    j.click();
                   
                      setTimeout(()=>{
                          temp = document.getElementsByClassName("artdeco-modal artdeco-modal--layer-default send-invite");
                          let buttons = temp[0].children.item(4).children.item(1)
                          buttons.click();
                      // temp[0].click();
                      },1000)
      
      
                      await delay(3000);
      
                    }
                
              
                  

            }
            running();
    

        }
    })

    console.log("hello")








})();
