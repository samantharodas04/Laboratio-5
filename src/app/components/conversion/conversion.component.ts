import { Component, OnInit } from '@angular/core';
import { ColorListService } from '../services/color-list.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {
  red: number = 0;
  green: number = 0;
  blue: number = 0;
  hexColors: { hex: string, rgb: string }[] = [];

  constructor(private colorListService: ColorListService) {}
  ngOnInit(): void {
  }

  convertToHex() {
    const hexColor = this.rgbToHex(this.red, this.green, this.blue);
    const rgbColor = `rgb(${this.red}, ${this.green}, ${this.blue})`;

    this.hexColors.unshift({ hex: hexColor, rgb: rgbColor }); // Agrega el nuevo color al principio de la lista
  }

  private rgbToHex(r: number, g: number, b: number): string {
    const toHex = (value: number) => {
      const hex = value.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };

    const redHex = toHex(r);
    const greenHex = toHex(g);
    const blueHex = toHex(b);

    return `#${redHex}${greenHex}${blueHex}`;
  }

}
