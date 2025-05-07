const   html = document.querySelector("html"),
        body = document.querySelector("body"),
        modeSwitch = body.querySelector(".switch"), 
        icon = modeSwitch.querySelector(".material-symbols-outlined");

modeSwitch.addEventListener("click", () =>{
    html.classList.toggle("dark");
     
    // Cambiar icono y estado
    if (html.classList.contains("dark")) {
        icon.textContent = 'light_mode';
    } else {
        icon.textContent = 'dark_mode';
    }
});