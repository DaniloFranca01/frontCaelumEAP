import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserCadastro from "./Cadastro"

export default class LoginPage extends React.Component {
  render(){
		return(
			<div className='login-cadastro'>
				<>
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
	      	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>
					<meta charset="utf-8"/>
      	</>
      	<div class="container">
					<div class="d-flex justify-content-center h-100">
						<div class="card">
							<div class="card-header">
								<h3>Sign In</h3>
								<div class="d-flex justify-content-end social_icon">
									<span><i class="fab fa-google-plus-square"></i></span>
								</div>
							</div>
							<div class="card-body">
								<div className='alert-messages'>
									Aqui ficaram as mensagens de falhas e alertas
								</div>
								<form >
									<div class="input-group form-group">
										<div class="input-group-prepend">
											<span class="input-group-text"><i class="fas fa-user"></i></span>
										</div>
										<input id='email' type="text" class="form-control" placeholder="Usuário"/>
									</div>
									<div class="input-group form-group">
										<div class="input-group-prepend">
											<span class="input-group-text"><i class="fas fa-key"></i></span>
										</div>
										<input id='password' type="password" class="form-control" placeholder="Senha"/>
									</div>
									<div class="row align-items-center remember">
										<input type="checkbox"/>Lembrar-me
									</div>
									<div class="form-group">
										<input type="submit" value="Login" class="btn float-right login_btn ra"/>
									</div>
								</form>
							</div>
							<div class="card-footer">
								<div class="d-flex justify-content-center links">
									Ainda não é cadastrado?{<Router><Link to="/cadastro">Inscreva-se</Link></Router>}
								</div>
								<div class="d-flex justify-content-center links">
									<a href="/">Esqueceu sua senha?</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}