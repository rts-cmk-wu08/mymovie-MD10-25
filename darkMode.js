
    
    const checkBox = document.getElementById('chk')
    
    
    function switchTheme()
    {
        
        var theme = document.getElementById("changeMode")
        
        if (theme.getAttribute('href') == 'light.css') {
            theme.setAttribute('href', 'dark.css')
        } else {
            theme.setAttribute('href', 'light.css')
        }
    }
    
   


