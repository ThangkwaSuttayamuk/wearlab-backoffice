export class ProductEntity {
  id: number;
  name: string;
  sku: string;
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
  stock: number;
  createdAt: string;
  updatedAt: string;
  ownername: string;
  constructor(
    id: number,
    name: string,
    sku: string,
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
    stock: number,
    createdAt: string,
    updatedAt: string,
    ownername: string
  ) {
    this.id = id;
    this.name = name;
    this.sku = sku;
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
    this.stock = stock;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.ownername = ownername;
  }
}
