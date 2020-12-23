export class Product {
  private _name: string
  private _image: string
  private _description: string
  private _price: number

  constructor (name: string, image: string, description: string, price: number) {
    this._name = name
    this._image = image
    this._description = description
    this._price = price
  }

  get name (): string {
    return this._name
  }

  set name (value: string) {
    this._name = value
  }

  get image (): string {
    return this._image
  }

  set image (value: string) {
    this._image = value
  }

  get description (): string {
    return this._description
  }

  set description (value: string) {
    this._description = value
  }

  get price (): number {
    return this._price
  }

  set price (value: number) {
    this._price = value
  }
}
