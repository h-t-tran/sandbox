import * as React from 'react';
import * as TestUtils from 'react-dom/test-utils';
import Foobar from '../src/homepage/Foobar';
import * as ReactDOM from 'react-dom';

it('App is rendered', () => {

  // Render App in the document
  const appElement: any = TestUtils.renderIntoDocument(
    <Foobar/>
  );
  //
  const appNode = ReactDOM.findDOMNode(appElement);

  console.log("appNode.textContent = ", appNode.textContent);
  //
  // // Verify text content
  expect(appNode.textContent).not.toBe(null);
});


