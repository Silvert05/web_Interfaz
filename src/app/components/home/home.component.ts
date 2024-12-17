import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images: any[] = [];
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

  // Información de las imágenes para el carrusel
  constructor() {
    this.images = [
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBHOlS1J3tGXPawTo98SD2BIylRCq1mODhw&s', alt: 'Imagen 1', title: 'Imagen 1' },
      { src: 'https://hips.hearstapps.com/hmg-prod/images/bugatti-tourbillon-5-66755b9c630e6.jpg?crop=0.646xw:0.592xh;0.161xw,0.218xh&resize=980:*', alt: 'Imagen 2', title: 'Imagen 2' },
      { src: 'https://www.infobae.com/resizer/v2/4GSUPRZXXREO7A3YKFIT3W2RMM.jpg?auth=58823a8ab59fe5a67ed34f60ac35550ed9146c3ab36199f18f0b23cb73836b4f&smart=true&width=1200&height=900&quality=85', alt: 'Imagen 3', title: 'Imagen 3' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoQY-Vwce_9i4PXBbTLod4VNXLyY1lau9Q-w&s', alt: 'Imagen 4', title: 'Imagen 4' },
    ];
  }
}
