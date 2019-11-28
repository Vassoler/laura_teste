import * as express from "express";
import controller from "./controller";

export default express
  .Router()
  .post("/novo", controller.create)
  .get(
    "/listarModalidade/:modalidade/:data_inicio/:data_fim",
    controller.listarModalidade
  )
  .get("/listarCursos/:campus", controller.listarCursos)
  .post("/totalAlunos", controller.totalAlunos)
  .get("/buscarAluno/:ra", controller.byRA)
  .get("/getById/:id", controller.byId)
  .get("/", controller.all)
  .delete("/deletar", controller.deletarEstudante);
