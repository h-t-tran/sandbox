import * as React from 'react';
import  "./style.scss";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { TodoActions } from 'app/actions';
import { RootState } from 'app/reducers';
import { TodoModel } from 'app/models';
import { omit } from 'app/utils';
import { Header, TodoList, Footer } from 'app/components';



export namespace App {
  export interface Props extends RouteComponentProps<void> {
    todos: RootState.TodoState;
    actions: TodoActions;
    filter: TodoModel.Filter;
  }
}


export class App extends React.Component<App.Props> {
  static defaultProps: Partial<App.Props> = {
    filter: TodoModel.Filter.SHOW_ALL
  };

  constructor(props: App.Props, context?: any) {
    super(props, context);
  }

  render() {

    return (
      <div className="normal">
        test
      </div>
    );
  }
}
