breathing = function () {
    var el = document.getElementById('initialTitle').className='initialTitle1';
    
    if (el) {
        el.className = "initialTitle";
      } 
    else {
    el.className = "initialTitle2";
    }
       
      return el;
}

// export {breathing}
// module.exports = breathing;

