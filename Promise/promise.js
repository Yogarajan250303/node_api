function orderFood(food){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (food === 'pizza') {
                resolve('Order received: pizza');
            } else {
                reject('Sorry, we only serve pizza.');
            }
        }, 2000);
    });
}

function orderFood(type,food){
    return new Promise((resolve, reject) => {
        qurry('/api/order',function(error,response){
            if(!error){
                let food=response.food;
                 querry('/api/order/dosa',function(error,response){
                 if(!error){
                    let food=result.food;
                    let myFood=food.find(food)
                    resolve('Order received: dosa');
                     }})
                     return (food.type===type&& food.name ===food)

              }
          })
    
    })

}