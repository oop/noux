![](https://raw.githubusercontent.com/oop/noux/master/demo/public/logo.png)

Noux [![npm version](https://badge.fury.io/js/noux.svg)](https://badge.fury.io/js/noux)
-
#### 📦 Small, Easy and Fast State Management for React.JS
### Install
    npm i noux --save

### About
**Noux** is using *Pub/Sub pattern* with **[PubSubJS](https://github.com/mroderick/PubSubJS)** library. You don't need to implement Reducers, Actions, and other complex concepts to manage the component states.
<br/>**Note:** This is an *alpha version* and it still needs some *improvements*.

#### Check the live **[demo](https://codesandbox.io/s/l329pr2467?view=preview)**.

### Usage

#### Declaring Noux
Import and declare Noux in your main component.
```javascript
import noux from 'noux';

class Main extends Component {
    constructor() {
        super();
        this.noux = new noux({
            log: false // Optional [default: true]
        });
    }
}
```

#### Initialization in a sub component
Initialize Noux in every new component.
```javascript
class SubComponent extends Component {
    constructor(props) {
        super();
        this.noux = props.noux;
        this.noux.init({
            name: 'SubComponent',
            self: this
        });
    }
}
```

#### Passing Noux as props
Pass Noux into new components as props.
```javascript
<SubComponent noux={this.noux}/>
```

### Methods

#### init()
To initialize Noux you have to call "noux.init" function. You can use this in any component.
```javascript
this.noux.init({
    name: '<current_component_name>',
    self: this
});
```

#### state()
Get the value of a specific state from the component.
###### Single state:
```javascript
this.noux.state({
    target: "<component_name>",
    state: "<state_name>"
})
```
###### Multiple states:
```javascript
this.noux.state({
    target: "<component_name>",
    state: ["<state_one>", "<state_two>", "<state_three>"]
})
```

#### setState()
Set the value of a specific state from the component.
```javascript
this.noux.setState({
    target: "<component_name>",
    state: "<state_name>",
    value: "<state_value>"
});
```

#### all()
Get the all connected components and states as object.
```javascript
this.noux.all()
```

#### revoke()
Remove the connected component from Noux.
```javascript
this.noux.revoke({
    target: "<component_name>"
})
```

### Contributing
* Fork the project.
* Make your feature addition or bug fix.
* Send me **a pull request**.

[![Edit l329pr2467](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/l329pr2467?view=preview)
###### Developed by [@rufatmammadli](https://twitter.com/rufatmammadli)