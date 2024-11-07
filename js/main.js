let submitBtn = document.getElementById("submit-btn");

async function generateGif() {

    let loader = document.querySelector(".loader");
    //loader.style.display = "block";
    //document.querySelector("wrapper").style.display = "none";

    //Get search value (default +> laugh)
    let q = document.getElementById("search-box").value;
    //We need 10 gifs to be displayed in result
    let gifCount = 10;

    let APIURL = `https://api.giphy.com/v1/gifs/search?api_key=6V20ado4NsUCs4H45eJ4b821HJuYmBkE&q=${q}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    let response = await fetch (APIURL)
    let data = await response.json()
    console.log(data);
    //Empty section with all images
    let sectionElement = document.getElementById("gifImages")
    sectionElement.innerHTML = ""
    data.data.forEach(element => {
        let newImage = document.createElement("img")
        newImage.src = element.images.original.url
        
        console.log (sectionElement)
        sectionElement.appendChild(newImage)
    });
};

//Generate Gifs on screen load or when user clicks on submite
submitBtn.addEventListener("click", generateGif);
window.addEventListener("load", generateGif);