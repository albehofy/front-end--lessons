# JSON & AJAX
## Javascript Object Notation (json)
is a lightweight data-interchange format, not markup language , also not js but like XML text
- easy for humans to read and write
- ease for machine to parse and generate
- slef descriping and easy to understand
- built on two structure 
    - collection of name:value pairs > name is string and value is one of json values (string, number, boolean, object, array, null)
    - an order list of values(array)

Example: 
```
'
"name":"Mohames", 
"id": 10, 
"city": "Itay El Baroud"
'
```
for workin with JSON we use `JSON.parse(JsonObject)`

## Asyncronus Javascript and XML (AJAX)
used to calling back-end from front-end side in async way

### How to cll Ajax in JS
- by using **XMLHttpRequest** 
```
var xhr = new XMLHttpRequest(); 
xhr.open(requestType[GET|POST]:string, url:string, async:boolean[in js this param also true]); 
xhr.send(); // fetching the request with the prev settings 
xhr.onReadyStateChange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
       
        // this's will run after getting data from serve 
    }
}
xhr.readySate = {
    0: "before request", 
    1:"itializng request and fetching open() method ", 
    2 : "sending requst", 
    3: "server response", 
    4: "getting all needed data (request and response are done in complete way)"
    }
```
The data from the serve will response as one of two ways 
 - xhr.responseText : if the the response data are text 
 - xhr.responseXML : if the the response data are XML

xhr.status : we check for status for ensuring data are getting successfully, and it's prop have a relation with http protocol becouse "any request for the s server will is a http request and the response will getting  with a code of this's status (200) means success"

>**note :** If the  method in open is Post we will send the params as an Object with send method inested of sending it with the **URL**".

```
getProduct(){
    <!-- HTML -->
     <div id="products"></div>

     <!-- js -->
    var xhr = new XMLHttpRequest(); 
    
    xhr.open("GET", "https://reqres.in/api/users", true);
    
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200) {
            var products = xhr.responseText; 
            productsObj = JSON.parse(products)
            showProduct(productsObj); 
        }else {
            return "error"
        }
    }

    function showProduct(prod){
        document.querySelector("#products").innerHtml= prod.data
    }
    xhr.send();  

}
```