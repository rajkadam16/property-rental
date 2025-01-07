
export interface TabModel {
    id: string
    displayName: string
    defaultActive: string
    selected: boolean
    components : any[]
  }

  // property-photos.model.ts
export interface Image {
  url: string;
  alt: string;
}

export interface PropertyImages {
  id: string;
  images: Image[];
}
