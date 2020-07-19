import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import FlagIcon from '@material-ui/icons/Flag'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

class Admin extends Component {
    state = {
        feedback:[],
        open: false,
        id: null,
    }//end state

    componentDidMount(){
        console.log('admin mounted');
        this.getFeedback();
    }//end componentDidMount

    getFeedback = () => {
        axios.get('/feedback').then((response)=>{
            console.log(response.data)
            this.setState({
                feedback: response.data,
                open: false,
                id: null})
        }).catch((error)=>{
            console.log('error on GET:', error)
            alert('Can not get feedback from server at this time')
        })//end axios
    }//end getFeedback

    handleDelete =() =>{
        this.handleClose();
        axios.delete('/feedback/' + this.state.id)
        .then((response)=>{
            console.log('response from DELETE:', response);
            this.getFeedback();
        }).catch((error)=>{
            alert('Can not delete from database at this time. See console for details.');
            console.log('error on DELTE:', error);
        })//end DELETE
    }//end handleDelete

    handleReport = (event) => {
        console.log('reporting:', event.currentTarget.name) 
        let id = event.currentTarget.name;
        axios.put('/feedback/' + id)
        .then((response)=>{
            console.log('successful PUT response:', response);
            this.getFeedback();
        }).catch((error)=>{
            alert('Can not update database at this time');
            console.log('error on PUT', error);
        })//end axios PUT
    }//end handleReport

    handleClickOpen = (event) => {
        console.log('deleting:', event.currentTarget.name)
        let id = event.currentTarget.name;
        // I'm capturing the id in state since I won't be able to target the original button
        // from the dialogue.  The open/closed part of state is for the Dialogue
        this.setState({ 
            ...this.state.feedback,
            open: true,
            id: id,
         });
    };//end handleClickOpen
    
    handleClose = () => {
    this.setState({ 
        ...this.state.feedback,
        ...this.state.id,
        open: false });
    };



    render() {
      return (
          <div>
              <h3>Admin Portal Feedback Results</h3>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Feeling</TableCell>
                            <TableCell>Comprehension</TableCell>
                            <TableCell>Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell>Delete</TableCell>
                            <TableCell>Flag</TableCell>
                            <TableCell>Flagged?</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.feedback.map((feedback, index) => (
                            <TableRow key = {index}>
                            <TableCell>{feedback.feeling}</TableCell>
                            <TableCell>{feedback.understanding}</TableCell>
                            <TableCell>{feedback.support}</TableCell>
                            <TableCell>{feedback.comments}</TableCell>
                            <TableCell>
                                <Button size = "large" name ={feedback.id} onClick = {this.handleClickOpen}>
                                    <DeleteIcon />
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button color="secondary" size = "large" name ={feedback.id} onClick = {this.handleReport}>
                                    <ReportIcon />
                                </Button>
                            </TableCell>
                            <TableCell>{feedback.flagged ? <p><FlagIcon /></p>: <p> </p> }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure you want to delete that feedback from the database forever?
                        </DialogContentText>
                        </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                    no, save this!
                    </Button>
                    <Button onClick={this.handleDelete} color="primary" autoFocus>
                    Yes, delete this feedback!
                    </Button>
                </DialogActions>
             </Dialog>
          </div>
        );//end return
    }//end render
 }//end class
  
export default Admin;