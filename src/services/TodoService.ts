import Todo from "@/objects/Todo";
import axios from "axios";
import type TodoDTO from "@/dtos/TodoDTO";

export default class TodoService {

    public static async getTodos(): Promise<Todo[]> {
        const response = await axios.get('http://localhost:8080/todos')
        console.log(response)
        const apiResponse = response.data as TodoDTO[]

        return this.mapToUITodos(apiResponse)
    }

    public static async deleteTodo(id: number): Promise<number> {
        const response = await axios.post(`http://localhost:8080/todos/delete`, null, {
            params: {
                id
            }
        })

        return response.status
    }

    public static async saveTodo(name: string, description: string | undefined, dueDate: Date | undefined): Promise<number> {
        const response = await axios.post(`http://localhost:8080/todos/add`, {
            'name': name,
            'description': description,
            'creationDate': new Date(),
            'dueDate': dueDate
        })

        return response.status
    }

    private static mapToUITodos(apiResponse: TodoDTO[]) {
        return apiResponse.map(dto => new Todo(
                dto.id as number,
                dto.name,
                dto.description,
                dto.isDone,
                new Date(dto.creationDate),
                new Date(dto.dueDate),
            )
        );
    }
}