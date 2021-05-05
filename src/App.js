import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import YouForm from './component/youStartForm/YouForm';
import YouStartHome from './component/youStartHome/YouStartHome';
import './App.css';
import Trending from './component/Layout/Trending/Trending';

class App extends React.Component{

  render(){
    return(
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={YouStartHome} />
            <Route exact path="/home" component={YouStartHome} />
            <Route exact path="/postYouVideo" component={YouForm} />
            <Route exact path="/trending" component={Trending} />
          </Switch>
          <div className='whatsapp'>
            <Link
              target='_blank'
              to={{
                pathname: 'https://api.whatsapp.com/send?phone=919047609410'
              }}
            >
              <img
                src='https://www.freepnglogos.com/uploads/whatsapp-logo-png-photo-3.png'
                alt='no'
              />
            </Link>
          </div>
        </Router>
      </>
    )
  }
}

export default App;