export class ISiteInfo {
  constructor( public parent_id: number,
               public do_works: string = '') {}
}


export class ISites {
  constructor( public id: number,
               public name: string,
               public link: string,
               public img: string,
               public design: boolean = false,
               public title: string) { //если только иницилизирует
    }
}
