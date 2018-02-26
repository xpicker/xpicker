import accountModal from 'components/account/modal'

chrome.browserAction.onClicked.addListener(function() {
    accountModal.show()  
})

chrome.windows.onRemoved.addListener(function(windowId) {
    if (accountModal.id == windowId) {
        accountModal.clear()
    }
})