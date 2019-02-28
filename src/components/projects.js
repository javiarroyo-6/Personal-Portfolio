import React ,{ Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card ,CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl'


class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeTab: 0    
        };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle 
                        style={{color:'black', height:'176px', background:'url(https://www.shareicon.net/download/2016/07/08/117367_logo.ico) center / cover'}}
                        >Hope With Henna</CardTitle>
                        <CardText> Something about the project here</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'black'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle 
                        style={{color:'black', height:'176px', background:'url(https://www.shareicon.net/download/2016/07/08/117367_logo.ico) center / cover'}}
                        >Hope With Henna</CardTitle>
                        <CardText> Something about the project here</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'black'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle 
                        style={{color:'black', height:'176px', background:'url(https://www.shareicon.net/download/2016/07/08/117367_logo.ico) center / cover'}}
                        >Hope With Henna</CardTitle>
                        <CardText> Something about the project here</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'black'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if( this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle 
                        style={{color:'black', height:'176px', background:'url(https://www.shareicon.net/download/2016/07/08/117367_logo.ico) center / cover'}}
                        >Plush Karaoke</CardTitle>
                        <CardText> Something about the project here</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'black'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle 
                        style={{color:'black', height:'176px', background:'url(https://www.shareicon.net/download/2016/07/08/117367_logo.ico) center / cover'}}
                        >Plush Karaoke</CardTitle>
                        <CardText> Something about the project here</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'black'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle 
                        style={{color:'black', height:'176px', background:'url(https://www.shareicon.net/download/2016/07/08/117367_logo.ico) center / cover'}}
                        >Plush Karaoke</CardTitle>
                        <CardText> Something about the project here</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'black'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if ( this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle 
                        style={{color:'black', height:'176px', background:'url(https://www.shareicon.net/download/2016/07/08/117367_logo.ico) center / cover'}}
                        >Custom Maids</CardTitle>
                        <CardText> Something about the project here</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'black'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle 
                        style={{color:'black', height:'176px', background:'url(https://www.shareicon.net/download/2016/07/08/117367_logo.ico) center / cover'}}
                        >Custom Maids</CardTitle>
                        <CardText> Something about the project here</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'black'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle 
                        style={{color:'black', height:'176px', background:'url(https://www.shareicon.net/download/2016/07/08/117367_logo.ico) center / cover'}}
                        >Custom Maids</CardTitle>
                        <CardText> Something about the project here</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'black'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
                
            )
        }
    }

   

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>React Native</Tab>
                    <Tab>Firebase</Tab>
                </Tabs>
                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                
            </div>
        )
    }
}

export default Projects;