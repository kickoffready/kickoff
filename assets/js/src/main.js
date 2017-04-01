var pageDemo = {
  init: function() {
    this.append();
  },
  append: function(){
    var body = document.getElementsByTagName('body')[0],
      text = document.createTextNode('this is the code');
    body.appendChild(text);
  }
};
pageDemo.init();
