function slideshow(img) {
    var expandImg = document.getElementById("poster");

    expandImg.style.backgroundImage = `url('${img.src}')`;
    expandImg.parentElement.style.display = "block";
}

function slideshow2(img) {
    var expandImg2 = document.getElementById("poster2");

    expandImg2.style.backgroundImage = `url('${img.src}')`;
    expandImg2.parentElement.style.display = "block";
}

function slideshow3(img) {
    var expandImg3 = document.getElementById("poster3");

    expandImg3.style.backgroundImage = `url('${img.src}')`;
    expandImg3.parentElement.style.display = "block";
}

function slideshow4(img) {
    var expandImg4 = document.getElementById("poster4");

    expandImg4.style.backgroundImage = `url('${img.src}')`;
    expandImg4.parentElement.style.display = "block";
}

function slideshow5(img) {
    var expandImg5 = document.getElementById("poster5");

    expandImg5.style.backgroundImage = `url('${img.src}')`;
    expandImg5.parentElement.style.display = "block";
}

function download(){
    alert("Movie successfully downloaded!");
}

function logout(){
    alert("Logging out");
    window.location = "index.html";
}