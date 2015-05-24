window.onload = function () {
  var counter = 0;
  var $ = function (selector) {
    return document.querySelector(selector);
  }

  // Add addFollower function to list items
  var list = $('#masterlist').getElementsByTagName('li');
  for (var i = 0; i < list.length; i++) {
    list[i].onclick = addFollower;
  }
  
  // Add removeAll function to button
  var btn = $('#masterlist').getElementsByTagName('button');
  btn[0].onclick = removeAll;
  
  function addFollower() {
    if (!this.classList.contains('selected')) {
      this.classList.add(counter.toString()); // add counter id class
      copy = this.cloneNode(true); // make copy of follower information
      $('#compare').appendChild(copy); // add follower to comparison page
      this.classList.add('selected', counter.toString()); // mark as selected
      counter += 1; // increment counter
    }
  }
  
  function removeAll() {
    var f = $('#compare').getElementsByClassName('followers');
    while(f[0]) {
      f[0].parentNode.removeChild(f[0]);
    }
    
    var list = $('#masterlist').getElementsByTagName('li');
    for (var i = 0; i < list.length; i++) {
      if (list[i].classList.contains('selected')) {
        list[i].className = "followers";
      }
    }
    
  }
  
  function removeSingle() {
    
  }

}