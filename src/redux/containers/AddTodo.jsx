import { connect } from "react-redux";
import * as actions from '../actions/index'
import TodosRedux from "../components/TodosRedux";

const mapStateToProps = state => ({
  todo: state.todo,
})

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(actions.addTodo(todo)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosRedux)