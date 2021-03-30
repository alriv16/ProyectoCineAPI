const CinemaBranchRooms = require('../models').cinemaBranchRooms;

module.exports = {
      /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {get} /api/count/cinemaBranchRooms  Count cinemaBranchRooms
   * @apiGroup CinemaBranchRooms
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
      CinemaBranchRooms.count()
      .then((result) => res.status(200).send({ count: result}))
      .catch((err) => res.status(400).send({ status: 400, response: err}));
  },

  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {post} /api/cinemaBranchRooms Create cinemaBranRooms
   * @apiGroup CinemaBranchRooms
   * @apiParam {Number} [active] CinemaBranchRoom active
   * @apiParam {Number} fk_cinemaBranchesId CinemaBranchRoom cinemaBranch id
   * @apiParam {Number} createdBy StoreBranchRoom createdBy
   * @apiParamExample {json} Request-Example:
   *     [{
   *      "active": 1,
   *      "fk_cinemaBranchesId": 1,
   *      "fk_roomsId": 1,
   *      "createdBy": 1
   *     }]
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *      "active": 1,
   *      "fk_cinemaBranchesId": 1,
   *      "fk_roomsId": 1
   *      "createdAt": "2021-03-14T21:17:04.000Z",
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
      cinemaBranchRooms.bulkCreate([...req.body])
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(400).send({ status: 400, response: err }));
  },

  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {delete} /api/cinemaBranchRooms/:id  Delete a cinemaBranchRooms
   * @apiGroup CinemaBranchRooms
   * @apiParam {Number} id CinemaBranchRooms unique id
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
      CinemaBranchRooms.destroy({ where: { cinemaBranchRoomsId: req.params.id }})
      .then((result) => res.status(200).send({ rows: result }))
      .catch((result) => res.status(400).send({ status: 400, response: err}));
  },

  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {get} /api/cinemaBranchRooms  Get all cinemaBranchRooms
   * @apiGroup CinemaBranchRoomss
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "cinemaBranchRoomsId": 1,
   *      "active": 1,
   *      "fk_cinemaBranchesId": 1,
   *      "createdAt": "2021-01-14T23:53:51.000Z",
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
      let query = { limit: 200 };
      if (req.query.filter) {
          query = JSON.parse(req.query.filter);
      }

      CinemaBranchRooms.findAll(query)
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(400).send({ status: 400, response: err}));
  },

    /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {get} /api/storeBrancRooms/:id  Get a cinemaBranchRooms
   * @apiGroup CinemaBranchRooms
   * @apiParam {Number} id CinemaBranchRoom unique id
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *      "cinemaBranchRoomsId": 1,
   *      "active": 1,
   *      "fk_cinemaBranchesId": 1,
   *      "createdAt": "2021-03-14T23:22:01.000Z",
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
      cinemaBranchRooms.findByPk(req.params.id)
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(400).send({ status: 400, response: err}));
  },

  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {patch} /api/storeBrancRooms/:id  Update a storeBranchRoom
   * @apiGroup CinemaBranchRooms
   * @apiParam {Number} id CinemaBranchRooms unique id
   * @apiParam {Number} [active] CinemaBranchRoom active
   * @apiParam {Number} [fk_cinemaBranchesId] CinemaBranchRoom cinemaBranch id
   * @apiParam {Number} updatedBy CinemaBranchRoom updatedBy
   * @apiParamExample {json} Request-Example:
   *     {
   *      "active": 1,
   *      "fk_cinemaBranchesId": 1,
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
      CinemaBranchRooms.update({ ...req.body }, { where: { cinemaBranchRoomsId: req.params.id } })
      .then((result) => res.status(200).send({ rows: result }))
      .catch((err) => res.status(400).send({ status: 400, response: err}));
  },
};