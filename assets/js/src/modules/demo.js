export default class {
  init() {
    this.append();
  }
  
  append(){
    let body = document.getElementsByTagName('body')[0],
      text = document.createTextNode('this is the code');
    body.appendChild(text);
  }
};
