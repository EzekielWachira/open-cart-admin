export class Todo {
  private _title: string
  private _date: Date
  private _completed?: boolean

  constructor (title: string, date: Date, completed?: boolean) {
    this._title = title
    this._date = date
    this._completed = completed
  }

  get title (): string {
    return this._title
  }

  set title (value: string) {
    this._title = value
  }

  get date (): Date {
    return this._date
  }

  set date (value: Date) {
    this._date = value
  }

  get completed (): boolean | undefined {
    return this._completed
  }

  set completed (value: boolean | undefined) {
    this._completed = value
  }
}
