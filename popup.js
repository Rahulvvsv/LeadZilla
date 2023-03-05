 async function getActiveTabURL(){
    let queryOptions = {active:true,currentWindow:true}
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}
const click = async (e) => {
    const activeTab = await getActiveTabURL();
    chrome.tabs.sendMessage(activeTab.id,{
        type:"CLICKED",
    
    })
}
let button = document.getElementById("connect")
button.addEventListener("click",click)

