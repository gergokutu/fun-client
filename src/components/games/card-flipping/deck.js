// we want the array elements in random order
function shuffle(array) {
  // work with the copy of the array
  const copyArray = array.slice(0)
  // try it with .map
  for (let i = 0; i < array.length -1; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1))
    // swapping values » original & randomIndex
    let temp = copyArray[i]
    copyArray[i] = copyArray[randomIndex]
    copyArray[randomIndex] = temp
  }

  return copyArray
}

export default function initializeDeck() {
  let id = 0

  const cardArray = [
    'https://i.redd.it/uwjrr7fvevc31.png', 
    'https://www.merchandisingplaza.us/44247/2/Posters-Pulp-fiction-Pulp-Fiction-Poster-l.jpg', 
    'https://s.s-bol.com/imgbase0/imagebase3/large/FC/2/4/3/6/1002004005006342.jpg',
    'https://cdn.shopify.com/s/files/1/1057/4964/products/the-shining-vintage-movie-poster-original-french-1-panel-47x63-3682_600x.jpg?v=1534399869',
    // 'https://m.media-amazon.com/images/M/MV5BMjI4ZDQ3NjktNjQ4Mi00NjU2LWFiZTEtYzhjODNlM2VhYTIzXkEyXkFqcGdeQXVyNDIwODAwNzg@._V1_.jpg', 
    // 'https://cdn.shopify.com/s/files/1/0652/4771/products/Alien_by_Gary_Pullin_grande_829aa36a-eedd-4971-9f4b-ad977237af1b_800x.png?v=1519308715', 
    // 'https://data.whicdn.com/images/298054564/large.png', 
    'http://www.romblog.at/wp-content/uploads/2018/04/poster-2-katze.jpg',
    // 'https://i.pinimg.com/originals/da/a4/da/daa4da0d483bbf36d34b4ce5e74b3e3b.png',
    // 'http://cdn.shopify.com/s/files/1/0157/3938/products/3g12632u-Edit_500_grande.jpg?v=1526421781',
    // 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/955637.jpg',
    'https://moviedetailsfactsandtrivia.files.wordpress.com/2015/10/mpw-54063.jpg?w=584',
    'https://thumbs.imagekind.com/4824972_650/Scarface-Poster_art.jpg?v=1492802733',
    // 'http://cdn.shopify.com/s/files/1/0630/8509/products/pst2923mntypyth_grande.jpg?v=1476808985',
    'https://m.media-amazon.com/images/M/MV5BNThkYmNmYzAtOGI2Ny00ODI4LTgwY2MtZmY3YWMxYTUyYjVjXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg',
    // 'https://www.mauvais-genres.com/20485/beverly-hills-cop-2-movie-poster-15x21-in-1987-tony-scott-eddie-murphy.jpg',
    'https://lumiere-a.akamaihd.net/v1/images/sb_dolby_worldwide_handout_13x19_v3_lg_use_this_one_cc3cc869.jpeg?region=0%2C0%2C821%2C1200'
  ]
  
  const cards = cardArray.reduce((acc, type) => {
    // push 2 times because we want 2 cards to match
    acc.push(
      {
        id: id++,
        type
      }
    )

    acc.push(
      {
        id: id++,
        type
      }
    )
    return acc
  }, [])
  
  return shuffle(cards)
}