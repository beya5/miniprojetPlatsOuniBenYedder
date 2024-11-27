export class Food {
    constructor(
      public id: string,
      public name: string,
      public price: number,
      public tags: string[] = [], 
      public favorite: boolean,
      public stars: number,
      public imageUrl: string,
      public origins: string[],
      public cooktime: string
    ) {}
  }
  