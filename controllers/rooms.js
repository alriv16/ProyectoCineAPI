const Rooms = require("../models").rooms;

module.exports = {
  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {get} /api/count/rooms  Count rooms
   * @apiGroup Rooms
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
    Rooms.count()
      .then((result) => res.status(200).send({ count: result }))
      .catch((err) => res.status(400).send({ status: 400, response: err }));
  },

  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {post} /api/rooms  Create roomss
   * @apiGroup Rooms
   * @apiParam {String} name Room name
   * @apiParam {Number} [active] Room active
   * @apiParam {Number} fk_storeBranchRoomsId Room storeBranchRooms id
   * @apiParam {Number} fk_statusId Room status id
   * @apiParam {Number} capacity Room capacity
   * @apiParam {Number} createdBy Room createdBy
   * @apiParamExample {json} Request-Example:
   *     [{
   *      "name": "Sala 1",
   *      "active": 1,
   *      "fk_storeBranchRoomsId": 4,
   *      "fk_statusId": 1
   *      "capacity": 50,
   *      "createdBy": 1
   *     }]
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "roomsId": 1,
   *      "name": "San Salvador",
   *      "active": 1,
   *      "fk_storeBranchRoomsId": 4,
   *      "fk_statusId": 1,
   *      "capacity": 50,
   *      "createdAt": "2020-01-27T17:17:04.000Z",
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
  create(req, res) {
    Rooms.bulkCreate([ ...req.body ])
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(400).send({ status: 400, response: err }));
  },

  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {delete} /api/rooms/:id  Delete a room
   * @apiGroup Rooms
   * @apiParam {Number} id Room unique id
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
  destroy(req, res) {
    Rooms.destroy({ where: { roomsId: req.params.id } })
      .then((result) => res.status(200).send({ rows: result }))
      .catch((err) => res.status(400).send({ status: 400, response: err }));
  },

  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {get} /api/rooms  Get all rooms
   * @apiGroup Rooms
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "roomsId": 1,
   *      "name": "Sala 1",
   *      "active": 1,
   *      "fk_storeBranchRoomsId": 2,
   *      "fk_statusId": 1
   *      "capacity": 1,
   *      "createdAt": "2021-03-15T15:24:02.000Z",
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
  findAll(req, res) {
    let query = { limit: 5000 };
    if (req.query.filter) {
      query = JSON.parse(req.query.filter);
    }

    Rooms.findAll(query)
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(400).send({ status: 400, response: err }));
  },

  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {get} /api/rooms/:id  Get a room
   * @apiGroup Rooms
   * @apiParam {Number} id Room unique id
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *      "roomsId": 1,
   *      "name": "Sala 1",
   *      "active": 1,
   *      "fk_storeBranchRoomsId": 4,
   *      "fk_statusId": 1,
   *      "createdAt": "2021-03-15T17:17:04.000Z",
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
    Rooms.findByPk(req.params.id)
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(400).send({ status: 400, response: err }));
  },

  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {patch} /api/rooms/:id  Update a room
   * @apiGroup Rooms
   * @apiParam {Number} id Room unique id
   * @apiParam {String} [name] Room name
   * @apiParam {Number} [active] Room active
   * @apiParam {Number} [fk_cId] State country id
   * @apiParam {Number} updatedBy State updatedBy
   * @apiParamExample {json} Request-Example:
   *     {
   *      "name": "San Salvador",
   *      "active": 1,
   *      "fk_countriesId": 4,
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
    Rooms.update({ ...req.body }, { where: { roomsId: req.params.id } })
      .then((result) => res.status(200).send({ rows: result }))
      .catch((err) => res.status(400).send({ status: 400, response: err }));
  },
};
