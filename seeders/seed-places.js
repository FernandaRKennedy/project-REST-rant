const db = require('../models')

db.Place.create([{
    name: 'Seul Restaurant',
    city: 'Raleigh',
    state: 'NC',
    cuisines: 'Korean food',
    pic: 'public/Images/koreanfood.jpg',
    founded: 1989
}, {
    name: 'Flying Saucer',
    city: 'Raleigh',
    state: 'NC',
    cuisines: 'bar,restaurant',
    pic: img= 'public/Images/flying saucer.jpg',
    founded: 2020
}])
.then (() =>{
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})