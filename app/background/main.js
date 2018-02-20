import loginModal from '../content/login/modal.js'

chrome.browserAction.onClicked.addListener(function() {
    loginModal.show()  
})

chrome.windows.onRemoved.addListener(function(windowId) {
    if (loginModal.id == windowId) {
        loginModal.clear()
    }
})