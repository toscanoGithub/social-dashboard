import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@material-ui/icons/ArrowDropUpOutlined';
import CountUp from 'react-countup';
import { useStateValue } from './StateProvider';
import shuffle from 'shuffle-array';


const useStyles = makeStyles({
    root: {
        transition:"all 0.5s ease",
        borderRadius:"0.3rem",
        marginLeft:"1rem",
        marginBottom:"0.8rem",
        position:"relative",
        padding:"0 auto",
        width: "250px",
        height:"280px",
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "var(--color-surface-dark)",
        color:"var(--color-text-light)",
        boxShadow: "-5px 5px 5px 3px #1D2338 ",
        opacity:"0.7",

        ['@media (min-width:780px)']: {
            width:"280px",
            maxWidth: "290px",
            maxHeight:"120px",
            display: "flex",
            flexDirection:"row",
            alignItems: "center",
            boxShadow: "-1px 1px 4px 1px #1D2338 ",         
  }   
},

    rootLight: {
        transition:"all 0.5s ease",
        borderRadius:"0.3rem",
        marginLeft:"1rem",
        marginBottom:"0.8rem",
        position:"relative",
        padding:"0 auto",
        width: "250px",
        height:"280px",
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "var(--color-surface-light)",
        color:"var(--color-text-dark)",
        boxShadow: "-1px 5px 7px 3px #666 ",
        opacity:"0.8",

        ['@media (min-width:780px)']: {
            width:"280px",
            maxWidth: "290px",
            maxHeight:"120px",
            display: "flex",
            flexDirection:"row",
            alignItems: "center",
            boxShadow: "-1px 5px 7px 1px #666 ",         
  }   
},

    left: {
        height:"auto", display:"flex", minWidth:"200px", flexDirection:"column", alignItems:"space-between", justifyContent:"center", gap:"0.4rem"
    },

    leftLight: {
        height:"auto", display:"flex", minWidth:"200px", flexDirection:"column", alignItems:"space-between", justifyContent:"center", gap:"0.4rem"
    },

    header: {
        padding:"0.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        
    },

    progress: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
         
    },

    progressTypo: {
        fontSize: "0.7rem",
        marginLeft: "-0.2rem",
        padding: 0,
        
    },
    arrow: {
        fontSize: "1.3rem",
        margin: "0",
        padding:0,
    },
    
    content: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems:"space-between",
        gap:"0.3rem"
        
    },
    avatar: {
        border:"1px solid #EDEDED",
        borderRadius: "50%",
        width: "100px",
        height: "100px",
        zoom: "1.2",
        marginBottom:"1.3rem",
        
        ['@media (min-width:780px)']: {
        padding:1,
        border:"1px solid #EDEDED",
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        width: "60px",
            height: "60px",
        }
    },
    social: {
        display: "flex",
        margin: "0 auto",
        justifyContent: "space-around",
        alignItems:"center",
    },

    socialLight: {
        display: "flex",
        margin: "0 auto",
        justifyContent: "space-around",
        alignItems:"center",
    },

    socialIcon: {
        marginRight: "0.2rem !important",
        fontSize:"1rem",
    },
    socialCounter: {
        textAlign: "right !important",
        fontSize:"0.8rem",
    },

    totalContainer: {
       fontSize:"0.8rem",
        position: "absolute",
        right:0,
        bottom:0,
        padding: "0.2rem",
        borderRadius:"0.2rem",
        zIndex: "300",
        textAlign: "center",
        backgroundColor: "var(--color-surface-total-dark)",
        color: "var(--color-text-light)",
        opacity: "1",
        
        ['@media (min-width:780px)']: {
            right:"0 !important"
        }
    },

    totalContainerLight: {
       fontSize:"0.8rem",
        position: "absolute",
        right:0,
        bottom:0,
        padding: "0.2rem",
        borderRadius:"0.2rem",
        zIndex: "300",
        textAlign: "center",
        backgroundColor: "var(--color-surface-total-light)",
        color: "var(--color-text-light)",
        opacity: "1",
        
        ['@media (min-width:780px)']: {
            right:"0 !important"
        }
    },
    
  
});

                        //   facebook: Math.floor(Math.random() * 4000 + 300),
                        //   twitter: Math.floor(Math.random() * 4000 + 300),
                        //   instagram: Math.floor(Math.random() * 4000 + 300),
                        //   youtube:Math.floor(Math.random()*4000 + 300),

