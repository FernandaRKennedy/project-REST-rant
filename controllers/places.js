const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'https://www.lacademie.com/wp-content/uploads/2021/08/various-asian-meals.jpg'
    },
    
   {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2019/4/22/0/CI_Catmosphere-Laguna_coffee-bar.jpg.rend.hgtvcom.966.644.suffix/1555930348188.jpeg'
    }]
    res.render('places/index', { places })
})
module.exports = router
