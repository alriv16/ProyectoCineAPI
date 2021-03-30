const Statuses = require ('../models').statuses;

module.exports = {
   /**
   * @apiPermission public
   * @apiName ProyectoCinePI:
   * @api {get} /api/count/Statuses  Count statuses
   * @apiGroup Statuses
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *      "count": 28889,
   *    }
   *
   * @apiErrorExample {json} Server error
   *    HTTP/1.1 500 Internal Server Error
   *
   * @apiErrorExample {json} Request error
   *    HTTP/1.1 400 Bad Request Error
   * */
  count(req, res) {
      Statuses.count()
      .then((result) => res.status(200).send({ count: result}))
      .catch((err) => res.status(400).send({ status: 400, response: err }));
  },

  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {post} /api/statuses Create statuses
   * @apiGroup Statuses
   * @apiParam {String} name Statuses name
   * @apiParam {String} description Statuses description
   * @apiParam {Number} [active] Statuses active
   * @apiParam {Number} createdBy Statuses createdBy
   * @apiParamExample {json} Request-Example:
   *     [{
   *      "name": "vendido",
   *      "description": "estado para la silla de una sala",
   *      "active": 1,
   *      "createdBy": 1
   *     }]
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "name": "vendido",
   *      "description": "estado para la silla de una sala",
   *      "active": 1,
   *      "createdAt": "2021-03-14T19:36:05.000Z",
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
       Statuses.bulkcreate([...req.body])
       .then((result) => res.status(200).send(result))
       .catch((err) => res.status(400).send({ status: 400, response: err }));
   },

   /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {delete} /api/statuses/:id  Delete a statuses
   * @apiGroup Statuses
   * @apiParam {Number} id Statuses unique id
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
      Statuses.destroy({ where: { statusesId: req.params.id }})
      .then((result) => res.status(200).send({ rows: result}))
      .catch((err) => res.status(400).send({ status: 400, response: err}));
  },

  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {get} /api/statuses  Get all statuses
   * @apiGroup Statuses
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "name": "vendido",
   *      "description": "estado para la silla de una sala",
   *      "active": 1,
   *      "createdAt": "2021-03-14T20:17:04.000Z",
   *      "updatedAt": null,
   *      "createdBy": 1,
   *      "updatedBy": null
   *    }]
   *
   * @apiErrorExample {json} Server error
   *    HTTP/1.1 500 Internal Server Error
   **/
   findAll(req, res){
    let query = { limit: 200};
    if(req.query.filter){
        query = JSON.parse(req.query.filter);
    }
    Statuses.findAll(query)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(400).send({ status: 400, response: err}));
},

/**
 * @apiPermission public
 * @apiName ProyectoCineAPI:
 * @api {get} /api/statuses/:id  Get a statuses
 * @apiGroup Status
 * @apiParam {Number} id Status unique id
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
    
 *      "name": "vendido",
 *      "description": "estado para la silla de una sala",
 *      "active": 1,
 *      "createdAt": "2021-03-14T20:19:10.000Z",
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
findById(req, res) {
    Statuses.findById(req.params.id)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(400).send({ status:400, response: err}));
},

/** 
* @apiPermission public
* @apiName ProyectoCineAPI:
* @api {patch} /api/statuses/:id  Update a statuses
* @apiGroup Statuses
* @apiParam {String} name Statuses name
* @apiParam {String} description Statuses description
* @apiParam {Number} [active] Statuses active
* @apiParamExample {json} Request-Example:
*     {
*    
*      "name": "vendido",
*      "description": "estado para la silla de una sala",
*      "active": 1,
*      "createdAt": "2021-03-14T20:19:10.000Z",
*      "updatedAt": null,
*      "createdBy": 1,
*      "updatedBy": null
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
   Statuses.update({ ...req.body }, { where: { statusesId: req.params.id } })
   .then((result) => res.status(200).send({ rows: result }))
   .catch((err) => res.status(400).send({ status: 400, response: err }));
},
};
