import React,{Component} from 'react';
import {connect} from 'react-redux';
import './Output.css'
import {removeReminder} from '../actions';

class OUTPUT extends Component {
  constructor(props){
  	super(props);
  	this.state = {};
    this.onClick = this.onClick.bind(this)
  }
      onClick(index){
        this.props.removeReminder(index);
      }
    renderDOM(value,index){
      return(
        <li key={index}>
          <h3>{value.text}</h3>
          <h4>{value.date}</h4>
          <span
          onClick={() => {this.onClick(index)}}
          className="glyphicon glyphicon-remove"></span>
        </li>
      )
    }
    render() {
        if(!this.props.reminder){
          return <div>Loading</div>
        }
        return (
            <div className='Output'>
              <ul>
                {this.props.reminder.map(this.renderDOM.bind(this))}
              </ul>
            </div>
        );
    }
}

function mapStateToProps({reminder}) {
  return{reminder}
}

export default connect(mapStateToProps,{removeReminder})(OUTPUT)
