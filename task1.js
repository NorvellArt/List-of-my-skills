let namesArray = [
    {
        url: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-128.png',
        title: 'HTML'
    },
    {
        url: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-128.png',
        title: 'CSS'
    },
    {
        url: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-128.png',
        title: 'Java Script'
    },
    {
        url: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-128.png',
        title: 'React.js'
    },
    {
        url: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/redux-128.png',
        title: 'Redux'
    },
    {
        url: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/graphql-128.png',
        title: 'Graph QL'
    },
    {
        url: 'https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-128.png',
        title: 'MongoDB'
    },
    {
        url: 'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-128.png',
        title: 'GIT'
    },
    {
        url: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-128.png',
        title: 'Python'
    }
]

class Card {
    constructor(url, title) {
        this.url = url;
        this.title = title;
    }
    render(index) {
        let out = `
            <div id='${index}'>
            <img src='${this.url}'>
            <p>${this.title}</p>
            </div>
        `
        return out
    }
}
function cardsRender() {
    res = ''
    for (let i = 0; i < namesArray.length; i++) {
        let { url, title } = namesArray[i]
        let card = new Card(url, title)
        res += `${card.render(i)}`
    }
    document.getElementById('root').innerHTML = res
}
cardsRender()

document.body.style.fontFamily = 'Helvetica, Arial, sans-serif'
document.body.style.fontWeight = 'bold'
document.body.style.textAlign = 'center'

let root = document.getElementById('root')
root.style.width = '1200px'
root.style.margin = '0 auto'
root.style.display = 'grid'
root.style.gridTemplateColumns = '1fr 1fr 1fr'
root.style.justifyItems = 'center'
root.style.gridGap = '30px'
root.style.fontFamily = 'Helvetica, Arial, sans-serif'
root.style.fontWeight = 'bold'
root.style.fontSize = '18px'


for (let i = 0; i < namesArray.length; i++) {
    let x = document.getElementById(i)
    x.style.border = 'none'
    x.style.boxShadow = '0px 0px 5px 5px silver'
    x.style.width = '300px'
    x.style.textAlign = 'center'
    x.style.padding = '20px'
    let y = document.querySelectorAll('img')[i]
    y.style.width = '80px'
}