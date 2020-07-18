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

class Admin extends Component {
    state = {
        feedback:[]
    }//end state

    componentDidMount(){
        console.log('admin mounted');
        axios.get('/feedback').then((response)=>{
            console.log(response.data)
            this.setState({feedback: response.data})
        }).catch((error)=>{
            console.log('error on GET:', error)
            alert('Can not get feedback from server at this time')
        })//end axios
    }//end componentDidMount

    render() {
      return (
          <div>
              <h3>Admin portal: Feedback Results</h3>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Feeling</TableCell>
                            <TableCell>Comprehension</TableCell>
                            <TableCell>Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell>Delete</TableCell>
                            <TableCell>Flag</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.feedback.map((feedback, index) => (
                            <TableRow key = {index}>
                            <TableCell>{feedback.feeling}</TableCell>
                            <TableCell>{feedback.understanding}</TableCell>
                            <TableCell>{feedback.support}</TableCell>
                            <TableCell>{feedback.comments}</TableCell>
                            <TableCell><Button><DeleteIcon /></Button></TableCell>
                            <TableCell><Button color="secondary"><ReportIcon /></Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
          </div>
        );//end return
    }//end render
 }//end class
  
export default Admin;