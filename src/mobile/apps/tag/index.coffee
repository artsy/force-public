#
# The tag detail page
#

express = require 'express'
routes = require './routes'

app = module.exports = express()
app.set 'views', __dirname + '/templates'
app.set 'view engine', 'pug'
app.get '/tag/:id', routes.index
