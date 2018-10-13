//alert ("JAVA SCRIPT CARGADO")
class Product{
    constructor(name, price, year){
        this.name= name;
        this.price=price;
        this.year=year;
    }
}

class UI{
    addProduct(Product){
       const productList= document.getElementById('product-list');
       const element= document.createElement('div');
       element.innerHTML = `
        <div class="card text-center mb-4">
        <div class="card-body">
            <strong>Product Name</strong>:${Product.name}
            <strong>Product Price</strong>:${Product.price}
            <strong>Product year</strong>:${Product.year}
            <a href="#" class="btn btn-danger" name="delete" >Delete</a>
         </div>
    </div>
    `;
        productList.appendChild(element);
        this.resetForm(); //llama al metodo para resetear formulario

    }

    resetForm(){
        document.getElementById('product-form').reset();
    }

    deleteProduct(element){
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
           // element.parentElement.parentElement.remove();
            this.showMessage('Eliminando elemento', 'info');
        }
    }

    showMessage(message, cssClass){
        const div= document.createElement('div');
        div.className= `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(message));
        //mostrar mensaje
       const container= document.querySelector('.container');
       const app= document.querySelector('#App');
       container.insertBefore(div,app);

       //temporizador
       setTimeout(function () {
        document.querySelector('.alert').remove();
}, 3000);
    }
}

//eventos del dom
document.getElementById('product-form')
    .addEventListener('submit', function(e){
        //console.log(document.getElementById('name').value)
        const name= document.getElementById('name').value;
        const price= document.getElementById('price').value;
        const year= document.getElementById('year').value;

       // console.log(name, price, year);
        //console.log(new product());
        const product = new Product(name, price, year);
        const ui = new UI();
        //validar si estan llenos los campos
        if(name ==='' || price ==='' || year===''){
            return ui.showMessage('Completa el formulario', 'danger'); //return no permite avanzar 
        }
        ui.showMessage('Producto agragado satisfactoriamente', 'success');
        ui.addProduct(product);
        ui.resetForm();
       

        e.preventDefault();

    //alert('guardando datos')
});


document.getElementById('product-list').addEventListener('click', function(e){
    //alert('de(leting')
    //console.log(e.target)

    const ui= new UI();
    ui.deleteProduct(e.target);
});
