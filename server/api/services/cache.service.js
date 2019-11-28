import db from "./estudantes.db.service";

var mcache;

if(!mcache){
  mcache = [];
}

var cache = (ra, estudante) => {
  return new Promise((resolve, reject) => {
    if(ra == null){
      db.insert(estudante).then((dados) => { 
        let item = dados;
        if(mcache.length > 9){
          mcache.splice(0,1);
        }
        mcache.push(item);
        resolve(item);
      });
    }
    else{
      let flag = false;
      for(let i in mcache){
        let item = mcache[i];
        //console.log(item.ra + " -> " + ra);
        if(item.ra == ra){
          flag = true;
          resolve(item);
          break;
        }
      }

      if(!flag){
        db.byRA(ra).then((dados) => { 
          let item = dados;
          if(mcache.length > 9){
            mcache.splice(0,1);
          }
          mcache.push(item);
          //console.log(mcache.length);
          resolve(item);
        });
      }
    }
  });
}

module.exports = cache;
