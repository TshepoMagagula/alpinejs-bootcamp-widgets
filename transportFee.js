function transportFee(shift){
    if(shift === "morning"){
    return "R20";
    }
    else if(shift === "afternoon"){
      return "R10";
    }
    else if(shift === "nightshift"){
        return "free";
    }
    else{
      alert ("A shift can only be 'morning', 'afternoon', or 'nightshift'.");
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