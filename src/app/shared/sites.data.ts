export class ISites {
  constructor( public id: number, public name: string, public link: string ) { //если только иницилизирует

  }
}

export const sites:ISites[] = [
  {id: 1,name : 'TanMar', link: 'http://tanmar.com.ua'},
  {id: 2,name : 'Game Atom', link: 'http://gameatom.infinitum.tech/'},
  {id: 3,name : 'Math Olymp', link: 'http://matholymp.com.ua/'}
];
