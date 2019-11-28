var mongoose = require('./../../config/db');
var Schema = mongoose.Schema;

var estudantesSchema = new Schema({
    nome: String,
    idade_ate_31_12_2016: Number,
    ra: Number,
    campus: String,
    municipio: String,
    curso: String,
    modalidade: String,
    nivel_do_curso: String,
    data_inicio: Date
});

const estudantes = mongoose.model(process.env.COLLECTION, estudantesSchema);
module.exports = estudantes;