export class Item{
  id:number
  amount: number
 constructor(public text:string)
  {
    this.id = Date.now()
    this.amount = 1
  }
}