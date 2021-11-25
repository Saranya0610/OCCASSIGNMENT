function ProductList(){
    this.pname = ko.observable("");
    this.unitprice = ko.observable("");
    this.products = ko.observableArray([
        {name:'Pepsi', unitprice:30.00},
        {name:'Maaza', unitprice:40.00},
        {name:'Coca cola', unitprice:20.00},
    ]) 
    this.addProduct = function(){
        if(this.pname()!=""&& this.unitprice()!=""){
            this.products.push({
                name:this.pname(),
                price:this.unitprice()
            })
            this.pname("");
            this.unitprice("");
        }
    }

}

const productList = new ProductList();
ko.applyBindings(productList)