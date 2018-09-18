import React, { Component } from 'react';
import Wrapper from '../../components/Wrapper/Wrapper'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import Search from '../../components/Search/Search'


class Home extends Component {

    state = { images: [
            { alt: 'aatrox', url: '../images/aatrox.jpg' },
            { alt: 'aatrox', url: '../images/aatrox.jpg' }
        ]
     }
      render() {
        return (
            <Grid>
                <Row className='show-grid'>
                    <Col xs={6} md={4}>
                        {/* Empty column to center search bar */}
                    </Col>
                    <Col xs={6} md={4} style={{marginTop:'450px'}}>
                        <Search/>
                        <Button bsStyle='default'>Search Summoner</Button>
                    </Col>
                </Row>
            </Grid>
        )
      }
    }
               
                
    
   
  
    
  
export default Home;
     