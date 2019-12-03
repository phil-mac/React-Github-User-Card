import React from 'react';
import UserCard from './UserCard';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper';

// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
    root: {
        width: 500,
        margin: '2rem auto'
    //   display: 'flex',
    //   flexWrap: 'wrap',
    //   justifyContent: 'space-around',
    //   overflow: 'hidden',
    //   backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 700,
    //   backgroundColor: theme.palette.background.paper,
      
    },
  }));

export default (props) => {

    const classes = useStyles();

    return(
        <Paper className={classes.root}>
            <GridList cellHeight={280} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">Followers</ListSubheader>
                </GridListTile>
                {props.followers.map(tile => (
                <GridListTile key={tile.avatar_url}>
                    <img src={tile.avatar_url} alt={tile.login} />
                    <GridListTileBar
                    title={tile.login}
                    subtitle={<span>{tile.id}</span>}
                    />
                </GridListTile>
                ))}
            </GridList>
        </Paper>
        
        // <div>
        //     followers
        //     {
        //         props.followers.map(user => <UserCard userData={user} key={user.id}/>)
        //     }
        // </div>

        
    )
}