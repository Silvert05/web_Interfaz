import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images: any[] = [];
  galleriaImages: any[] = [];
  responsiveOptions: any[] = [];
  
  data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Ventas',
        data: [65, 59, 80, 81, 56],
        fill: false,
        borderColor: '#42A5F5',
        tension: 0.1
      }
    ]
  };

  constructor() {
    // Imágenes para el carrusel
    this.images = [
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBHOlS1J3tGXPawTo98SD2BIylRCq1mODhw&s', alt: 'Imagen 1', title: '' },
      { src: 'https://hips.hearstapps.com/hmg-prod/images/bugatti-tourbillon-5-66755b9c630e6.jpg?crop=0.646xw:0.592xh;0.161xw,0.218xh&resize=980:*', alt: 'Imagen 2', title: '' },
      { src: 'https://www.infobae.com/resizer/v2/4GSUPRZXXREO7A3YKFIT3W2RMM.jpg?auth=58823a8ab59fe5a67ed34f60ac35550ed9146c3ab36199f18f0b23cb73836b4f&smart=true&width=1200&height=900&quality=85', alt: 'Imagen 3', title: '' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoQY-Vwce_9i4PXBbTLod4VNXLyY1lau9Q-w&s', alt: 'Imagen 4', title: '' },
    ];

    // Imágenes para la galería
    this.galleriaImages = [
      {
        itemImageSrc: 'https://media.gettyimages.com/id/1200554529/es/foto/toronto-on-february-13-the-bugatti-la-voiture-noire-is-unvieled-at-the-canadian-international.jpg?s=612x612&w=0&k=20&c=P8fuRgLVXMZD6LIQx5Vr3gPcBuxyzqImqfCpgmisOLk=',
        thumbnailImageSrc: 'https://media.gettyimages.com/id/1200554529/es/foto/toronto-on-february-13-the-bugatti-la-voiture-noire-is-unvieled-at-the-canadian-international.jpg?s=612x612&w=0&k=20&c=P8fuRgLVXMZD6LIQx5Vr3gPcBuxyzqImqfCpgmisOLk=',
        alt: 'Imagen 1',
        title: 'Título 1'
      },
      {
        itemImageSrc: 'https://media.gettyimages.com/id/1200554519/es/foto/toronto-on-february-13-the-bugatti-la-voiture-noire-is-unvieled-at-the-canadian-international.jpg?s=612x612&w=0&k=20&c=uesVICp9l02GA7ldbzFLwTe_WLpUHtbfaHbJ_xJSbeM=',
        thumbnailImageSrc: 'https://media.gettyimages.com/id/1200554519/es/foto/toronto-on-february-13-the-bugatti-la-voiture-noire-is-unvieled-at-the-canadian-international.jpg?s=612x612&w=0&k=20&c=uesVICp9l02GA7ldbzFLwTe_WLpUHtbfaHbJ_xJSbeM=',
        alt: 'Imagen 2',
        title: 'Título 2'
      },
      {
        itemImageSrc: 'https://media.gettyimages.com/id/1320233117/es/foto/knebworth-united-kindom-the-bugatti-chiron-at-knebworth-house-hertfordshire-the-bugatti-was.jpg?s=612x612&w=0&k=20&c=0Mq3gi6mTkn8hUv2fcClacmLaoajJGuOny177tI3RAQ=',
        thumbnailImageSrc: 'https://media.gettyimages.com/id/1320233117/es/foto/knebworth-united-kindom-the-bugatti-chiron-at-knebworth-house-hertfordshire-the-bugatti-was.jpg?s=612x612&w=0&k=20&c=0Mq3gi6mTkn8hUv2fcClacmLaoajJGuOny177tI3RAQ=',
        alt: 'Imagen 3',
        title: 'Título 3'
      },
      {
        itemImageSrc: 'https://media.gettyimages.com/id/1452765365/es/foto/london-united-kindom-the-bugatti-centodieci-at-joe-macari-performance-cars-in-wandsworth.jpg?s=612x612&w=0&k=20&c=gNnsvJqklrRqaexp-fFZJv3VniVW7lyjFidUmon3fAE=',
        thumbnailImageSrc: 'https://media.gettyimages.com/id/1452765365/es/foto/london-united-kindom-the-bugatti-centodieci-at-joe-macari-performance-cars-in-wandsworth.jpg?s=612x612&w=0&k=20&c=gNnsvJqklrRqaexp-fFZJv3VniVW7lyjFidUmon3fAE=',
        alt: 'Imagen 4',
        title: 'Título 4'
      }
    ];

    // Opciones responsivas para la galería
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];

    
  }
}
