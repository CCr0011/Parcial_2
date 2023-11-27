export class Conferencia {
    id: number;
    name: string;
    starts: string;
    ends: string;
    image:string;

    
   
    constructor(
      id: number,
      name: string,
      starts: string,
      ends: string,
      image:string
      
    ) {
      this.id = id;
      this.name = name;
      this. starts =  starts;
      this.ends = ends;
      this.image= image;
      
    }
   }
   /* archivo src/app/book/book.ts */
