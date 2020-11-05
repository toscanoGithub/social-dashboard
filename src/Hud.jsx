import { makeStyles, Switch, Typography } from '@material-ui/core'
import React from 'react'
import { useStateValue } from './StateProvider'

const useStyle = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        left: 0,
        top:0,
        backgroundColor:"transparent", // "var(--color-surface-light)",
        zIndex:"500",
        color: "white",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight:"1rem",
    },

    rootLight: {
        width: "100%",
        position: "fixed",
        backgroundColor: "transparent", // "var(--color-surface-dark)",
        zIndex:"500",
        color: "white",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        // borderBottom: "1px solid #111",
    },
    toggleText: {
        fontWeight:"bold",
        color: "var(--color-text-dark)",
        fontSize: "0.8rem",
        cursor: "pointer",
    },

    toggleTextLight: {
        fontWeight:"bold",
        marginRight:"1rem !important",
        color: "var(--color-text-light)",
        fontSize: "0.8rem",
        cursor: "pointer",
    },

    changeThemeText: {
        fontSize:"0.8rem",
    },

    
    hudContent: {
        
}

})
const Hud = () => {

    const [{isDark}, dispatch] = useStateValue()
    const [state, setState] = React.useState({
    checkedA: false,
    checkedB: true,
  });

  const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
      
      dispatch({
          type: "SET_THEME",
          isDark: !state.checkedA
      })

      console.log('====================================');
      console.log(isDark);
      console.log('====================================');
  };

    const classes = useStyle()
    return (
        <div className={`${isDark ? classes.root : classes.rootLight}`}>
           
            <div className={classes.hudContent}>
                
                <Typography className={classes.toggleTextLight} style={{visibility: `${isDark ? "visible" : "hidden"} `}}   variant="body1" component="body1">Light</Typography>

                <Switch   
                    
                    color="tertiary"
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'primary checkbox' }}
                >



                </Switch>
                <Typography className={classes.toggleText} style={{visibility: `${isDark ? "hidden" : "visible"} `, marginRight:"0.6rem"}}    variant="body1" component="body1">Dark</Typography>


            </div>

        </div>
    )
}

export default Hud
