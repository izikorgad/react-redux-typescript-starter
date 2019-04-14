import * as React from 'react';
import * as _ from 'lodash';
import { connect } from 'react-redux';
// import { Route, Switch } from 'react-router-dom';
import { doSomething } from './redux/actions';
const styles = require('./styles.scss');

export interface AppProps {
    msg: string;
    doSomething(msg: string);
}

export interface AppState {
    counter: number;
}

class App extends React.Component<AppProps, AppState> {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ counter: this.state.counter + 1 }, () => {
            this.props.doSomething(`New msg counter: ${this.state.counter}`);
        });
    }

    render() {

        return (
            <div className={ styles.app }>
                <h1>Home</h1>
                <p>{ this.props.msg }</p>
                <p>
                    <button onClick={ this.handleClick }>Change</button>
                </p>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        msg: state.app.msg
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        doSomething: (msg) => dispatch(doSomething(msg)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);