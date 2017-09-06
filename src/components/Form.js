import React,{Component} from 'react';
import './Form.css';
import {addReminder,removeAllReminder} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import OUTPUT from './Output'

 class FORM extends Component {
   constructor(props){
   	super(props);
   	this.state = {text:'',date:''};
   }
   onChange(e){
     this.setState({text:e.target.value})
   }
   onChangeDate(e){
     this.setState({date:e.target.value})
   }
   onSumbit(e){
     e.preventDefault();
     if(this.state.text.length >= 1){
       this.props.addReminder(this.state.text,this.state.date)
     }
     this.setState({text:'',date:''})
   }
   removeAll(){
     this.props.removeAllReminder();
   }
    render() {
        return (
            <div className="Form" onSubmit={this.onSumbit.bind(this)}>
              <h1>Reminder Pro</h1>
              <form className="form-inline">
              <div className="form-group">
                <label>Name</label>
                <input
                type="text"
                className="form-control"
                id="reminder"
                value={this.state.text}
                onChange={this.onChange.bind(this)}
                placeholder="I have to do..."/>
                <input
                type="datetime-local"
                className="form-control"
                id="dataTime"
                value={this.state.date}
                onChange={this.onChangeDate.bind(this)}
                />
              </div>
              <button type="submit" className="btn btn-default">Add</button>
            </form>
            <OUTPUT/>
            <button
            onClick={this.removeAll.bind(this)}
            >Clear All</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addReminder,removeAllReminder},dispatch)
}



export default connect(null,mapDispatchToProps)(FORM)
