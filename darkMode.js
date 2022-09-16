
    
    // const checkBox = document.getElementById('chk')
    
    
    // function switchTheme()
    // {
        
    //     var theme = document.getElementById("changeMode")
        
    //     if (theme.getAttribute('href') == 'light.css') {
    //         theme.setAttribute('href', 'dark.css')
    //     } else {
    //         theme.setAttribute('href', 'light.css')
    //     }
    // }
    
   
  
    function setActiveStyleSheet(title) {
        let css = `link[rel="alternate stylesheet"]`;
        let stylesheets = document.querySelectorAll(css);
        stylesheets.forEach(sheet => sheet.disabled = true);
        let selector = `link[title="${title}"]`;
        let stylesheet = document.querySelector(selector);
        stylesheet.disabled = false;
        localStorage.setItem("theme", title);
    }

    window.addEventListener('DOMContentLoaded', (event) => {
        let title = localStorage.getItem("theme");
        setActiveStyleSheet(title);
    })




