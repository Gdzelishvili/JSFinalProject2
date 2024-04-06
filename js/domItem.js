export default class DomItem {
    constructor(attributes, children) {
      this.attributes = attributes;
      this.children = children;
    }
  
    render() {
      return "Text";
    }
  }