const router = require('koa-router')()
const db = require('../tool/db');

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
    let index = await db.User.findAll({
        offset: 0,
        limit:10,
    });
  ctx.body = {code:200, data:index};
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
