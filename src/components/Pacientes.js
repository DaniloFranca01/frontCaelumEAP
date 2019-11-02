import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class PacientesPage extends React.Component{
	render(){
		return(
			<div>
				<>
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
				</>
				<nav className="navbar navbar-expand-md navbar-light bg-warning text-dark">
					<button className="responsive-btn" type="button" data-toggle="collapse" data-target="#side-menu">
						<span className="navbar-toggler-icon"></span>
					</button>
					<a className="navbar-brand" href="#">
						<img src="" width="30" height="30" className="d-inline-block align-top" alt=""/>
						<span className="menu-collapsed">CaelumEAP</span>
					</a>
					<div className="collapse navbar-collapse" id="side-menu">
						<div className="navbar-nav ml-auto">
							<div class="dropdown">
								<button class="dropbtn">Current User</button>
								<div class="dropdown-content">
									<a href="#">Editar Perfil</a>
									<a href="#">Sair</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
				<div className="row" id="body-row">
					<div id="sidebar-container" className="sidebar-expanded d-none d-md-block">
						<ul className="list-group">
							<a href="#" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
								<div className="d-flex w-100 justify-content-start align-items-center">
									<span className="menu-collapsed">Dashboard</span>
								</div>
							</a>            
							<a href="#" className="bg-dark list-group-item list-group-item-action">
								<div className="d-flex w-100 justify-content-start align-items-center">
									<span className="fa fa-home fa-fw mr-3"></span>
									<span className="menu-collapsed">Início</span>    
								</div>
							</a>
							<a href="#" className="bg-dark list-group-item list-group-item-action">
								<div className="d-flex w-100 justify-content-start align-items-center">
									<span className="menu-collapsed">Escalas Clínicas</span>
								</div>
							</a>
							<a href="#" className="bg-dark list-group-item list-group-item-action">
								<div className="d-flex w-100 justify-content-start align-items-center">
									<span className="fa fa-tasks fa-fw mr-3"></span>
									<span className="menu-collapsed">Listar Pacientes</span>
								</div>
							</a>           
							<a href="#" className="bg-dark list-group-item list-group-item-action">
								<div className="d-flex w-100 justify-content-start align-items-center">
									<span className="fa fa-calendar fa-fw mr-3"></span>
									<span className="menu-collapsed">Ultimas revisões</span>
								</div>
							</a>
							<a href="#" data-toggle="sidebar-colapse" className="bg-dark list-group-item list-group-item-action d-flex align-items-center">
								<div className="d-flex w-100 justify-content-start align-items-center">
									<span id="collapse-text" className="menu-collapsed">Esconder Menu</span>
								</div>
							</a>  
						</ul>
					</div>
				</div>
			</div>
		)
	}
}