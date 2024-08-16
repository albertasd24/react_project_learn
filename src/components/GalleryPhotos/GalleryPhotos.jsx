import './GalleryPhotos.css';
import PropTypes from 'prop-types';

const GalleryPhotos = () => {
	return (
		<div className='galleryphotos'>
			<div className="box__gallery">
				<span className='text__image'>Limpieza</span>
			</div>
			<div className="box__gallery"></div>
			<div className="box__gallery">

			</div>
			<div className="box__gallery">
				<span className='text__image'>Montar Reconstrucción</span>
			</div>
			<div className="box__gallery">
				<span className='text__image'>Dental Veneers</span>
			</div>
			<div className="box__gallery"></div>
		</div>
	);
};

GalleryPhotos.propTypes = {};

export default GalleryPhotos;