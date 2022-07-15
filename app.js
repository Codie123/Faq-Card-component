const questionEl = document.querySelectorAll('.qa')
const arrowEl = document.querySelectorAll('.arrow-icon')

questionEl.forEach((q1,idx)=>{

    q1.addEventListener('click',()=>{
        if(q1.classList.contains('active')){
            q1.classList.remove('active')
            arrowEl[idx].classList.remove('open')
        }else{
            questionEl.forEach(q2=>{
                
                if(q2.classList.contains('active')){
    
                    q2.classList.remove('active')
                    arrowEl[idx].classList.remove('open')
                }
            })
            q1.classList.add('active')
            arrowEl[idx].classList.add('open')
        }

    })
})