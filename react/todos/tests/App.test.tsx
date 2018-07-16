import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import App from '../src/homepage/Foobar'
//import App from '../src/app/containers/App2/Foobar';

it('App is rendered', () => {
  // Render App in the document
  const appElement: App = TestUtils.renderIntoDocument(
    <App/>
  );

  const appNode = ReactDOM.findDOMNode(appElement);

  // Verify text content
  //expect(appNode.textContent).toEqual('Hello World!Foo to the barz');
  expect(appNode.textContent).not.toBe(null);
});


// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import * as TestUtils from 'react-dom/test-utils';
// import App from '../src/app/containers/App/Foobar';
//
// it('App is rendered', () => {
//   // Render App in the document
//   const appElement: App = TestUtils.renderIntoDocument(
//     <App/>
//   );
//
//   const appNode = ReactDOM.findDOMNode(appElement);
//
//   // Verify text content
//   //expect(appNode.textContent).toEqual('Hello World!Foo to the barz');
//   expect(appNode.textContent).not.toBe(null);
// });
