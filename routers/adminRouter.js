

export default(ADMIN, productsList) => {

  
  ADMIN.post('/agregar', (req, res) => {
    let newProduct = req.body
    productsList = productsList.concat(newProduct)
    res.json({status: 'ok' ,result: productsList })
  })
  ADMIN.delete('/delete/:id', (req, res)=>{
    let id = req.params.id
    const product = productsList.find(p => p.id === id)
    if(product){
      productsList = productsList.filter(p => p.id !== id)
      res.json({status: 'ok', result: productsList})
    }else{
      res.json({status: 'not_found', result: 'Not Found'})
    }
  });
  ADMIN.put('/actualizar', (req, res) => {
    let newQlty = req.body
    productsList = productsList.map(p => {
      if(p.name === newQlty.name){
        p.value += newQlty.value
        return p
      }else{
        return p
      }
    })
    res.json({status: 'ok' ,result: productsList })
  })



}