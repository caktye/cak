 var innerList = document.getElementById("inner");
      var btnList = document.getElementsByTagName("button");
      var perWidth =  inner.children[0].offsetWidth;
      var prevBtn = document.getElementById("prevBtn");
      var nextBtn = document.getElementById("nextBtn");
      
      function tab(){
            inner.style.left= -perWidth * index + "px"
                  for(var j=0;j<btnList.length; j++){
                        btnList[j].className="";
                  }
                  btnList[index].className="active";
      }
      function next() {
            index++;
            if(index > btnList.length - 1) {
                  index = 0;
            }
            tab();
      }
      function prev() {
            index--;
            if(index < 0) {
                  index = btnList.length - 1;
            }
            tab();
      }

      for(var i=0;i<btnList.length;i++){
            btnList[i].index=i;
            btnList[i].onclick =function(){
                index=this.index;
                tab();
            }

      }
      var index=0;
      function xunhuan(){
           index++;
     
               if(index>btnList.length -1){
                  index=0;
               }
           tab();
      }

     var  timer =setInterval(xunhuan,5000);

      inner.onmouseover =function(){
          clearInterval(timer);
      }
      inner.onmouseout =function(){
        timer = setInterval(xunhuan,5000);
      }

     //下一张
      nextBtn.onclick = function() {
            clearInterval(timer);
            next();
            timer = setInterval(next,5000);
      }

      //上一张 
      prevBtn.onclick = function() {
            clearInterval(timer);
            prev();
            timer = setInterval(next,5000);
      }