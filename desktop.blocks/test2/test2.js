modules.define('test2', ['i-bem__dom'], function(provide, BEMDOM) {

  provide(BEMDOM.decl(this.name, {
    onSetMod: {
      'js' : {
        'inited' : function() {
          alert(this.domElem[0].outerHTML + 'blablabla');
        }
      }
    }
  }));
});
