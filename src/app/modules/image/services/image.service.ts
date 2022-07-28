import { Injectable } from '@angular/core';
import { Image } from '../../../models/api';
import { loremIpsum } from "lorem-ipsum";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getImages() {
    const totalItems = 4000;
    const images: Image[] = [];
    for(let i=0; i< totalItems; i++) {
      images.push({
        id: (i+1).toString(),
        photo: `https://i.picsum.photos/id/${i+1}/500/500.jpg`,
        text: loremIpsum({count: 5, format: 'plain', units: 'words'})
      })
    }

    return JSON.parse(JSON.stringify(images));
  }
}
