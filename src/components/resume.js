import React ,{ Component } from 'react';
import { Grid , Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills'


class Resume extends Component {
    render(){
        return(
            <div>
               <Grid>
                   <Cell col={4}> 
                    <div style={{textAlign: 'center'}}>
                        <img 
                           src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                           alt='avatar'
                           style={{height:'200px'}} 
                        />
                    </div>
                    <h2 style={{paddingTop:'2em'}}>Javier Arroyo</h2>
                    <h4 style={{color:'grey'}}>Programmer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged.
                    </p>
                    <hr style={{borderTop: '3px solid #833fb2', width:'50%'}} />
                    <h5>Address</h5>
                    <p>12752 Newport Ave</p>
                    <h5>Phone</h5>
                    <p>(714) 791-3034</p>
                    <h5>Email</h5>
                    <p>arroyoj3@uci.edu</p>
                    <h5>Website</h5>
                    <p>https://javierarroyoheroku.com</p>
                    <hr style={{borderTop: '3px solid #833fb2', width:'50%'}} />
                   </Cell>
                   <Cell className="resume-right-col" col={8}> 
                        <h2>Education</h2>
                        <Education 
                          startYear={2018}
                          endYear={2018}
                          schoolName="University of California, Irvine Division of Continuing Education"
                          schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                          It has survived not only five centuries, but also the leap into electronic typesetting, 
                          remaining essentially unchanged."
                        />
                        
                        <hr style={{ borderTop:'3px solid #e229'}}/>

                        <h2>Experience</h2>

                        <Experience 
                            startYear={2018}
                            endYear={2018}
                            jobName='First Job'
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged."
                        />
                        <Experience 
                            startYear={2018}
                            endYear={2018}
                            jobName='First Job'
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged."
                        />

                        <hr style={{ borderTop:'3px solid #e229'}}/>

                        <h2>Skills</h2>

                        <Skills
                            skill="Javascript"
                            progress={100}
                        />

                        <Skills
                            skill="React"
                            progress={80}
                        />

                        <Skills
                            skill="React Native"
                            progress={70}
                        />



                   </Cell>
               </Grid>
            </div>
        )
    }
}

export default Resume;