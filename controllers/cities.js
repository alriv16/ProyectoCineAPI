const Cities = require ('../models').cities;

module.exports = {
/**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {get} /api/count/cities  Count cities
   * @apiGroup Cities
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *      "count": 13,
   *    }
   *
   * @apiErrorExample {json} Server error
   *    HTTP/1.1 500 Internal Server Error
   *
   * @apiErrorExample {json} Request error
   *    HTTP/1.1 400 Bad Request Error
   * */
count(req, res) {
    Cities.count()
    .then((result) => res.status(200).send({ count: result}))
    .catch((err) => res.status(400).send({ status: 400, response: err }));
},

/**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {post} /api/cities  Create cities
   * @apiGroup Cities
   * @apiParam {String} name Cities name
   * @apiParam {Number} [active] Cities active
   * @apiParam {Number} fk_statesId Cities states id
   * @apiParam {Number} createdBy Cities createdBy
   * @apiParamExample {json} Request-Example:
   *     [{
   *      "name": "Santa Ana",
   *      "active": 1,
   *      "fk_statesId": 2,
   *      "createdBy": 1
   *     }]
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "citiesId": 10 ,
   *      "name": "Santa Ana",
   *      "active": 1,
   *      "fk_statesId": 2,
   *      "createdAt": "2021-03-14T19:37:05.000Z",
   *      "updatedAt": null,
   *      "createdBy": 1,
   *      "updatedBy": null
   *    }]
   *
   * @apiErrorExample {json} Server error
   *    HTTP/1.1 500 Internal Server Error
   *
   * @apiErrorExample {json} Request error
   *    HTTP/1.1 400 Bad Request Error
   * */
  create(req, res){
      Cities.bulkCreate([...req.body])
      .then((result)=> res.status(200).send(result)).
      catch((err) => res.status(400).send({ status: 400, response: err}));
  },

  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {delete} /api/cities/:id  Delete a cities
   * @apiGroup Cities
   * @apiParam {Number} id City unique id
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *      "rows": [ 1 ]
   *    }
   *
   * @apiErrorExample {json} Server error
   *    HTTP/1.1 500 Internal Server Error
   *
   * @apiErrorExample {json} Request error
   *    HTTP/1.1 400 Bad Request Error
   * */
destroy(req, res){
    Cities.destroy({ where: { citiesId: req.params.id } })
    .then((result)=> res.status(200).send({ rows: result}))
    .catch((err) => res.status(400).send({ status: 400, response: err}))
},

 /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {get} /api/cities  Get all cities
   * @apiGroup Cities
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "citiesId": 1,
   *      "name": "San Salvador",
   *      "active": 1,
   *      "fk_statessId": 1,
   *      "createdAt": "2021-03-14T19:17:04.000Z",
   *      "updatedAt": null,
   *      "createdBy": 1,
   *      "updatedBy": null
   *    }]
   *
   * @apiErrorExample {json} Server error
   *    HTTP/1.1 500 Internal Server Error
   *
   * @apiErrorExample {json} Request error
   *    HTTP/1.1 400 Bad Request Error
   * */
  findAll(req, res){
      let query= { limit: 500 };
      if( req.query.filter) {
          query= JSON.parse(req.query.filter);
      }
      Cities.findAll(query)
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(400).send({ status: 400, response: err }));
  },

  /**
   * @apiPermission public
   * @apiName ProyecyoCineAPI:
   * @api {get} /api/cities/:id  Get a city
   * @apiGroup Cities
   * @apiParam {Number} id City unique id
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *      "citiesId": 1,
   *      "name": "San Salvador",
   *      "active": 1,
   *      "fk_statesId": 1,
   *      "createdAt": "2021-03-14T19:18:04.000Z",
   *      "updatedAt": null,
   *      "createdBy": 1,
   *      "updatedBy": null
   *    }
   *
   * @apiErrorExample {json} Server error
   *    HTTP/1.1 500 Internal Server Error
   *
   * @apiErrorExample {json} Request error
   *    HTTP/1.1 400 Bad Request Error
   * */
  findById(req, res){
      Cities.findByPk(req.params.id)
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(400).send({ status: 400, response: err }));
  },

/**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {patch} /api/cities/:id  Update a city
   * @apiGroup Cities
   * @apiParam {Number} id City unique id
   * @apiParam {String} [name] City name
   * @apiParam {Number} [active] City active
   * @apiParam {Number} [fk_statesId] City state id
   * @apiParam {Number} updatedBy City updatedBy
   * @apiParamExample {json} Request-Example:
   *     {
   *      "name": "San Salvador",
   *      "active": 1,
   *      "fk_statesId": 1,
   *      "updatedBy": 1
   *     }
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *      "rows": [ 1 ]
   *    }
   *
   * @apiErrorExample {json} Server error
   *    HTTP/1.1 500 Internal Server Error
   *
   * @apiErrorExample {json} Request error
   *    HTTP/1.1 400 Bad Request Error
   * */  

update(req, res) {
    Cities.update({...req.body }, { where: { citiesId: req.params.id } })
    .then((result) => res.status(200).send({ rows: result }))
    .catch((err) => res.status(400).send({ status: 400, response: err}));
  },
};