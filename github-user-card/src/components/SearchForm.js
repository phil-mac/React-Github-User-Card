import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


class SearchForm extends React.Component{
    state = {
        searchText: ''
    }

    handleChange = e => {
        // console.log(e.target.value);
        this.setState({
            searchText: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('submit form: ' + this.state.searchText);
        this.props.setUserName(this.state.searchText);
    }

    render(){
        return(
            <Paper style={{width:'300px', margin: '2rem auto'}}>
                <form onSubmit={this.handleSubmit} style={{display: 'flex', justifyContent: 'space-between'}}>
                    <FormControl style={{margin: '10px'}} >
                        <InputLabel htmlFor="input-with-icon-adornment">Enter a Github Username</InputLabel>
                        <Input
                            id="input-with-icon-adornment"
                            onChange={this.handleChange}
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Button type='submit' color='primary' variant='contained' style={{margin: '5px'}}>Go</Button>
                </form>
            </Paper>
            
        )
    }
    
}

export default SearchForm;