import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
<<<<<<< HEAD
import {Helmet} from 'react-helmet'
=======

>>>>>>> cb9fee3b4e286ed1f248c6217ac64d2c15a1b575

import './App.css';


// Add comps
import Nav from './components/Nav/Nav'
import Index from './components/Index/index'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import BlogPage from './components/Blog/BlogPage'
import Projects from './components/Projects'


class App extends Component{

  render(){

    return (

        <Router>
          <div >
<<<<<<< HEAD
          <Helmet>
            <title>Ruse</title>
            <meta name="description" content="An indirect means to gain an end. Ruse may imply deception,
                  illusion, and either an evil or harmless end." />
          </Helmet>
          <Nav />
=======
         <Nav />
>>>>>>> cb9fee3b4e286ed1f248c6217ac64d2c15a1b575
            <Switch>
              <Route path ="/" exact component={Index} />
              <Route path ="/about" exact component={About} />
              <Route path ="/projects" exact component={Projects} />
              <Route exact path = "/blogs"  component={Blog} />
              <Route  path={"/blogs/:slug"} component={BlogPage}/>
            </Switch>
          </div>
        </Router>
    );
  }
}



export default App;
