class HTMLHandler {
    constructor(successor = null) {
      this.successor = successor;
    }
  
    handle(data) {
      if (this.successor) {
        this.successor.handle(data);
      }
    }
}

export default HTMLHandler;