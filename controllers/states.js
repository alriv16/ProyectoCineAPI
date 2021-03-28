const States = require ('../models').states;

module.exports = {
/**
 * @apiPermission public
 * @apiName proyectoCineAPI:
 * @api {get} /api/count/states Count states
 * @apiGroup States
 * @apiSuccessExample {json} Success
 *    HTTP/1.1  200 OK
 *    {
 *       "count": 14,
 * } 
 * 
 * @apiErrorExample {json} Server error
 *    HTTP/1.1 500 Internal Server Error
 * 
 * @apiErrorExample {json} Request error
 *    HTTP/1.1 400 Bad Request Error
 * */
count (req, res){
    States.count()
    .then((result) => req.status(200).send({ count: result}))
    .catch((err) => req.status(400).send({ status: 400,
    response: err }));
},

/**
 * @apiPermission public
 * @apiName proyectCineAPI:
 * @api {post} /api/states Create states
 * @apiGroup States
 * @apiParam {String} name State name
 * @apiParam {Number} [active] State active
 * @apiParam {String} country State country
 * @apiParam {Number} createdBy State createdBy
 * @apiParamExample {json} Request-Example:
 * [{
 *   "name" : "San Salvador",
 *   "active" : 1,
 *   "country" : "El Salvador",
 *   "createdBy" : 1
 * }]
 * @apiSuccesExample {json} Sucess
 *    HTTP/1.1 200 OK
 *    [{
 *      "statesId" : 1,
 *      "name" : "San Salvador",
 *      "active" : 1,
 *      "country" : "El Salvador",
 *      "createdAt" : "2021-03-14T18:30:24.000Z",
 *      "updateAt" : null,
 *      "createdBy" : 1,
 *      "updatedBy" : null
 *    }]
 * @apiErrorExample {json} Server Error
 *    HTTP/1.1 500 Internal Server Error
 * 
 * @apiErrorExample {json} Server Error
 *    HTTP/1.1 400 Bad Request Error
 **/
create(req, res) {
    States.create({ ...req.body })
    .then((result) => res.status(200).send(result))
    .catch((err) => { console.log(err.message); res.status(400).send({status: 400,
      response: err.message }); });
},

 /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {delete} /api/states/:id  Delete a state
   * @apiGroup States
   * @apiParam {Number} id State unique id
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
      States.destroy({ where: { statesId: req.params.id } })
      .then((result) => res.status(200).send ({ rows: result }))
      .catch((err)=> res.status(400).send({ status: 400,
    response: err }));
  },


  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {get} /api/states  Get all states
   * @apiGroup States
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "statesId": 1,
   *      "name": "San Salvador",
   *      "active": 1,
   *      "country": "El Salvador",
   *      "createdAt": "2020-03-14T18:41:08.000Z",
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
      let query = { limit: 5000 };
      if (req.query.filter) {
          query = JSON.parse(req.query.filter);
      }
      States.findAll(query)
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(400).send({ status: 400,
    response: err }));
  },

  /**
   * @apiPermission public
   * @apiName ProyectoCineApi:
   * @api {get} /api/states/:id  Get a state
   * @apiGroup States
   * @apiParam {Number} id State unique id
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *      "statesId": 1,
   *      "name": "San Salvador",
   *      "active": 1,
   *      "country": "El Salvoadr",
   *      "createdAt": "2021-03-14T18:46:04.000Z",
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
    States.findByPk(req.params.id)
    .then((result)=> res.status(200).send(result))
    .catch((err) => res.status(400).send({ status: 400,
    response: err }));
},

  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {patch} /api/states/:id  Update a state
   * @apiGroup States
   * @apiParam {Number} id State unique id
   * @apiParam {String} [name] State name
   * @apiParam {Number} [active] State active
   * @apiParam {String} Country State country 
   * @apiParam {Number} updatedBy State updatedBy
   * @apiParamExample {json} Request-Example:
   *     {
   *      "name": "San Salvador",
   *      "active": 1,
   *      "country": "El Salvador",
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
      States.update ({ ...req.body }, { where: { statesId:
      req.params.id } })
      .then((result) => res.status(200).send({ rows: result }))
      .catch((err) => res.status(400).send({ status: 400,
      response: err }));
  },
};