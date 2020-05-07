import { hot } from 'react-hot-loader/root';
import * as React from 'react';
// import './App';
interface IAppProps {}

const App: React.SFC<IAppProps> = ({children}) => {
return <>{children}</>;
}

App.defaultProps = {};

export default hot(App);