function Profile({ name, avatar }) {

    const classes = useStyles();
    const [{bestUser, isDark }, dispatch] = useStateValue();
    const [facebook, setfacebook] = useState(null)
    const [twitter, settwitter] = useState(null)
    const [instagram, setinstagram] = useState(null)
    const [youtube, setyoutube] = useState(null)
const [progress, setprogress] = useState(null)
    const [total, settotal] = useState(null)

    const [previousProgress, setpreviousProgress] = useState(0)



    const getPreviousProgress = () => {
        return progress;
    }

    // INITIAL SOCIAL STATES
useEffect(() => {
   const setSocialsData = () => {
            setfacebook(Math.floor(Math.random() * 4000 + 300))
            settwitter(Math.floor(Math.random() * 4000 + 300))
            setinstagram(Math.floor(Math.random() * 4000 + 300))
            setyoutube(Math.floor(Math.random() * 4000 + 300))
        }

        setSocialsData();
}, [])

    // WILL UPDATE THE TOTAL UPON A SOCIAL CHANGE >>> SEE EFFECT BELOW FOR A FAKE CHANGE
    useEffect(() => {

        const recalculateData = (socialToUpdate) => {
            switch (socialToUpdate) {
                case "fb":
                    setfacebook(previous => previous + progress)
                    break;
                case "twt":
                    settwitter(previous => previous + progress)
                    break;
                case "ins":
                    setinstagram(previous => previous + progress)
                    break;
                case "ytb":
                    setyoutube(previous => previous + progress)
                    break;
            
                default:
                    break;
            }
        }

        const selector = ["fb", "twt", "ins", "ytb"];
        const pickedSocial = shuffle.pick(selector, { 'picks': 1 })
        recalculateData(pickedSocial)
        settotal(facebook + twitter + instagram + youtube + progress);
        
        if (total > bestUser.total) {
            dispatch({
                type: "SET_BEST_USER",
                bestUser: {
                    name: name,
                    facebook:  {facebook} ,
                    twitter: twitter,
                    instagram: instagram,
                    youtube: youtube ,
                    total: total
                }
            })
        }

    }, [progress])
    


    useEffect(() => {
        const random = Math.random();
        random > 0.5 ? setprogress(Math.floor(Math.random() * 1000 + 1)) : setprogress(-Math.floor(Math.random() * 1000 + 1))
        setInterval(() => {
            
            const random = Math.random();
            random > 0.5 ? setprogress(Math.floor(Math.random() * 1000 + 1)) : setprogress(-Math.floor(Math.random() * 1000 + 1))
             
            
        }, 15000);

        settotal(facebook + twitter + instagram + youtube);


        // dispatch({
        //     type: "ADD_USER",
        //     newUser: {
        //         name: name,
        //         avatar: avatar,
        //         facebook: facebook, 
        //         twitter: twitter,
        //         instagram: instagram,
        //         youtube: youtube,
        //         total: total
        //     }
        // })

    }, [])


    
    
    return (
         <div className={`${isDark ? classes.root : classes.rootLight}`}>
            <CardContent className={classes.left}>
                <div className={classes.header}>
                    <Typography className={classes.socialCounter} variant="body1" component="h6">{name}</Typography>
 {progress != 0 && <div className={classes.progress}>{progress < 0 ? <ArrowDropDownOutlinedIcon style={{color:"red"}} className={classes.arrow} /> : <ArrowDropUpOutlinedIcon style={{color:"green"}} className={classes.arrow} />}<Typography className={classes.progressTypo}  variant="body1" component="h6">{progress > 0 ? `+${progress}` : `${progress}`}</Typography></div>}</div>
               <div className={classes.content}>
                    <div className={classes.social}><FacebookIcon className={classes.socialIcon} />
                        
                        
<CountUp className={classes.socialCounter}
  start={facebook-100}
  end={facebook}
  duration={1}
  separator=","
  decimals={0}
  decimal="," ><Typography variant="body1" component="h6">{facebook}</Typography></CountUp></div>
                    
                    
<div className={classes.social}><TwitterIcon className={classes.socialIcon} /><CountUp className={classes.socialCounter}
  start={twitter-100}
  end={twitter}
  duration={1}
  separator=","
  decimals={0}
  decimal="," ><Typography variant="body1" component="h6">{twitter}</Typography></CountUp></div>
                        
<div className={classes.social}><InstagramIcon className={classes.socialIcon} /><CountUp className={classes.socialCounter}
  start={instagram-100}
  end={instagram}
  duration={1}
  separator=","
  decimals={0}
  decimal="," ><Typography className={classes.socialCounter} variant="body1" component="h6">{instagram}</Typography></CountUp></div>
 <div className={classes.social}><YouTubeIcon className={classes.socialIcon} /><CountUp className={classes.socialCounter}
  start={youtube-100}
  end={youtube}
  duration={1}
  separator=","
  decimals={0}
  decimal="," ><Typography variant="body1" component="h6">{youtube}</Typography></CountUp></div>
                </div>
                
            </CardContent>
            <img className={classes.avatar} src={avatar} alt="face" />
 {total &&  <CountUp className={`${isDark ? classes.totalContainer : classes.totalContainerLight}`}
  start={total}
  end={total}
  duration={2.75}
  separator=","
  decimals={0}
                decimal="," ><Typography >Total: {total}</Typography> </CountUp>}
            
        </div>
    )
}

export default Profile
