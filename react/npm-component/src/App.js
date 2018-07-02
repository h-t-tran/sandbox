import React from 'react';

// I got this warning: "Component should be written as a pure function".
// Rewrite it as
//    export default const App = () => {  }
// doesn't work.  So I disable ESLint for this line.
// eslint-disable prefer-stateless-function
/* eslint-disable */
// export default class App extends Component {
// /* eslint-enable */
//     render() {
//         return (
//             <div>This is a component</div>
//         );
//     }
// }

const App = () => (
  <div>This is a component 2</div>
);

export default App;


// const App = ({ classes }) => (
//   <div className={classes.root}>
//     <MenuDrawer />
//     <Grid container alignItems="stretch" direction="column" justify="flex-start">
//       <RibbonContainer />
//       <TempWorkspace />
//     </Grid>
//     <PanelDrawer />
//   </div>
// );
// export default withStyles(styles, { withTheme: true })(App);
