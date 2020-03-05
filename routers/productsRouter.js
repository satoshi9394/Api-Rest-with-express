export default(PRODUCTS, productsList, total)=>{
  PRODUCTS.get('/', (req,res)=>{
    const viewActive = Number(req.query.status) === 1;
    const activeProducts = viewActive
     ? productsList.filter(p => p.stock > 0) 
     : productsList
    res.json({status: 'ok' ,result: activeProducts})
  });
  
  PRODUCTS.get('/:id', (req,res)=>{
    let id = req.params.id
    const product = productsList.find(p => p.id === id)
    if(product && product.stock > 0){
      res.json({status: 'ok', result: product})
    }else{
      res.json({status: 'not_found', result: 'Not Found'})
      //res.sendStatus(404) el que convenga mas
      /*res.status(404).json({
        status: 'not_found',
        message: `product con id '${req.params.id}' no existe`
      }) otra forma*/

    }
  });

  PRODUCTS.put('/:id', (req, res)=>{
    let id = req.params.id
    const product = productsList.find(p => p.id === id)
    if(product && product.stock > 0 ){
      product.stock--;
      total += product.value;
      console.log(total)
      res.json({status: 'ok', result: product})
    }else{
      res.json({status: 'not_found', result: 'Not Found'})
    }
  });

  
}