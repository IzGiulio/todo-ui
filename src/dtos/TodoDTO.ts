export default class TodoDTO {
    readonly id: number | undefined
    readonly name: string
    readonly description: string
    readonly isDone: boolean
    readonly creationDate: string
    readonly dueDate: string

    constructor(id: number | undefined, name: string, description: string, isDone: boolean, creationDate: string, dueDate: string) {
        this.id = id
        this.name = name
        this.description = description
        this.isDone = isDone
        this.creationDate = creationDate
        this.dueDate = dueDate
    }

}