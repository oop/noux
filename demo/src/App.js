import React, {Component} from 'react';
import './App.css';
import noux from '../../';
import CompA from './components/compA/compA';
import CompB from './components/compB/compB';

class App extends Component {
    constructor() {
        super();
        this.state = {
            welcomeTxt: 'Welcome to Noux!',
            secretVal1: '',
            secretVal2: ''
        };
        this.noux = new noux({
            log: true
        });

        this.noux.init({
            name: 'main',
            self: this
        });
    }

    componentDidMount() {
        this.setState({secretVal1: this.noux.state({target: "compA", state: "message"})});
        this.setState({secretVal2: this.noux.state({target: "compB", state: "message"})});

        console.warn("Calling the all() method:");
        console.warn(this.noux.all());
        console.log("");
        console.warn("Getting multiple states:");
        console.warn(this.noux.state({target: "compA", state: ['message', 'text']}));
        console.warn(this.noux.state({target: "compB", state: ['message', 'text']}));
    }

    applyBtn() {
        this.noux.setState({
            target: "compA",
            state: "text",
            value: "It worked! [A]"
        });
        this.noux.setState({
            target: "compB",
            state: "text",
            value: "It worked! [B]"
        });
    }

    resetBtn() {
        this.setState({welcomeTxt: 'Welcome to Noux!'});
        this.noux.setState({
            target: "compA",
            state: "text",
            value: "I'm component A."
        });
        this.noux.setState({
            target: "compB",
            state: "text",
            value: "I'm component B."
        });
    }

    render() {
        setTimeout(() => {
            this.setState({secretVal1: this.noux.state({target: "compA", state: "message"})});
        }, 2000);
        setTimeout(() => {
            this.setState({secretVal2: this.noux.state({target: "compB", state: "message"})});
        }, 3000);

        return (
            <div className="App">
                <header className="App-header">
                    <img src={'./logo.png'} alt={'logo'}/>
                    {this.state.welcomeTxt}
                    <label className={'Title'}>Component A:</label><br/>
                    this.state: {this.state.secretVal1}<br/>
                    this.setState: <CompA noux={this.noux}/>

                    <label className={'Title'}>Component B:</label><br/>
                    this.state: {this.state.secretVal2}<br/>
                    this.setState: <CompB noux={this.noux}/>
                    <br/><br/><br/>
                    <div style={{display: 'flex'}}>
                        <button className={'Action-button'} onClick={() => this.applyBtn()}>Set</button>
                        <button className={'Action-button'} onClick={() => this.resetBtn()}>Reset</button>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
