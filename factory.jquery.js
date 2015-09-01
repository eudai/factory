Factory = {}
Factory.parser = new CssSelectorParser();
Factory.parser.enableSubstitutes();

Factory.createElement = function(options){
  if (typeof options == 'string'){
    options = Factory.parser.parse(options).rule
  }
  var element = document.createElement(options.tagName)
  for ( var key in options ){
    var value = options[key]
    if (key == 'type') continue
    if (key == 'tagName') continue
    if (key == 'id'){
      element.id = value
    }
    if (key == 'classNames'){
      element.className = value.join(' ')
      continue
    }
    if (key == 'attrs'){
      for (var i in options.attrs){
        var attr = options.attrs[i]
        if (typeof element[attr.name] == 'string' || typeof element[attr.name] == null ){
          element[attr.name] = attr.value
        } else {
          element.setAttribute(attr.name,attr.value)
        }
      }
      continue
    }
    if (key == 'rule'){
      var child = Factory.createElement(value)
      element.appendChild(child)
    }
  }
  return element
}

$.fn.create = function(selector) {
  var elements = []
  this.each(function(){
      var element = Factory.createElement(selector)
      this.appendChild(element)
      elements.push(element)
  })
  return $(elements);
};

$.create = function(selector){
  var element = Factory.createElement(selector)
  return $(element);
}

