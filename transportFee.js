function transportFee(shift){
    if(shift == "morning" || shift == "Morning" || shift == "MORNING"){
    return "R20";
    }
    else if(shift == "afternoon" || shift == "Afternoon" || shift == "AFTERNOON"){
      return "R10";
    }
    else if(shift == "nightshift" || shift == "Nightshift" || shift == "NIGHTSHIFT"){
        return "free";
    }
    else{
      alert ("A shift can only be Morning, Afternoon, or Nightshift.");
    }
}

function TransportFee(){
    return{
        shift: '',
        returnMsg: '',
        transportFee(){
            this.returnMsg = transportFee(this.shift);
        }
    }   
}

document.addEventListener('alpine:init', () => {
    Alpine.data('transportFee', TransportFee);
})