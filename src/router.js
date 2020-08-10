import React from "react";
import { Route, BrowserRouter, Switch} from "react-router-dom";

import NavigationBar from "./layout/NavigationBar";
import SlideMenu from "./layout/SlideMenu";

import HomeIndex from "./home";
import BlogIndex from "./blog";
import ResumeIndex from "./resume";
import UserIndex from './user';

class AppRouter extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <div class="app-container">
                    <NavigationBar />
                    <div class="app-content">
                        <SlideMenu />
                        <div class="container">
                            <Switch>
                                <Route exact path="/" component={HomeIndex} />
                                <Route exact path="/resume" component={ResumeIndex} />
                                <Route path="/blog" component={BlogIndex} />
                                <Route path="/user" component={UserIndex} />
                            </Switch>
                        </div>
                    </div>
                </div>
                
            </BrowserRouter>
            
        )
    }
}

export default AppRouter;