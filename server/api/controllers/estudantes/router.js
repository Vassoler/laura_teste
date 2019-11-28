import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .post('/novo', controller.create)
  .post('/listarModalidade', controller.listarModalidade)
  .get('/listarCursos/:campus', controller.listarCursos)
  .get('/totalAlunos', controller.all)
  .get('/buscarAluno/:ra', controller.all)  
  .get('/getById/:id', controller.byId)
  .get('/', controller.all)
  .delete('/deletar', controller.all);
  
