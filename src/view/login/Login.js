import React, { Component } from 'react'
import { connect } from 'react-redux'
import {login ,changeValue} from '../../store/actions/auth.action';
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { green } from '@material-ui/core/colors';




const ColorButton = withStyles(theme =>({
    root:{
        color: '#fff',
        backgroundColor: green[500],
        '&:hover' : {
            backgroundColor: green[700]
        }
    }
}))(Button)

export class Login extends Component {
    render() {
        return (
            <div>
                <Container Component="main" maxWidth="xs">
                    <div className="mt-3 mt-md-4">
                        <div className="text-center">
                            <img src="dev.png" maxWidth="200px" ></img>
                            <Typography className="mt-3 font-weight-normal" Component="h2" variant="h6">Criando uma Aplicação com o React e Laravel </Typography>
                        </div>

                        <div className="mt-4">
                                <TextField
                                  variant="outlined"  
                                  margin="normal"
                                  required
                                  fullWidth
                                  id="email"
                                  label="Email"
                                  name="username"
                                  type="email"
                                  value={this.props.credentials.username}
                                  
                                 />

                                <TextField
                                  variant="outlined"  
                                  margin="normal"
                                  required
                                  fullWidth
                                  id="password"
                                  label="Senha"
                                  name="password"
                                  type="password"
                                  value={this.props.credentials.password}
                                  
                                />
                                
                                <Button
                                    type="button"
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                    size="large"
                                    classesName="mb-3 mb-md-4 mt-4"
                                >
                                        Entrar
                                    </Button>
                                    
                                    <Link href="/register">
                                        <ColorButton 
                                        type="button"
                                        fullWidth
                                        size="large"
                                        variant="contained"
                                        className="mt-md-4"
                                        >
                                            Cadastrar
                                        </ColorButton>
                                    </Link>
                                    
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    credentials: state.authReducer.credentials,
    
})

const mapDispatchToProps = dispatch =>({
    login: (credentials) => dispatch(login(credentials)),
    changeValue: (value) => dispatch(changeValue(value))

})
    


export default connect(mapStateToProps, mapDispatchToProps)(Login)
