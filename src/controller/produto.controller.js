const produtoService = require("../service/produto.service");

const findProductByIdController = async (req,res) => {
  try{
    return res.send(await produtoService.findProductByIdService(req.params.id));
  }catch(err){
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
  }
};

const findAllProductsController = async (req,res) => {
  try{
    return res.send(await produtoService.findAllProductsService());
  }catch(err){
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
  }
};

const createProductController = async (req,res) => {
  try{
    const corpo = {
      ...req.body,
      userId: req.userId,
      createdAt: new Date()
    }

    return res.send(await produtoService.createProductService(corpo));
  }catch(err){
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
  }
};

const updateProductController = async (req,res) => {
  try{
    return res.send(await produtoService.updateProductService(req.params.id, req.body));
  }catch(err){
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
  }
};

const deleteProductController = async (req,res) => {
  try{
    return res.send(await produtoService.deleteProductService(req.params.id));
  }catch(err){
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
  }
};

const addCategoriaProductController = async (res, req) => {
  try{
    req.body.createdAt = new Date();
    const categoria = await produtoService.addCategoriaProductService(req.params.id, req.body);

  }catch(err){
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
  }
};

const removeCategoriaProductController = async (res, req) => {
  try{
    const categoria = await produtoService.removeCategoriaProductService(req.body);

  }catch(err){
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
  }
};

module.exports = {
  findProductByIdController,
  findAllProductsController,
  createProductController,
  updateProductController,
  deleteProductController,
  addCategoriaProductController,
  removeCategoriaProductController
}