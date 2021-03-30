const Billboards = require('../models').billboards;

module.exports = {
   /**
   * @apiPermission public
   * @apiName ProyectoCinePI:
   * @api {get} /api/count/Billboards  Count billboards
   * @apiGroup Billboards
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
      Billboards.count()
      .then((result) => res.status(200).send({ count: result}))
      .catch((err) => res.status(400).send({ status: 400, response: err }));
  },

  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {post} /api/billboards Create billboards
   * @apiGroup Billboards
   * @apiParam {Number} fk_rooms Billboards room id
   * @apiParam {Number} fk_moviesId Billboards movie id
   * @apiparam {Time}   startTime Billboards startTime
   * @apiParam {Time}   endTime Billboards endTime
   * @apiParam {Number} [active] Billboards active
   * @apiParam {Number} createdBy Billboards createdBy
   * @apiParamExample {json} Request-Example:
   *     [{
   *      "roomsId": 1,
   *      "moviesId": 1,
   *      "startTime:" "23:50:00",
   *      "endTime:" "02:51:59",
   *      "active": 1,
   *      "createdBy": 1
   *     }]
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "fk_roomsId": 1,
   *      "fk_moviesId": 1,
   *      "startTime:" "23:50:00",
   *      "endTime:" "02:51:59",
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
       Billboards.bulkCreate([...req.body])
       .then((result) => res.status(200).send(result))
       .catch((err) => res.status(400).send({ status: 400, response: err }));
   },

   /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {delete} /api/billboards/:id  Delete a billboards
   * @apiGroup Billboards
   * @apiParam {Number} id Billboards unique id
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
      Billboards.destroy({ where: { billboardsId: req.params.id }})
      .then((result) => res.status(200).send({ rows: result}))
      .catch((err) => res.status(400).send({ status: 400, response: err}));
  },

  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {get} /api/billboards  Get all billboards
   * @apiGroup Bilboards
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "roomsId": 1,
   *      "fk_moviesId": 1,
   *      "startTime:" "23:50:00",
   *      "endTime:" "02:51:59",
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
    Billboards.findAll(query)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(400).send({ status: 400, response: err}));
},

/**
 * @apiPermission public
 * @apiName ProyectoCineAPI:
 * @api {get} /api/billboards/:id  Get a billboards
 * @apiGroup Billboard
 * @apiParam {Number} id Billboard unique id
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "fk_roomsId": 1,
 *      "fk_moviesId": 1,
 *      "startTime:" "23:50:00",
*       "endTime:" "02:51:59",
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
    Billboards.findById(req.params.id)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(400).send({ status:400, response: err}));
},

/** 
* @apiPermission public
* @apiName ProyectoCineAPI:
* @api {patch} /api/billboards/:id  Update a billboards
* @apiGroup Billboards
* @apiParam {Number} fk_roomsId Billboard room id
* @apiParam {Number} fk_moviesId Billboard movie id
* @apiParam {Time} [startTime] Billboard startTime
* @apiParam {Time} [endTime] Billboard endTime
* @apiParam {Number} [active] Billboard active
* @apiParam {Number} [fk_citiesId] CinemaBranch city id
* @apiParam {Number} updatedBy CinemaBranch updatedBy
* @apiParamExample {json} Request-Example:
*     {
*    
*      "fk_roomsId": 1,
*      "fk_moviesId": 1,
*      "startTime:" "23:50:00",
*      "endTime:" "02:51:59",
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
   Billboards.update({ ...req.body }, { where: { billboardsId: req.params.id } })
   .then((result) => res.status(200).send({ rows: result }))
   .catch((err) => res.status(400).send({ status: 400, response: err }));
},
};
