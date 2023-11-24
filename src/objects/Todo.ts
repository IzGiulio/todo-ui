export default class Todo {
    readonly id: number
    readonly name: string
    readonly description: string
    readonly isDone: boolean
    readonly creationDate: Date
    readonly dueDate: Date

    constructor(id: number, name: string, description: string, isDone: boolean, creationDate: Date, dueDate: Date) {
        this.id = id
        this.name = name
        this.description = description
        this.isDone = isDone
        this.creationDate = creationDate
        this.dueDate = dueDate
    }


}