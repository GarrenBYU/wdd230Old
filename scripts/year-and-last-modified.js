setElementText("#lastModified", "Last modified: " + (new Date(Document.lastModified()) + LocaleString('en-us')))
setElementText("#copywrite-year", (new Date()).getFullYear());

function setElementText(element, text){
    document.querySelector(element).innerText = text;
}