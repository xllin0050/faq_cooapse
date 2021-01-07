const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle=>{
    
    toggle.addEventListener('click', ()=>{
        clear()
        toggle.parentNode.classList.toggle('active')
    })

    function clear(){
        toggles.forEach(toggle=>{
                        
                toggle.parentNode.classList.remove('active')
            
        })
    }
})

