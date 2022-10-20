chrome.runtime.onMessage.addListener(function(message) {
    if(message.link) {
        chrome.tabs.create({url: message.link, selected: false});
    }
});