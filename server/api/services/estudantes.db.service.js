import errorHandler from "../middlewares/error.handler";

class EstudantesDatabase {
  constructor() {
    this.mongoose = require("mongoose");
    this.model = require("./../models/estudantes");
  }

  popularBase() {
    const csv = require("csv-parser");
    const fs = require("fs");

    fs.createReadStream("./dataset_estudantes.csv")
      .pipe(csv())
      .on("data", row => {
        this.model.create(row);
      })
      .on("end", () => {
        console.log("CSV file successfully processed");
      });
    return Promise.resolve("Sucesso");
  }

  all() {
    return Promise.resolve(this.model.find(null, this.funcaoRetorno));
  }

  listarModalidade(param) {
    return Promise.resolve(
      this.model.find(
        {
          modalidade: param.modalidade,
          data_inicio: {
            $gte: new Date(param.data_inicio),
            $lt: new Date(param.data_fim)
          }
        },
        this.funcaoRetorno
      )
    );
  }

  listarCursos(campus){
    return Promise.resolve(this.model.distinct('curso', {campus: campus}, this.funcaoRetorno));
  }

  byId(id) {
    return Promise.resolve(this._data[id]);
  }

  insert(param) {
    var record = this.model.create(param);
    return Promise.resolve(record);
  }

  funcaoRetorno(err, estudantes) {
    if (err) {
      throw err;
    }

    return estudantes;
  }
}

export default new EstudantesDatabase();
