
import './GalleryPhotoGigant.css';
import ImageOrtodoncia from "../../assets/img/ortodoncia.jpg"
import ImageRehabilitacion from "../../assets/img/rehabilitacion.jpg"
import ImageBlanqueamiento from "../../assets/img/blanqueamiento.jpg"
const GalleryPhotoGigant = () => {
	return (
		<div className='galleryphotogigant'>
			<div className="image__main">
				<img src={ImageOrtodoncia} alt="" />
				<span className='text__image'>Odontologia</span>
			</div>
			<div className="images">
				<div className="image__secondary">
					<img className='' src={ImageRehabilitacion} alt="" />
					<span className='text__image'>Rehabilitación</span>

				</div>
				<div className="image__secondary">
					<img src={ImageBlanqueamiento} alt="" />
					<span className='text__image'>Blanqueamiento</span>
				</div>
			</div>
		</div>
	);
};

GalleryPhotoGigant.propTypes = {};

export default GalleryPhotoGigant;