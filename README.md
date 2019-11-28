# laura_teste

Aplicação desenvolvida para o teste prátido para a vaga de desenvolvedor backend.

## Observações:

 - As variáveis de ambiente estão no arquivo .env.
 - A rota /database/popular irá popular a base com o arquivo .csv que deve estar dentro da pasta /assets
 e o nome do arquivo na variável de ambiente NOMECSV.
 - A documentação da API está no SWAGGER e os testes podem ser feitos pela UI do mesmo.

## Get Started

Get started developing...

```shell
# install deps
npm install

# run in development mode
npm run dev


## Install Dependencies

Install all package dependencies (one time operation)

npm install
```

## Run It
#### Run in *development* mode:
Runs the application is development mode. Should not be used in production

```shell
npm run dev
```

or debug it

```shell
npm run dev:debug
```

#### Run in *production* mode:

Compiles the application and starts it in production production mode.

```shell
npm run compile
npm start
```

## Try It
* Open you're browser to [http://localhost:3000](http://localhost:3000)
* Invoke the `/examples` endpoint 
  ```shell
  curl http://localhost:3000/api/examples
  ```


## Debug It

#### Debug the server:

```
npm run dev:debug
```

#### Debug Tests

```
npm run test:debug
```

#### Debug with VSCode

Add these [contents](https://github.com/cdimascio/generator-express-no-stress/blob/next/assets/.vscode/launch.json) to your `.vscode/launch.json` file
## Lint It

View prettier linter output

```
npm run lint
```

Fix all prettier linter errors

```
npm run lint
```

## Deploy It

Deploy to CloudFoundry

```shell
cf push laura_teste
```


   
