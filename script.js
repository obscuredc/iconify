// Main script

const Iconify = {
  IsDead: false,
  Start: function() {
    //call to restart iconify after killing.
    this.IsDead = false;
    this.Update();
    return Iconify;
  },
  End: function() {
    //call to stop iconify from updating and processing requests
    this.IsDead = true;
    return Iconify;
  },
  Update: function() {
    //this just turns spans into icons :>
    //ensure we are allowed to run
    if(this.IsDead == false) {
      //get icons
      var t = document.getElementsByClassName("icon");
      for(i = 0; i < t.length; i++) {
        //get style of current span
        var cs = window.getComputedStyle(t[i], null);
        //get w,h of current span
        var f = new Image(cs.getPropertyValue("width"), cs.getPropertyValue("height"));
        //set attribute of image
        f.setAttribute("src", t[i].innerHTML);
        //reset html
        t[i].innerHTML = "";
        //append image
        t[i].appendChild(f);
      }
    }
    return Iconify;
  }
}
