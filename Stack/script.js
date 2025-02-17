class Stack {
    constructor() {
      this.items = []; 
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    checkTopElement() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    clear() {
      this.items = [];
    }
  }
  
  
const testStack = new Stack();
testStack.push('Banana');
testStack.push('Potato');
console.log(testStack.size());
console.log(testStack.checkTopElement()); 
console.log(testStack.pop());  
console.log(testStack.pop());  
console.log(testStack.pop());  
  