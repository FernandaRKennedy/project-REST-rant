const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="Images/dog.jpg"/>
              </div>
              <div>
                Photo by <a href="https://unsplash.com/photos/8g0D8ZfFXyA">Unsplash</a>
              </div>
                <a href="/home"><button className="btn-primary">Home Page</button></a>
          </main>
      </Def>
    )
  }
  

module.exports = error404
