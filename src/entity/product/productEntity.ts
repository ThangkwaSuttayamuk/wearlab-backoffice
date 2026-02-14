export class ProductEntity {
  id: number;
  name: string;
  description: string;
  defect: string;
  type: string;
  waist: number;
  length: number;
  chest: number;
  owner: number;
  status: string;
  price: number;
  saleprice: number;
  image: string[];
  createdate: string;
  updatedate: string;
  ownername: string;
  constructor(
    id: number,
    name: string,
    description: string,
    defect: string,
    type: string,
    waist: number,
    length: number,
    chest: number,
    owner: number,
    status: string,
    price: number,
    saleprice: number,
    image: string[],
    createdate: string,
    updatedate: string,
    ownername: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.defect = defect;
    this.type = type;
    this.waist = waist;
    this.length = length;
    this.chest = chest;
    this.owner = owner;
    this.status = status;
    this.price = price;
    this.saleprice = saleprice;
    this.image = image;
    this.createdate = createdate;
    this.updatedate = updatedate;
    this.ownername = ownername;
  }
}
