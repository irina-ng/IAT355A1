// this makes the education section turn blue when hover

let education = document.querySelectorAll(".education");
console.log();

education.forEach((education) => {
    education.addEventListener("mouseover", () => {
        education.style.color = "blue";  
    });
    education.addEventListener("mouseout", () => {
        education.style.color = "";  
    });
});