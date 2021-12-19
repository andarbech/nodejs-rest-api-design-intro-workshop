
import './App.css';
import Header from './containers/Header';
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import BookListing from './containers/BookListing';
import BookDetail from './containers/BookDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header /> 
        <Switch>
          <Route path="/" exact component={BookListing} />
          <Route path="/book/:bookId" exact component={BookDetail} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
