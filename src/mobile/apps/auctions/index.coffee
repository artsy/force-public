#
# The auctions listing page
#

express = require 'express'
routes = require './routes'

app = module.exports = express()
app.set 'views', __dirname + '/templates'
app.set 'view engine', 'pug'
app.get '/auctions', routes.index

