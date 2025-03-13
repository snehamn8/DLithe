// document.addEventListener("DOMContentLoaded", function() {
//     const btns = document.querySelectorAll(".btn");
    
//     btns.forEach(btn => {
//         btn.addEventListener("mouseover", function() {
//             this.style.backgroundColor = "#ff9900";
//         });
        
//         btn.addEventListener("mouseout", function() {
//             this.style.backgroundColor = "#ffcc00";
//         });
//     });

//     alert("Welcome to Small Finance Bank! Secure and Trusted Banking Services.");
// });

function openPopup(title, text) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-text").innerText = text;
    document.getElementById("popup").style.display = "block";
}
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

/* JavaScript for pop-ups */
document.addEventListener("DOMContentLoaded", function() {
    const serviceBoxes = document.querySelectorAll(".service-box");
    const popup = document.createElement("div");
    popup.classList.add("popup");
    document.body.appendChild(popup);

    serviceBoxes.forEach(box => {
        box.addEventListener("click", function() {
            popup.innerHTML = `<h2>${box.querySelector("h3").innerText}</h2>
                               <p>${box.querySelector("p").innerText}</p>
                               <button class='close-btn'>Close</button>`;
            popup.style.display = "block";
            document.querySelector(".close-btn").addEventListener("click", function() {
                popup.style.display = "none";
            });
        });
    });
});
