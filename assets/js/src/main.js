var indexDemo = {
  init: function() {
    this.append();
  },
  append: function(){
    var body = document.getElementsByTagName('body')[0],
      text = document.createTextNode('this is the main index');
    body.appendChild(text);
  }
};
indexDemo.init();