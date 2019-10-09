_ = require 'underscore'
sd = require('sharify').data
Backbone = require 'backbone'
Partner = require '../../../models/partner.coffee'
template = -> require('../templates/contact.pug') arguments...
locationTemplate = -> require('../templates/location.pug') arguments...
contactTemplate = -> require('../templates/contact_info.pug') arguments...

module.exports = class PartnerContactView extends Backbone.View
  initialize: (options) ->
    { @profile, @partner } = options

    @listenTo @partner, 'sync', @renderAdditionalInfo
    @partner.related().locations.fetch success: @renderLocations
    @render()

  render: ->
    @$el.html template profile: @profile, partner: @partner

  renderLocations: (locations) =>
    locationStrings = []
    _.each locations.groupBy('city'), (locations, city) ->
      _.each locations, (location) ->
        locationStrings.push locationTemplate(location: location)
    @$('.partner2-locations').html locationStrings.join("")

  renderAdditionalInfo: ->
    @$('.partner2-contact-info').html contactTemplate(profile: @profile, partner: @partner)
    @$('.partner2-vat-info').html "VAT ID #: #{@partner.get('vat_number')}" if @partner.get('vat_number')
