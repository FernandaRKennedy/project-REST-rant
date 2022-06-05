const db = require('../models')

db.Place.create([{
    name: 'Seul Garden',
    city: 'Raleigh',
    state: 'NC',
    cuisines: 'Korean food',
    pic: 'Images/koreanfood.jpg',
    founded: 1989
}, {
    name: 'Flying Saucer',
    city: 'Raleigh',
    state: 'NC',
    cuisines: 'bar,restaurant',
    pic: 'Images/flying saucer.jpg',
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