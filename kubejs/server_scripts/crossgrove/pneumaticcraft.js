// priority: 0

ServerEvents.recipes(event => {
  event.remove({ id: 'pneumaticcraft:amadron/emerald_to_oil' })
  event.remove({ id: 'pneumaticcraft:amadron/oil_to_emerald' })
})
