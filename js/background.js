chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
 
    if(changeInfo.url){
        
    if (changeInfo.url.includes("mod/assign")) {
        console.info(changeInfo.url)
        const message = { type: "notsubmitted" };

        chrome.tabs.query( {active:true, currentWindow:true}, function(tabs){
            console.info(tabs[0].id)
            chrome.tabs.sendMessage(tabs[0].id, message, null);

        })
        
      }}
});