import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider} from "react-redux";
import {Link} from "react-router-dom"
import appStore from './utils/appStore';
// import '@testing-library/jest-dom';

test('renders learn react link', () => {

  render(
    <Link>
    <Provider store={appStore}>
 
  <App />
  
  </Provider>
  </Link>
  );
  
});
