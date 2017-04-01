const appDemo = {
  init: function() {
    this.append();
  },
  append: function(){
    var body = document.getElementsByTagName('body')[0],
      text = document.createTextNode('this is app');
    body.appendChild(text);
  }
};
appDemo.init();
