let microwave = false;

function startbutton() {
  if (microwave == false) {
  microwave = true; 
  console.log('enter num of seconed')
  } else {
    microwave = false;
    console.log('microwave is closed')
  }
}

function strtTime() {
  if (microwave == true) {
    let seconeds = prompt('enter num of seconed')
    seconeds = parseInt(seconeds)
    if (isNaN(seconeds) || seconeds <= 0 || seconeds > 0) {
      alert ('enter true num of seconeds')
    } else {
      console.log(``)
      setTimeout(function(){
          alert('cooked')
          console.log('cooked')
      }, seconeds * 1000);
    }
  } else {
    microwave = false;
    console.log('trun microwave on')
  }
}