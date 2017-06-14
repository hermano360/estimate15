import testDatabase from './testDatabase'

module.exports = {

  getModelNo : function(modelNo){
    let selectedProduct;
    testDatabase.products.forEach((product)=>{
      if(product.modelNo === modelNo){
        selectedProduct = product;
      }
    })
    return selectedProduct
  },
  allProducts : function(){
    return testDatabase.products
  },
  getModelNos: function(modelNos){
    let selectedProducts=[];
    testDatabase.products.forEach((product)=>{
      if(modelNos.indexOf(product.modelNo) > -1){
        selectedProducts.push(product)
      }
    })
    return selectedProducts
  }
}
