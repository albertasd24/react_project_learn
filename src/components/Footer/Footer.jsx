import './Footer.css';
import PropTypes from 'prop-types';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className="footer__informative">
				<div className="">
					<h1>Brand<span className='mark--white'>ing</span></h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae beatae non omnis nihil ratione dolorum explicabo. </p>
				</div>
				<div className="">
					<p><b>SERVICIOS</b></p>
					<div className="containers__links">
						<a href="">Ortodoncia</a>
						<a href="">Odontologia</a>
						<a href="">Blanqueamiento</a>
						<a href="">Rehabilitación</a>
					</div>
				</div>
				<div className="">
					<p><b>Sedes</b></p>
					<div className="containers__links">
						<a href="">Sede 1</a>
						<a href="">Sede 2</a>
						<a href="">Sede 3</a>
						<p>Horario 08:00 a.m. a 07:00 p.m.</p>
					</div>
				</div>
				<div className="">
					<p><b>REDES SOCIALES</b></p>
					<div className="icon__container">
						<div className="icon__item">
							<i className="icon-social icon-social--tel"></i>
							<span>+51 310245785</span>
						</div>
						<div className="icon__item">
							<i className="icon-social icon-social--email"></i>
							<span>example@domain.com</span>
						</div>
						<div className="icon__item">
							<i className="icon-social icon-social--ubication"></i>
							<span>City, Place</span>
						</div>
					</div>
				</div>
			</div>
			<div className="links">
				<a href="">Politicas y Pivacidad</a>
				<a href="">Brandin &copy;2024</a>
				<a href="">Desarrollado por</a>
			</div>
		</footer>
	);
};

Footer.propTypes = {};

export default Footer;