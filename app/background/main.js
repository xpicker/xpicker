import accountModal from '../account/modal.js'

chrome.browserAction.onClicked.addListener(function() {
    accountModal.show()  
})

chrome.windows.onRemoved.addListener(function(windowId) {
    if (accountModal.id == windowId) {
        accountModal.clear()
    }
})