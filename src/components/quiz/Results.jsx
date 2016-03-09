import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Results extends Component{
	
	render() {
		var percent = (this.props.score / this.props.questions.length * 100);
		if (percent > 80) {
			var message = 'Awsome Job!';
		}
		else if (percent < 80 && percent > 60) {
			message = 'You did ok';
		} else {
			message = 'You did horrible!';
		}
	    return (
	        <div className="well">
	            <h4>You got {this.props.score} out of {this.props.questions.length} Correct! </h4>
	            <h1>{percent}% - {message}</h1>
	            <hr />
	            <a href="/app">Take again></a>
	        </div>
	    )
	}
}

export default Results