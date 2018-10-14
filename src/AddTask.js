import React, { Component } from 'react';


class AddTask extends Component {

    state = {
        title: '',

    }

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state);
        this.setState({
            title: '',
        })

    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="new-task">New task:</label>
                        <input
                            id="new-task"
                            className="form-control"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.title}
                            disabled={this.props.disabled}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTask;

