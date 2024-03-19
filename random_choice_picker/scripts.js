const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus()

textarea.addEventListener('keyup', function(event){
    createTags(event.target.value)

    //Animáció
    if(event.key === 'Enter'){
        setTimeout(function(){
            event.tagert.value = ''
        },10)

        randomSelect()
    }
})

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag =>tag.trim())

    /* const tags: Létrehoz egy konstans változót, amely tárolni fogja a címkéket.
    input.split(','): A bemeneti szöveget felosztja vesszők mentén, létrehozva egy tömböt a kinyert részekből.
    .filter(tag => tag.trim() !== ''): Szűri a tömböt úgy, hogy eltávolítja azokat a címkéket, amelyek csak szóközökből állnak, vagyis üresek.
    .map(tag => tag.trim()): A maradék címkéket átmappeli (átalakítja), úgy hogy eltávolítja a szóközöket a címkék kezdetéről és végéről. */
    
    tagsEl.innerHTML = ''

    tags.forEach(function(tag){
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

//Animáció

function randomSelect(){
    const times = 30

    const interval = setInterval(() => {
        const randomTag = picRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        },100)
    },100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = picRandomTag()

            highlightTag(randomTag)
        },100);

    },times*100)
}

function picRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}

function unHighlightTag(tag){
    tag.classList.remove('highlight')
}



