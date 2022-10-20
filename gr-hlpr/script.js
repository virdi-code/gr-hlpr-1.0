var pathname = window.location.pathname
var searchURL = "https://book4you.org/s/"

window.onload=function(){

    if(pathname.includes("/book/show")){
        console.log("book page")
        bookName = document.getElementById("bookTitle").innerText
        authorName = document.querySelector('span[itemprop="name"]').innerText
        linkToGo = searchURL + bookName + " " + authorName
        
        chrome.runtime.sendMessage({link:linkToGo})
    }

    if(pathname.includes("/author/show")){
        author = document.querySelector('meta[property="og:title"]').content
        linkToGo = searchURL + author
        //setTimeout(() => {window.open(linkToGo)},2000); 
        chrome.runtime.sendMessage({link:linkToGo})
    }

}