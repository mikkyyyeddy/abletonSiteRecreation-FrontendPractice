const languageList = document.querySelectorAll(".menu-1 li");
const locationList = document.querySelectorAll(".menu-2 li");
const languageDropdown = document.querySelector(".menu-1");
const locationDropdown = document.querySelector(".menu-2");
const activeLanguage = document.querySelector(".activeLanguage p")
const activeLocation = document.querySelector(".activeLocation p")

languageList.forEach((item)=> {
    item.addEventListener("click", ()=>{
        languageDropdown.style.display = 'none';
        activeLanguage.innerText = item.innerText;
    })
})
languageDropdown.addEventListener("mouseleave", () => {
    languageDropdown.style.display = ''; // Resets back to default CSS rules
});
locationList.forEach((item)=> {
    item.addEventListener("click", ()=>{
        locationDropdown.style.display = 'none';
        activeLocation.innerText = item.innerText;
    })
})
locationDropdown.addEventListener("mouseleave", () => {
    locationDropdown.style.display = ''; // Resets back to default CSS rules
});