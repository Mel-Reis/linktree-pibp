const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e){
    e.preventDefault()
    const link = this.getAttribute('data-link')
    console.log(link)
    try{
        await navigator.clipboard.writeText(link)
        alert("Link copiado: " + link)
    } catch (err){
        console.error(err)
    }

}

shareButtons.forEach(shareButtons => shareButtons.addEventListener('click', copyText))