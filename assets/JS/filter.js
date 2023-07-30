let myCards = document.getElementsByClassName("carde");
    var arr = new Array(myCards.length);
    let opj= {
        Price: 0.0,
        Diration: '0'
      }
    for(let i = 0 ; i<myCards.length ;i++){
      let price = myCards[i].children[1].children[0].children[1].children[1].children[0].innerHTML;
      let duration = myCards[i].children[1].children[0].children[1].children[2].innerHTML;
      opj = {
        Price: parseFloat(price),
        Duration: duration
      }
      arr[i] = opj;
    }
    function filterFun(){
      let type = document.getElementById("type").value;
      let tripClass = document.getElementById("tripClass").value;
      switch(type){
        case "Excursions":
          if(tripClass === "Economic"){
              for(let i = 0; i<arr.length;i++){
                if(arr[i].Price <= 500)
                  myCards[i].style.display="block";
                else
                  myCards[i].style.display="none";
              }
          }
          else if(tripClass === "VIP"){
              for(let i = 0; i<arr.length;i++){
                  if(parseFloat(arr[i].Price) > 500)
                    myCards[i].style.display="block";
                  else
                    myCards[i].style.display="none";
              }
            
          }
        break;
        case "Transfers":
          if(tripClass === "Economic"){
              for(let i = 0; i<arr.length;i++){
                if(arr[i].Price <= 500 && arr[i].Duration === "Duration: 1D")
                  myCards[i].style.display="block";
                else
                  myCards[i].style.display="none";
              }
          }
          else if(tripClass === "VIP"){
              for(let i = 0; i<arr.length;i++){
                  if(arr[i].Price > 500 && arr[i].Duration === "Duration: 1D")
                    myCards[i].style.display="block";
                  else
                    myCards[i].style.display="none";
              }
            
          }
        break;
        case "Accommodations":
          if(tripClass === "Economic"){
              for(let i = 0; i<arr.length;i++){
                if(arr[i].Price <= 500 && arr[i].Duration !== "Duration: 1D")
                  myCards[i].style.display="block";
                else
                  myCards[i].style.display="none";
              }
          }
          else if(tripClass === "VIP"){
              for(let i = 0; i<arr.length;i++){
                  if(arr[i].Price > 500 && arr[i].Duration !== "Duration: 1D")
                    myCards[i].style.display="block";
                  else
                    myCards[i].style.display="none";
              }
            
          }
        break;

      }
    }
    document.getElementById("filterButton").onclick = function(){
      filterFun()
    }
    filterFun()