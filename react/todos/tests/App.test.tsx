import * as React from 'react';
//import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
//import { App as TodoApp } from '../app/containers/App';
import Foobar from "../src/homepage/Foobar";

it('2 should be equal to 2', () => {
    //
    // Arrange
    //

    //
    // Act
    //

    //
    // Assert
    //
    expect(2).toBe(2);
});


it('App is rendered', () => {
  //
  // Arrange
  //

  //
  // Act
  //
  // Render App in the document
  const appElement: any = TestUtils.renderIntoDocument(
    <Foobar/>
  );
  //
  // const appNode = ReactDOM.findDOMNode(appElement);
  //
  // //
  // // Assert
  // //
  //
  expect(appElement.textContent).not.toBe(null);
});
