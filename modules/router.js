const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname,'../pages/home.html'))
})

router.get('/productos', (req, res)=>{
  res.sendFile(path.join(__dirname,'../pages/productos.html'))
})

router.get('/api/productos', (req, res)=>{
  res.json({data:[{title:"queso",type:"rancio"}]})
})

router.use((req, res)=>{
  res.status(404).send('pifiaste wache')
})


module.exports = router
