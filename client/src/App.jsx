function App() {
  return (
    <>
      <header>
        <nav>
          <a className="home" href="#"> <img src="./images/logo.png" alt="logo" /> </a>
          <a href="#">Catalog</a>

          <div id="user">
            <a href="#">Add Game</a>
            <a href="#">Logout</a>
          </div>

          <div id="guest">
            <a href="#">Login</a>
            <a href="#">Register</a>
          </div>
        </nav>
      </header>
    </>
  )
}

export default App
