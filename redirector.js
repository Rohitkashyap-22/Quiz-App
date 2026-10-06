const selectquiz = document.querySelector(".selectquiz")
    
selectquiz.addEventListener("click", function(e){
    
    if(e.target.classList.contains("heading")){
        const subject = e.target.id;
        const parent = e.target.parentElement
        const inp = parent.querySelector("input")
        if(inp.value!=="" && inp.value!==0 ){
            const size = inp.value
            window.location.href = `./quiz.html?num=${size}&subj=${subject}`
        }
    }

})