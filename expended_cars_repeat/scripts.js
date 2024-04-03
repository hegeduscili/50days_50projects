const cards = document.querySelectorAll('.card');

cards.forEach(function(card){
    card.addEventListener('click',function(){
        removeActiveClass()
        card.classList.add('active')
    })
})


function removeActiveClass(){
    cards.forEach(function(card){
        card.classList.remove('active')
    })

}