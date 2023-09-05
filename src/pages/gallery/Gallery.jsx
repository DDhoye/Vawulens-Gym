import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'

import gallery1 from '../../images/gallery1.jpg';
import gallery2 from '../../images/gallery2.jpg';
import gallery3 from '../../images/gallery3.jpg';
import gallery4 from '../../images/gallery4.jpg';
import gallery5 from '../../images/gallery5.jpg';
import gallery6 from '../../images/gallery6.jpg';
import gallery7 from '../../images/gallery7.jpg';
import gallery8 from '../../images/gallery8.jpg';
import gallery9 from '../../images/gallery9.jpg';
import gallery10 from '../../images/gallery10.jpg';
import gallery11 from '../../images/gallery11.jpg';
import gallery12 from '../../images/gallery12.jpg';
import gallery13 from '../../images/gallery13.jpg';
import gallery14 from '../../images/gallery14.jpg';
import gallery15 from '../../images/gallery15.jpg';

const Gallery = () => {
  const galleryLength = 15;
  const images = []

  const randomIndices = Array.from({ length: galleryLength }, (_, i) => i + 1).sort(() => Math.random() - 0.5);

  for(let i = 1; i < galleryLength; i++){
    switch (randomIndices[i]) {
      case 1:
        images.push(gallery1);
        break;
      case 2:
        images.push(gallery2);
        break;
      case 3:
        images.push(gallery3);
        break;
      case 4:
        images.push(gallery4);
        break;
      case 5:
        images.push(gallery5);
        break;
      case 6:
        images.push(gallery6);
        break;
      case 7:
        images.push(gallery7);
        break;
      case 8:
        images.push(gallery8);
        break;
      case 9:
        images.push(gallery9);
        break;
      case 10:
        images.push(gallery10);
        break;
      case 11:
        images.push(gallery11);
        break;
      case 12:
        images.push(gallery12);
        break;
      case 13:
        images.push(gallery13);
        break;
      case 14:
        images.push(gallery14);
        break;
      case 15:
        images.push(gallery15);
        break;
      default:
        break;
    }
  }

 
  return (
    <>
    <Header title="Our Gallery" image={HeaderImage}>
    Our Workplace Gallery features modern office, team collaboration, and fun culture.
    Attracts talents and showcases company's work atmosphere.
    </Header>
    <section className='gallery'>
      <div className="container gallery__container">
        {
          images.map((image, index) => {
            return <article key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`}/>

            </article>
          })
        }
      </div>

    </section>
    </>
  )
}

export default Gallery
