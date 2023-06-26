function findItemsOver20(list){
    var itemsOver20 = [];
    for(let i=0; i<list.length; i++){
    const listItem = list[i];
    if(listItem.qty > 20){
        itemsOver20.push(listItem);
    }
  }
  return itemsOver20;
}