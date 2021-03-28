const CinemaBranches = require ('../models').cinemaBranches;

module.exports = {
   /**
   * @apiPermission public
   * @apiName ProyectoCinePI:
   * @api {get} /api/count/cinemaBranches  Count cinemaBranches
   * @apiGroup CinemaBranches
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
      CinemaBranches.count()
      .then((result) => res.status(200).send({ count: result}))
      .catch((err) => res.status(400).send({ status: 400, response: err }));
  },

  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {post} /api/cinemaBranches Create cinemaBranches
   * @apiGroup CinemaBranches
   * @apiParam {String} name CinemaBranch name
   * @apiParam {Number} [active] CinemaBranch active
   * @apiParam {Number} fk_citiesId CinemaBranch city id
   * @apiParam {Number} createdBy CinemaBranch createdBy
   * @apiParamExample {json} Request-Example:
   *     [{
   *      "name": "Cinépolis Galerías",
   *      "active": 1,
   *      "fk_citiesId": 1,
   *      "createdBy": 1
   *     }]
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "cinemaBranchesId": 1,
   *      "name": "Cinépolis Galerías",
   *      "active": 1,
   *      "fk_citiesId": 1,
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
       CinemaBranches.create([...req.body], { fields: ['name', 'fk_citiesId', 'createdBy'] })
       .then((result) => res.status(200).send(result))
       .catch((err) => res.status(400).send({ status: 400, response: err }));
   },

   /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {delete} /api/cinemaBranches/:id  Delete a cinemaBranch
   * @apiGroup CinemaBranches
   * @apiParam {Number} id CinemaBranch unique id
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
      CinemaBranches.destroy({ where: { cinemaBranchesId: req.params.id }})
      .then((result) => res.status(200).send({ rows: result}))
      .catch((err) => res.status(400).send({ status: 400, response: err}));
  },

  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {get} /api/stforesBranches  Get all cinemaBranches
   * @apiGroup CinemaBranches
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "storesId": 1,
   *      "name": "Cinépolis Galerías",
   *      "active": 1,
   *      "fk_statesId": 1,
   *      "createdAt": "2021-03-14T20:17:04.000Z",
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
      let query = { limit: 200};
      if(req.query.filter){
          query = JSON.parse(req.query.filter);
      }
      CinemaBranches.findAll(query)
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(400).send({ status: 400, response: err}));
  },

  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {get} /api/cinemaBranches/:id  Get a cinemaBranches
   * @apiGroup CinemaBranches
   * @apiParam {Number} id CinemaBranch unique id
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *      "cinemaBranchesId": 1,
   *      "name": "Cinépolis Galerías",
   *      "active": 1,
   *      "fk_citiesId": 1,
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
      CinemaBranches.findById(req.params.id)
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(400).send({ status:400, response: err}));
  },

  /** 
  * @apiPermission public
  * @apiName ProyectoCineAPI:
  * @api {patch} /api/cinemaBranches/:id  Update a cinemaBranch
  * @apiGroup CinemaBranches
  * @apiParam {Number} id CinemaBranch unique id
  * @apiParam {String} [name] CinemaBranch name
  * @apiParam {Number} [active] CinemaBranch active
  * @apiParam {Number} [fk_citiesId] CinemaBranch city id
  * @apiParam {Number} updatedBy CinemaBranch updatedBy
  * @apiParamExample {json} Request-Example:
  *     {
  *      "name": "Cinépolis Galerías",
  *      "active": 1,
  *      "fk_citiesId": 1,
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
     CinemaBranches.update({ ...req.body }, { where: { statesId: req.params.id } })
     .then((result) => res.status(200).send({ rows: result }))
     .catch((err) => res.status(400).send({ status: 400, response: err }));
 },
};