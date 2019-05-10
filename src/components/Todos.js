import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
class Todos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.todos);
        return this.props.todos.map((todo)=>(
           <TodoItem key={todo.id} todo={todo} />
        ));
    }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
