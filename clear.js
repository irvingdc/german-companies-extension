if(!window.set) window.set = (prop, value) => {
    chrome.storage.local.set({ [prop]: value })
}

window.set("companies", null)
window.set("pageIndex", 1)
window.set("working", false)