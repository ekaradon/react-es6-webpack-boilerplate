import React, {Component} from 'react';

const data = [1, 2, 3, 4];

function Bar({number}) {
    return <div>Number is {number}</div>
}

function Foo({item}) {

    function give_number_through_a_fake_function() {
        return item;
    }

    function render_bug() {
        return (
            <div>
                <div>Here the bug</div>
                <Bar number={item}/>
            </div>
        );
    }

    return (
        <div>
            The bug will occur
            {render_bug()}
        </div>
    );
}

function render_as_foo(item) {
    return <Foo item={item}/>;
}

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                {data.map(render_as_foo)}
            </div>
        );
    }
}
