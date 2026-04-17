// priority: 0

ServerEvents.recipes(event => {
  event.remove({ id: /^crossroads:detailed_crafter\/(alchemy|technomancy|witchcraft)\/.+/ })
  event.remove({ id: /^crossroads:bobo\/.+/ })
  event.remove({ id: 'crossroads:bobo_rod' })

  event.remove({ id: 'crossroads:formulation_vat/fertilizer_solution_alchemic' })
  event.remove({ id: 'crossroads:formulation_vat/fertilizer_solution_vegan' })
  event.remove({ id: 'crossroads:formulation_vat/nutrient_solution_alchemic' })
})
