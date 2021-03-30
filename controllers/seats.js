const Seats = require('../models').seats;

module.exports = {
   /**
   * @apiPermission public
   * @apiName ProyectoCinePI:
   * @api {get} /api/count/Seats  Count seats
   * @apiGroup Seats
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
      Seats.count()
      .then((result) => res.status(200).send({ count: result}))
      .catch((err) => res.status(400).send({ status: 400, response: err }));
  },

  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {post} /api/seats Create seats
   * @apiGroup Seats
   * @apiParam {String} numberOfSeats Seats number of seats
   * @apiParam {Number} fk_roomsId Seats rooms id
   * @apiparam {Number} fk_statusesId Seats statuses id  
   * @apiParam {Number} [active] Seats active
   * @apiParam {Number} createdBy Seats createdBy
   * @apiParamExample {json} Request-Example:
   *     [{
   *      "numberOfSeats": "G10",
   *      "fk_roomsId": 1,
   *      "fk_statusesId:" "1",
   *      "active": 1,
   *      "createdBy": 1
   *     }]
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "numberOfSeats": "G10",
   *      "fk_roomsId": 1,
   *      "fk_statusesId:" "1",
   *      "active": 1,
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
       Seats.bulkCreate([...req.body])
       .then((result) => res.status(200).send(result))
       .catch((err) => res.status(400).send({ status: 400, response: err }));
   },

   /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {delete} /api/seats/:id  Delete a seats
   * @apiGroup Seats
   * @apiParam {Number} id Seats unique id
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
      Seats.destroy({ where: { seatsId: req.params.id }})
      .then((result) => res.status(200).send({ rows: result}))
      .catch((err) => res.status(400).send({ status: 400, response: err}));
  },

  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {get} /api/seats  Get all seats
   * @apiGroup Seats
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "numberOfSeat: "G18",
   *      "fk_roomsId": 1,
   *      "fk_statusesId:" 1,
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
    Seats.findAll(query)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(400).send({ status: 400, response: err}));
},

/**
 * @apiPermission public
 * @apiName ProyectoCineAPI:
 * @api {get} /api/seats/:id  Get a seats
 * @apiGroup Seat
 * @apiParam {Number} id Seat unique id
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "numberOfSeats" : "G18"
 *      "fk_roomsId": 1,
 *      "fk_statuses:" 1,
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
    Seats.findById(req.params.id)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(400).send({ status:400, response: err}));
},

/** 
* @apiPermission public
* @apiName ProyectoCineAPI:
* @api {patch} /api/seats/:id  Update a seats
* @apiGroup Seats
* @apiParam {String} [numberOfSeats] Seats number of seats
* @apiParam {Number} fk_roomsId Seats room id
* @apiParam {Number} fk_statusesId Seats statuse id
* @apiParam {Number} [active] Seats active
* @apiParamExample {json} Request-Example:
*     {
*    
*      "fk_roomsId": 1,
*      "numberOSeats": "G18",    
*      "fk_statuses": 1,
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
   Seats.update({ ...req.body }, { where: { seatsId: req.params.id } })
   .then((result) => res.status(200).send({ rows: result }))
   .catch((err) => res.status(400).send({ status: 400, response: err }));
},
};
