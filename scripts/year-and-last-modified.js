setElementText("#lastModified", "Last modified: " + (new Date(Document.lastModified).toLocaleString('en-us')))
//still getting that error
setElementText("#copywrite-year", (new Date()).getFullYear());

function setElementText(element, text){
    document.querySelector(element).innerText = text;
}