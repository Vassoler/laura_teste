import errorHandler from "../middlewares/error.handler";

class EstudantesDatabase {
  constructor() {
    this.mongoose = require("mongoose");
    this.model = require("./../models/estudantes");
  }

  popularBase() {
    const csv = require("csv-parser");
    const fs = require("fs");

    return new Promise((resolve, reject) => { fs.createReadStream("./assets/"+process.env.NOMECSV+".csv")
      .pipe(csv())
      .on("data", row => {
        this.model.create(row);
      })
      .on("end", () => {
        console.log("CSV file successfully processed");
        resolve("Arquivo CSV processado com sucesso");
      })
      .on("error", () => {
        reject("Falha ao processar arquivo CSV");
      });;
    });
  }

  all() {
    return Promise.resolve(this.model.find(null));
  }

  listarModalidade(param) {
    return Promise.resolve(
      this.model
        .find(
          {
            modalidade: param.modalidade,
            data_inicio: {
              $gte: new Date(param.data_inicio),
              $lt: new Date(param.data_fim)
            }
          }
        )
        .sort({ data_inicio: -1 })
    );
  }

  listarCursos(campus) {
    return Promise.resolve(
      this.model.distinct("curso", { campus: campus })
    );
  }

  totalAlunos(param) {
    return new Promise((resolve, reject) => {
      this.model
        .count(
          {
            campus: param.campus,
            data_inicio: {
              $gte: new Date(param.data_inicio),
              $lt: new Date(param.data_fim)
            }
          },
          (err, resposta) => {
            if(err){
              throw err;
            }
            let retorno = {};
            retorno.totalAlunos = resposta;
            resolve(retorno);
          }

        )   
      });
  }

  byRA(paramRA) {
    return Promise.resolve(
      this.model
        .findOne(
          {
            ra: paramRA
          }
        )        
    );
  }

  deletarEstudante(param) {
    return Promise.resolve(
      this.model
        .deleteOne(
          {
            ra: param.ra,
            campus: param.campus
          }
        )        
    );
  }

  byId(id) {
    return Promise.resolve(id);
  }

  insert(param) {
    var record = this.model.create(param);
    return Promise.resolve(record);
  }

}

export default new EstudantesDatabase();
