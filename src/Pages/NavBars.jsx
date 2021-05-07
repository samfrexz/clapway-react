import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import { Link } from "react-router-dom"
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { useState } from "react";
import { makeStyles, } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";


const navStyles = makeStyles((theme) =>({
  search: {
    cursor: 'pointer'
  },
  paper: {
    top: '13.3rem',
    position: 'fixed',
    right: '15rem',
    borderTop: '5px solid red',
    height: '4rem',
    zIndex: '100'
  },
  field: {
    padding: '10px 15px'
  },

}))

const NavBars = () => {

const classes = navStyles()
// this is the state that toggles the navbar icon
const [navBar, setNavBar] = useState(false)

const handleNavBar =()=> {
  setNavBar(!navBar)
}

// state that display the search-field onclick

const [searchBar, setSearchBar] = useState(true)

  const handleSearch =()=> {
    setSearchBar(!searchBar)
  }

  return ( 
    <>
    <header>
      <ul>
        <li><i class="fas fa-bars" onClick={handleNavBar}></i></li>
        <li><img src="https://res.cloudinary.com/dslkhklbl/image/upload/v1619964287/Clapway-logo-main_eglaie.png" alt=""/></li>
        <li><i class="fas fa-search"></i></li>
      </ul>
    </header>
    <hr/>

    {/* the desktop and mobile navigation tab/link */}
    <Container>
      
      <nav id={navBar ? 'mobile-menu' : ''}>
        <ul>
          <div className="dropdown">
            <Link to="/">ALL<i class="fas fa-chevron-down hide"></i></Link>
          <div className="dropdown-content hide">
            <p>NEWS</p>
            <p>TIPS</p>
            <p>TOP LISTS</p>
            <p>REVIEWS</p>
          </div>
          </div>

            <Link to="/Science">SCIENCE</Link>
            <Link to="/">CRYPTO</Link>
            <Link to="/">GAMES</Link>
            <Link to="/">CANNABIS</Link>
            <Link to="/">SERVICES</Link>

          <div className="dropdown">
            <Link to="/">OTHERS <i class="fas fa-chevron-down hide"></i></Link>
          <div className="dropdown-content hide">
            <p>WEBSITES</p>
            <p>BRANDS</p>
            <p>TECH</p>
            <p>SOCIAL MEDIA</p>
            <p>ADULT</p>
          </div>
          </div>
        
            <Link to="/">FEATURED</Link>
      
        </ul>
        <i class="fas fa-times" onClick={handleNavBar} ></i>
            <SearchRoundedIcon className={classes.search} onClick={handleSearch} />

      </nav>

      {/* this is the search field, hidden but displays onclick of the search icon */}
      <Grid container>
        <Grid item lg={4}></Grid>
        <Grid item lg={4}></Grid>
        <Grid item lg={4}>
        <div id={searchBar ? 'hide-search' : ''}>
            <Paper className={classes.paper} elevation={3}>
              <form>
                <input type="text" />
                <input type="submit" value="search"/>
            </form>
            </Paper>
            </div>
        </Grid>

      </Grid>
    </Container>
    </>
   );
}
 
export default NavBars;