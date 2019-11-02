import React from 'react';

export default class UserCadastro extends React.Component {
	render(){
		return(
			<div className="login-cadastro">
				<>
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
					<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"/>
					<meta charset="utf-8"/>
				</>
				<div className="container">
					<div className="d-flex justify-content-center h-100">
						<div className="card-cadastro">
							<div className="card-header">
								<h3>Cadastro</h3>
							</div>
							<div className="card-body">
								<form>
									<div className="input-group form-group">
										<input id="email" type="text" className="form-control" placeholder="Email"/>
									</div>
									<div className="input-group form-group">
										<input id ="password" type="password" className="form-control" placeholder="Senha (no mínimo 6 caracteres)"/>
									</div>
									<div className="input-group form-group">
										<input id = "password_confirmation" type="password" className="form-control" placeholder="Confirme a senha"/>
									</div>
									<div className="input-group form-group">
										<input id="nome" type="text" className="form-control" placeholder="Nome"/>
									</div>
									<div className="input-group form-group cargos">
										<select id="cargo" name="cargos">
											<option>Selecione o seu cargo</option>
											<option value="enfermeiro">Enfermeiro</option>
											<option value="fisioterapeuta">Fisioterapeuta</option>
											<option value="medico">Médico</option>
											<option value="nutricionista">Nutricionista</option>
										</select>
									</div>
									<div className="input-group form-group">
										<input id="documento" type="text" className="form-control" placeholder="Documento"/>
									</div>
									<div className="form-group">
										<input type="submit" value="Enviar" className="btn float-right login_btn"/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}