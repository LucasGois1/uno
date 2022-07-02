export class Stack<T> {
    constructor(
        private readonly stack: Array<T>
    ) {}

    public push(element: T): void {
        this.stack.push(element);
    }

    public pop(): T {
        let item = this.stack.pop();

        if (!item) {
            throw new Error("Stack is empty");
        }

        return item;
    }

    public peek(): T {
        return this.stack[this.stack.length - 1];
    }

    public isEmpty(): boolean {
        return this.stack.length === 0;
    }
}

