import {Node} from "./Node.js"

export class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    remove() {
        if (!this.head) return null;
        const removedData = this.head.data;
        this.head = this.head.next;
        this.size--;
        return removedData;
    }

    getCount() {
        return this.size;
    }
}
