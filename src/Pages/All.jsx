import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core";
import image1 from '../Assets/image1.jpg'
import image4 from '../Assets/image4.jpg'
import image2 from '../Assets/image2.jpg'
import image3 from '../Assets/image3.jpeg'



const allStyles = makeStyles((theme) =>({
  gridSpace: {
    paddingTop: '2.5rem'
  },

  space: {
    paddingRight: '1rem',
  }
}))

const All = () => {
  const classes = allStyles()
  return ( 
    <>
    <Container>
    <Grid className={classes.gridSpace} container spacing={3}>

      {/* first desktop column content */}

      <Grid item xs={12} lg={4}>
      <div className="bulb">
      <img src="https://res.cloudinary.com/dslkhklbl/image/upload/v1620037792/cropped-6.-Social-Media-2-324x235_z96gnv.jpg" alt=""/>
      <h1>10 EFFECTIVE WAYS <br /> TO EXPAND YOUR SOCIAL MEDIA INFLUENCE</h1>
      </div>
      </Grid>

      {/* second column content */}
      <Grid item xs={12} lg={4}>
      <div className="side">
      <img src="https://res.cloudinary.com/dslkhklbl/image/upload/v1620037802/2.-Writing-8-218x150_flyixi.jpg" alt="" className={classes.space} />
      <Typography>ESSAY WRITING SERVICE PRICE AND THE FACTORS THAT INFLUENCE IT</Typography></div><br /><br />

      <div className="side">
        <img src="https://res.cloudinary.com/dslkhklbl/image/upload/v1620045139/2.-Money-1-100x70_yjgums.jpg" alt="" className={classes.space} />
        <p>SUCCESSFUL CANNABIS BUSINESS IDEAS YOU CAN START IN 2021</p>
      </div><br /><br />

      <div className="side">
        <img src="https://res.cloudinary.com/dslkhklbl/image/upload/v1620045161/12.-Shrooms-1-100x70_jimdgv.jpg" alt="" className={classes.space} />
        <p>WHY SCIENCE WANTS YOU TO TAKE SHROOMS— AND WANTS CANADA TO...</p>
      </div><br /><br />

      <div className="side">
        <img src="https://res.cloudinary.com/dslkhklbl/image/upload/v1620045152/13.-Marijuana-1-100x70_sac9ua.jpg" alt="" className={classes.space} />
        <p>TIPS FOR CHOOSING YOUR HEMP CBD FLOWER STRAIN: SPECIAL SAUCE ...</p>
      </div><br /><br />

      <div className="side">
        <img src="https://res.cloudinary.com/dslkhklbl/image/upload/v1620045167/3.-Barsik-1-100x70_hgej6y.jpg" alt="" className={classes.space} />
        <p>WHAT YOU SHOULD KNOW ABOUT A BALINESE CAT</p>
      </div>

      </Grid>

      {/* third desktop column content */}

      <Grid item xs={12} lg={4}>

      <Typography style={{fontStyle: 'italic'}} variant="h4">Featured</Typography><br />

      <div className="side">
        <img src={image1} alt="" className={classes.space}/>
        <p>HOW TO FIND THE CRYPTO TRADING PLATFORM OF YOUR DREAMS</p>
      </div><br /><br />

      <div className="side">
        <img src={image4} alt="" className={classes.space} />
        <p>5 MOST COMMON CREDIT CARD SCAMS AND HOW TO PREVENT THEM</p>
      </div><br /><br />

      <div className="side">
        <img src={image2} alt="" className={classes.space} />
        <p>ONLINE SLOTS: ARE THEY WORTH IT?</p>
      </div><br /><br /><br />

      <div className="side">
        <img src={image3} alt="" className={classes.space} />
        <p>THE EFFECTS OF DEPRESSION ON YOUR BODY</p>
      </div>

      </Grid>

    </Grid>
    </Container>
    </>
   );
}
 
export default All;