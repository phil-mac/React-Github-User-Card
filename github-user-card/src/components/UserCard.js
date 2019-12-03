import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    // maxWidth: 345,
    maxWidth: 500,
    margin: '2rem auto'
  },
  media: {
    height: 540,
  },
});

export default (props) => {
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={props.userData.avatar_url}
                title="profile picture"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.userData.login}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.userData.bio}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>

        // <div style={{border: '1px solid black'}}>
        //     <img src={props.userData.avatar_url} alt={`profile picture`}/>
        //     <h3>{props.userData.login}</h3>
        // </div>
    )
}