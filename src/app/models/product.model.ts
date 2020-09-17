export class product{
    productId: number;
    productName: string;

    constructor(name: string, id: number){
        this.productId = id;
        this.productName = name;
    }
}