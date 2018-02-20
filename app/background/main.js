chrome.browserAction.onClicked.addListener(showLoginModal)

function showLoginModal() {
    chrome.tabs.executeScript({file: 'login.js'})   
}