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

class Admin extends Component {
    state = {
        feedback:[]
    }//end state

    componentDidMount(){
        console.log('admin mounted');
        this.getFeedback();
    }//end componentDidMount

    getFeedback = () => {
        axios.get('/feedback').then((response)=>{
            console.log(response.data)
            this.setState({feedback: response.data})
        }).catch((error)=>{
            console.log('error on GET:', error)
            alert('Can not get feedback from server at this time')
        })//end axios
    }//end getFeedback

    handleDelete =(event) =>{
        console.log('deleting:', event.currentTarget.name)
        //name is a string of the index, need to add 1 and change it to number
        let id = Number(event.currentTarget.name) + 1;
        axios.delete('/feedback/' + id)
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
        //the name is the index, we have to add 1 so we get the id
        //id counts from 1, index counts from 0
        let id = Number(event.currentTarget.name) + 1;
        axios.put('/feedback/' + id)
        .then((response)=>{
            console.log('successful PUT response:', response);
            this.getFeedback();
        }).catch((error)=>{
            alert('Can not update database at this time');
            console.log('error on PUT', error);
        })//end axios PUT
    }//end handleReport

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
                                <Button size = "large" name ={index} onClick = {this.handleDelete}>
                                    <DeleteIcon />
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button color="secondary" size = "large" name ={index} onClick = {this.handleReport}>
                                    <ReportIcon />
                                </Button>
                            </TableCell>
                            <TableCell>{feedback.flagged ? <p><FlagIcon /></p>: <p> </p> }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
          </div>
        );//end return
    }//end render
 }//end class
  
export default Admin;