$(function(){
    var products = ['Chicken', 'Beef', 'Pork', 'Shrimp', 'Veggie', 'Sweet', 'Cheese'];
    var prices = [1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75];
    var cartCounter = [];

    //Add products to the store
    for(var i = 0; i < products.length; i++)
    {
        var string = "";

        string += '<li class="list-group-item clearfix">';
        //string += '<img class="img-thumbnail" src="./images/apples.png">';
        string += products[i];
        string += '<button class="btn btn-success btn-xs pull-right btn-product" value=' + i + '>Add to Cart</button>';
        string += '</li>';

        $('#products').append(string);

        //Set the cart counter to 0 for that this index
        cartCounter.push(0);
    }

    //Add product to cartCounter when a button is clicked
 $('#products').on('click','.btn-product',function(button){
        var index=$(this).val();
        cartCounter[index]++; 
   })

    $('#cartContents').on('click','.btn-remove', function(button){
        var index = $(this).val();
        if(cartCounter[index] > 0)
        {
            cartCounter[index] = 0;
        }
        console.log(index, cartCounter[index]);
        buildCart();
    });

    //View cart event
    $('#viewCart').on('click', function(){
        buildCart();
    });

   

function buildCart()
{
            //Clear the cart
        $('#cartContents').html('');
             //Build the cart
        for(var i = 0; i < products.length; i++)
        {
            var count = cartCounter[i];
            if(count > 0) {
                var string = "";

                string += '<li class="list-group-item clearfix">';
                string += products[i];
                string += '<button class="btn btn-danger btn-xs pull-right btn-remove" value=' + i + '>Remove</button>';
                string += '<span class="badge badge-pill badge-primary">' + count + '</span>';
                string += '</li>';

                $('#cartContents').append(string);
            }
        }
}


    //Pay for items in shopping cart
    $('#hidepaymentForm').click(function(){
    $('#buttonPay').hide();
    });

    $('#showpaymentForm').click(function(){
    $('#buttonPay').show();
    });
});