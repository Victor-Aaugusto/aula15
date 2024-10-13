const btn = document.getElementById('btn')


btn.addEventListener('click', () =>{
    const elementoPorId = document.getElementById('exemploid')
    elementoPorId.style.color = 'blue'
    console.log(`Selecionado por id ${elementoPorId}` )

    let elementoPorClasse = document.querySelectorAll('.exemploclasse')
    elementoPorClasse.forEach(elemento =>{
        elemento.style.backgroundColor = 'yellow'
        elemento.style.padding = '1em'
        console.log(`Selecionando por classe ${elemento}`)
    })

    let elementoPorTag = document.querySelectorAll('p')
    elementoPorTag.forEach(elemento =>{
        elemento.style.fontWeight = 'bold'
        console.log(`Selecionando por classe ${elemento}`)
    })

    let elementoPorQuery = document.querySelector('.paragrafo')
    elementoPorQuery.style.fontSize = '20px'
    console.log(`Selecionado por querySelector ${elementoPorQuery}`)

    let elementoPorQueryAll = document.querySelectorAll('.paragrafo')
    elementoPorQueryAll.forEach(elemento => {
        elemento.style.textDecoration = 'underline'
        console.log(`Selecionado por ${elemento}`)
    })
})

