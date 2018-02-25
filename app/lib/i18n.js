/*
 * Chrome i18n API
 */
export default {
    t(name, options) {
        return chrome.i18n.getMessage(name, options)
    }
}