import Profile from './Profile';
import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CountUp from 'react-countup';
import { useStateValue } from './StateProvider';



const bestProfileStyles = makeStyles({
    bestProfile: {
        transition:"all 0.5s ease",
        position:"relative",
        minHeight:"10rem",
        width: "14rem",
        height:"280px",
        display: "flex",
        flexDirection: "column",
        alignSelf:"center",
        alignItems: "center",
        margin: "0 auto",
        padding: 0,
        backgroundColor: "transparent", // "var(--color-surface-dark)",
        color: "var(--color-text-light)",
        boxShadow: "-3px -7px 7px 3px #1D2338 ",
        ['@media (min-width:780px)']: {
            flexDirection: "row-reverse",
            justifyContent:"space-between",
            alignItems: "center",
            margin: "0",  
            width:"22rem",
            height:"10rem",
  } 
    },

    bestProfileLight: {
        transition:"all 0.5s ease",
        position:"relative",
        minHeight:"10rem",
        width: "14rem",
        height:"280px",
        display: "flex",
        flexDirection: "column",
        alignSelf:"center",
        alignItems: "center",
        margin: "0 auto",
        padding: 0,
        backgroundColor: "transparent", // "var(--color-surface-light)",
        color: "var(--color-text-dark)",
                boxShadow: "-7px 5px 7px 5px #666666 ",

        ['@media (min-width:780px)']: {
            flexDirection: "row-reverse",
            justifyContent:"space-between",
            alignItems: "center",
            backgroundColor: "transparent", // "var(--color-surface-light)",
            color: "var(--color-text-dark)",
            margin: "0",  
            width:"22rem",
            height:"10rem",
  } 
    },
    
    media: {
        zIndex:"300",
        width:"100%",
       flex:"1",
        height: "100%",
        padding:0,
        objectFit:"contain",
        
        ['@media (min-width:780px)']: {
            flex:"1",
        height: "100%",
  }
    },

    socials: {
        height:"80px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        justifyContent: "center",
        alignItems: "center",
        columnGap: "2rem",
        opacity: "0.7",
    },

    socialStat: {
        width:"5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 !important",
        columnGap:"0.1rem",
        marginBottom:"1rem",
        
        "&>*": {
            padding:"0.1rem",
        }
    },

    socialTypo: {
        fontSize:"0.8rem",
    },

    nameTotal: {
        position: "absolute",
        bottom: 0,
        left:0,
        padding: "0.3rem",
        borderRadius: "0.2rem",
        textAlign: "center",
        width:"14rem",
        margin:"0 auto",
        backgroundColor: "#3F51B5", // "var(--color-surface-total-dark)",
        color: "var(--color-text-light)",

        ['@media (min-width:780px)']: {
            width: "14rem",
            textAlign:"center",
  }
    }

    
})


function BestProfile() {
  const classes = bestProfileStyles()
const [{ bestUser, isDark}, dispatch] = useStateValue()
  return (
      
<Card elevation="3" className={`${isDark ? classes.bestProfile : classes.bestProfileLight}`}>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/c/cc/Vincenzo_Guzzo_profile_photo.jpg"
          title="profile"
        />
        <CardContent className="classes.socials">
              <div className={classes.socials}>
                  <div className={classes.socialStat}>
                      <FacebookIcon className={classes.social} /><Typography className={classes.socialTypo}  variant="body1" component="h6">
                          <CountUp
                              start={bestUser?.facebook-1000}
                              end={bestUser?.facebook}
                              duration={2.75}
                              decimals={0}
                              decimal=","
                              separator=" "
                          >
                              {bestUser?.facebook}
                          </CountUp>
                      </Typography>
                  </div>
                  {/* ----------- */}
                  <div className={classes.socialStat}>
                      <TwitterIcon className={classes.social} /><Typography className={classes.socialTypo} variant="body1" component="h6">
                          <CountUp
                              start={bestUser?.twitter-1000}
                              end={bestUser?.twitter}
                              duration={2.75}
                              decimals={0}
                              decimal=","
                              separator=" "
                          >
                              {bestUser?.twitter}
                          </CountUp>
                      </Typography>
                  </div>

                  {/* ----------- */}

                  <div className={classes.socialStat}>
                      <InstagramIcon className={classes.social} /><Typography className={classes.socialTypo} variant="body1" component="h6">
                          <CountUp
                              start={bestUser?.instagram-1000}
                              end={bestUser?.instagram}
                              duration={2.75}
                              decimals={0}
                              decimal=","
                              separator=" "
                          >
                              {bestUser?.instagram}
                          </CountUp>
                      </Typography>
                  </div>

                  {/* ------------- */}

                  <div className={classes.socialStat}>
                      <YouTubeIcon className={classes.social} /><Typography className={classes.socialTypo} variant="body1" component="h6">
                          <CountUp
                              start={bestUser?.youtube-100}
                              end={bestUser?.youtube}
                              duration={2.75}
                              decimals={0}
                              decimal=","
                              separator=" "
                          >
                              {bestUser?.youtube}
                          </CountUp>
                      </Typography>
                  </div>

              </div>
              
              <Typography className={classes.nameTotal} variant="body2" component="h5">
                  <span style={{ marginRight: "0.5rem", color: "var(--color-text-light)", opacity: "0.9" }}>{bestUser?.name}</span>         
                  <CountUp
                              start={bestUser?.total}
                              end={bestUser?.total}
                              duration={2.75}
                              decimals={0}
                              decimal=","
                              separator=" "
                          >
                            {bestUser?.total}
                          </CountUp>
                      </Typography>
        </CardContent>
     
</Card>
  );
}

export default BestProfile;
