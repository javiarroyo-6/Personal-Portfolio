import React ,{ Component } from 'react';
import {Grid , Cell} from 'react-mdl';


class LandingPage extends Component {
    render(){
        return(
            <div style={{ width: '100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_businessman_old-512.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1> Web/Mobile Developer </h1>
                            <hr />
                            <p> | HTML/CSS | JavaScript | React | React Native | Firebase | </p>

                            <div className="social-links">
                                {/*LinkedIn */}
                                <a href="https://www.linkedin.com/in/javier-arroyo-2823a5130/" target="__blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/*Github */}
                                <a href="https://github.com/javiarroyo-6" target="__blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/*DevPost */}
                                <a href="https://devpost.com/javiarroyo-6?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="__blank">
                                    <i className="fa fa-code" aria-hidden="true" />
                                </a>
                                
                            
                            </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;