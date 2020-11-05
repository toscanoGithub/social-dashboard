import Profile from './Profile';
import './App.css';
import { makeStyles, Typography } from '@material-ui/core';
import BestProfile from './BestProfile';
import Hud from './Hud';
import { useStateValue } from './StateProvider';
import { useEffect, useState } from 'react';
import FlipMove from "react-flip-move";
import shuffle from 'shuffle-array';


const appStyles = makeStyles({
  app: {
   transition:"all 0.5s ease",
    width: "100vw",
    height:"100vh",
    backgroundColor: "var(--color-surface-dark)",
    display: "grid",
    gridTemplateColumns: "1fr",
    justifyContent: "center",
    alignItems: "space-around",
    
    
['@media (min-width:780px)']: {
       gridTemplateColumns: "1fr 1fr",
    
  }

  },

  appLight: {
    transition:"all 0.5s ease",
    width: "100vw",
    minHeight: "100vh",
     backgroundColor: "var(--color-surface-light)",
    display: "grid",
    gridTemplateColumns: "1fr",
    justifyContent: "center",
    alignItems: "space-around",
    gap:0,
    
    
['@media (min-width:780px)']: {
       gridTemplateColumns: "1fr 1fr",
    
  }

  },

  topUsers: {
    fontSize:"0.8rem",
    transition: "all 200ms ease",
    fontWeight:"100",
    position: "fixed",
    left: "2rem",
    top: "0.5rem", 
    color: "var(--color-text-light)",
    paddingBottom: "0.4rem",
     borderBottom:"1px solid #555",
  },

  topUsersLight: {
    fontSize:"0.8rem",
    transition: "all 200ms ease",
    fontWeight:"300",
    position: "fixed",
    left: "2rem",
    top: "0.5rem", 
  color: "var(--color-text-dark)",
    paddingBottom: "0.4rem",
     borderBottom:"1px solid #555",
  },

  profiles: {
    paddingRight:"1rem",
    display: "flex",
    overflow: "scroll",
    borderRight: "none",
    marginTop:"2rem",

    ['@media (min-width:780px)']: {
      flexDirection: "column",
      rowGap:"0.2rem",
      height: "90vh",
      width:"300px",
      overflow: "scroll",
      borderBottom: "none",
      borderRight: "1px solid #222",
      

    },
    
    bestProfile: {
      margin:0,
      padding:"0rem",
      display: "grid",
      placeitems: "center",
    }
}
})
function App() {

  const classes = appStyles()
  const [{users, isDark }, dispatch] = useStateValue();

  const [dataUsers, setdataUsers] = useState([])

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
                .then(response => response.json())
                .then(data => {
                    data.results.map(user => {
                      setdataUsers(previous => {
                        return shuffle( [...previous, {
                          id: user.id.value,
                          name: "@" + user.name.last,
                          picture: user.picture.large,
                          
                        }])
                    })
                        
                        
                    }) 


         
                    
                }).catch(error => console.log("Error, failed to fetch data", error));
    
  },[])


  return (
    <div className={`${isDark ? classes.app : classes.appLight}`}>
      <Hud />
       
      <div className={classes.profiles}>
<Typography className={`${isDark ? classes.topUsers : classes.topUsersLight}`} variant="body3" component="h4">Top 10 Users</Typography>
        <FlipMove
          typeName={null}
                enterAnimation="accordionVertical"
          leaveAnimation="none"
          duration={2000}
              >
        {dataUsers && dataUsers.map(user => {
         return <Profile key={user.id?.value} name={user.name}
          avatar={user.picture}
          
        />
        })}
          </FlipMove>
      </div>
<BestProfile />
    </div>
  );
}

export default App;



/*
<Profile name="@toscano"
          avatar="https://images.glaciermedia.ca/polopoly_fs/1.23683275.1553253649!/fileImage/httpImage/image.jpg_gen/derivatives/landscape_804/133402-ftimg-jpg.jpg"
          progress="-100"
          facebook="1000"
          twitter="1000"
          instagram="1000"
          youtube="1000"
          total="400000"
        />
        */