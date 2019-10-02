var showOrder = function() {
    // input
    var userOrder = prompt('This is a LoveMeter for animals!');
    var orderImage ="";
    var numberOfImage = 1;

     while(userOrder !== 'yes' && userOrder !== 'no') {
        userOrder = prompt('please answer with (yes or no)');
    }
    numberOfImage = prompt('How much do you like/hate Animals out of 10?');

for(let ctr = 0; ctr < numberOfImage; ctr++){
    console.log('the index is:' + ctr);

        if (userOrder === 'no') {
            orderImage = orderImage + '<img src="images/crying.jpg">';
        } else if (userOrder === 'yes') {
            orderImage =  orderImage + '<img src="images/nice.jpg">';
        }
    }
    // output
    return orderImage;
    };
