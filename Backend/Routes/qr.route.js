

const { Router } = require('express');

const qrRouter = Router();


const { textQrRouter, linkQrRouter,  upiQrRouter, emailQrRouter, vcardQrRouter, fetchAllQRCodes } = require('../Controllers/qr.controller');


const { middleware } = require('../Middlewares/auth.middleware');





// protected route checking middleware
/**
 * @swagger
 * components:
 *   schemas:
 *     qrSchema:
 *       type: object
 *       properties:
 *         UserID:
 *           type: string
 *         QRCodes:
 *           type: Array
 */

qrRouter.use(middleware)

/**
 * @swagger
 * /qrcode/text:
 *  post:
 *      summary: it takes the texts and return qrcodes
 *      tags: [posts]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/qrSchema'
 *      responses:
 *          200:
 *              description: return the qrcode
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/qrSchema'
 *          500:
 *              description: Some server error
 */
qrRouter.post('/text', textQrRouter)

/**
 * @swagger
 * /qrcode/link:
 *  post:
 *      summary: it takes the links and return qrcodes
 *      tags: [posts]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/qrSchema'
 *      responses:
 *          200:
 *              description: return the qrcode
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/qrSchema'
 *          500:
 *              description: Some server error
 */
qrRouter.post('/link', linkQrRouter)







/**
 * @swagger
 * /qrcode/upi:
 *  post:
 *      summary: it takes upi ID and return qrcodes
 *      tags: [posts]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/qrSchema'
 *      responses:
 *          200:
 *              description: return the qrcode
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/qrSchema'
 *          500:
 *              description: Some server error
 */
qrRouter.post('/upi', upiQrRouter)

/**
 * @swagger
 * /qrcode/email:
 *  post:
 *      summary: it takes the emailid subject and body and return qrcodes
 *      tags: [posts]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/qrSchema'
 *      responses:
 *          200:
 *              description: return the qrcode
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/qrSchema'
 *          500:
 *              description: Some server error
 */
qrRouter.post('/email', emailQrRouter)


/**
 * @swagger
 * /qrcode/vcard:
 *  post:
 *      summary: it takes the details of the person and return qrcodes
 *      tags: [posts]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/qrSchema'
 *      responses:
 *          200:
 *              description: return the qrcode
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/qrSchema'
 *          500:
 *              description: Some server error
 */
qrRouter.post("/vcard" , vcardQrRouter)


qrRouter.get("/getallQR", fetchAllQRCodes);


module.exports = {
    qrRouter
}
