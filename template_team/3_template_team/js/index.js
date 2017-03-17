var products    = ['Chicken', 'Beef', 'Pork', 'Shrimp', 'Veggie', 'Cheese'];
    var details     = [
            'Chicken is special for today, or everyday',
            'I am real cobe beef, or close',
            'Pork is so delicious and delicious',
            'A taste of the Sea, fresh guaranteed',
            'Perfect for vegans, or vege lovers ',
            'Cheeeeeeeeeeeeeze! YEEEEEESSS'
    ];
    var images      = ['Chicken.jpg', 'Beef.jpg', 'Shrimp.jpg', 'Veggie.jpg', 'Pork.jpg', 'Cheese.gif']
    var prices      = [6.99, 7.99, 7.99, 9.99, 8.99, 8.99];
    var inventories   = [80, 15, 30, 20, 40, 80];
    var cart        = [];
    var total       = 0;

$(function(){
    
    //Add products to the store
    for(var i = 0; i < products.length; i++)
    {
        var string = "";
        string +='<div class="col-xs-2">';
        string +='  <div class="product">';
        var image = images[i]|| 'default.jpg';
        string +='      <img class="img-thumbnail" src="./images/'+ image +'"/>';
        string += '<div class="title">' + products[i] + '</div>';
        string +='      <div class="details">'+ details[i] +'</div>';
        string += '     <div class="price">' + currencyFormat(prices[i]) + '</div>';
        string +='      <div class="quantity">Quantity';
        string +=           buildSelect(i);
        
        string +='      </div>';
        string +='      <button class="btn btn-success" value='+ i +'>Add to Cart</button>';           
        string +='  </div>';
        string +='</div>';
        $('#products').append(string);
        //Set the cart counter to 0 for that this index
        cart.push(0);
    }
    //Add product event
    $('#products').on('click', '.btn', function(button){
        var i = $(this).val();
        var quantity = parseInt($('#'+ products[i]+ 'Select').val())
        var price = prices[i];
        //add quantity to cart
        cart[i] = cart[i] + quantity;  
        //add (quantity x price) to cart     
        total= total + (price * quantity);
        console.log(cart);
        console.log('$'+ total);
    });
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
        //Clear the cart
        $('#cartContents').html('');
    });
        //Build the cart
    //View cart event
    $('#viewCart').on('click', function(){
        //Clear the cart
        $('#cartContents').html('');
        //Build the cart
        for(var i = 0; i < products.length; i++)
        {
            var count = cart[i];
            if(count > 0) {
                var string = "";
                string += '<li class="list-group-item clearfix">';
                string += products[i];
                string += '<span class="badge badge-pill badge-primary">' + count + '</span>';
                string += '</li>';
                $('#cartContents').append(string);
            }
        }
    });
    
    //Checkout
        $('#checkout').on('click', function(){
            console.log("Checking out");
            $('#checkoutModal').modal();
            $('#total').append('$'+ total);
        });
        $('.nav a').on('click', function(){
            var _opened = $(".navbar-collapse").hasClass("collapse in");
            if (_opened === true) {
                $('.navbar-toggle').click();
            }
        });
    });
function buildSelect(i)
{
    var product = products[i];
    var inventory = inventories[i];
    var string = '';
    string +='<select id="'+ product+ 'Select">';
    var max = inventory||0;
    for( var j = 0 ; j <= inventory;  j++ ){
            string += '<option value='+ j +'>' + j + '</option>';
    }
    string +='</select>';
    
    return string;
}
function currencyFormat(number)
{ 
    currency = "$" + number.toFixed(2);
    return currency;
}