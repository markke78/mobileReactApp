import LinkedList from "../link/LinkList";

class Stack extends LinkedList {
  putIN(subject, amount) {
    this.last();
    this.insert(subject, amount);
  }
  takeOut() {
    this.last();
    this.delete();
  }
}

export default Stack;
