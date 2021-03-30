const Movies = require('../models').movies;

module.exports = {
  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {get} /api/count/movies  Count movies
   * @apiGroup Movies
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
    Movies.count()
      .then((result) => res.status(200).send({ count: result }))
      .catch((err) => res.status(400).send({ status: 400, response: err }));
  },

  /**
   * @apiPermission pubblic
   * @apiName ProyectoCineAPI:
   * @api {post} /api/movies  Create movies
   * @apiGroup Movies
   * @apiParam {Number} [active] Movie active
   * @apiParam {String} name Movie name 
   * @apiParam {String} duration Movie duration
   * @apiParam {String} genre Movie genre
   * @apiParam {String} rating Movie rating
   * @apiParam {String} format Movie format
   * @apiParam {String} language Movie language
   * @apiParam {String} director Movie director
   * @apiParam {String} cast Movie cast
   * @apiParam {Number} createdBy Movie createdBy
   * @apiParamExample {json} Request-Example:
   *     [{
   *      "name": "The Avengers: Endgame",
   *      "duration:" "3h 1m",
   *      "genre": "Aventura, Drama, Acción"
   *      "rating:" "A",
   *      "format:" "3D",
   *      "language:" "Inglés, Subtitulado",
   *      "director:" "Anthony Ruso, Joe Ruso",
   *      "cast:" "Robert Downey Jr, Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson"
   *      "active": 1,
   *      "createdBy": 1
   *     }]
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "moviesId": 1,
   *      "name": "The Avengers: Endgame",
   *      "duration:" "3h 1m",
   *      "genre": "Aventura, Drama, Acción"
   *      "rating:" "A",
   *      "format:" "3D",
   *      "language:" "Inglés, Subtitulado",
   *      "director:" "Anthony Ruso, Joe Ruso",
   *      "cast:" "Robert Downey Jr, Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson"
   *      "active": 1,
   *      "createdAt": "2021-03-15T18:17:04.000Z",
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
    Movies.bulkCreate([...req.body])
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(400).send({ status: 400, response: err }));
  },

  /**
   * @apiPermission public
   * @apiName ProyectoCineAPI:
   * @api {delete} /api/movies/:id  Delete a movies
   * @apiGroup Movies
   * @apiParam {Number} id Movies unique id
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
    Movies.destroy({ where: { moviesId: req.params.id }})
    .then((result) => res.status(200).send({ rows: result}))
    .catch((err) => res.status(400).send({ status: 400, response: err}));
},

/**
 * @apiPermission public
 * @apiName ProyectoCineAPI:
 * @api {get} /api/movies  Get all movies
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
  Movies.findAll(query)
  .then((result) => res.status(200).send(result))
  .catch((err) => res.status(400).send({ status: 400, response: err}));
},

/**
* @apiPermission public
* @apiName ProyectoCineAPI:
* @api {get} /api/movies/:id  Get a movies
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
  Movies.findById(req.params.id)
  .then((result) => res.status(200).send(result))
  .catch((err) => res.status(400).send({ status:400, response: err}));
},

/** 
* @apiPermission public
* @apiName ProyectoCineAPI:
* @api {patch} /api/movies/:id  Update a movies
* @apiGroup Movies
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
 Movies.update({ ...req.body }, { where: { moviesId: req.params.id } })
 .then((result) => res.status(200).send({ rows: result }))
 .catch((err) => res.status(400).send({ status: 400, response: err }));
},
};
