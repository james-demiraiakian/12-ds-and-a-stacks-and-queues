class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue = [...this.queue, item];
    return this.queue;
  }

  dequeue() {
    const dequeued = this.queue.splice(0, 1);
    return dequeued;
  }

  hasNext() {
    const next = this.queue[0];
    return next ? true : false;
  }
}

const queue = new Queue();
queue.enqueue("fox");
queue.enqueue("goose");
queue.enqueue("lizard");
console.log(queue);
console.log(queue.dequeue()); // 'fox'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'goose'
queue.enqueue("llama");
console.log(queue.dequeue()); // 'lizard'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'llama'
console.log(queue.hasNext()); // false
console.log(queue.dequeue()); // null
