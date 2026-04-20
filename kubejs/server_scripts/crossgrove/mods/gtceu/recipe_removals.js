// priority: 1000

ServerEvents.recipes(event => {
  CG_GT_ABSORBED_RECIPE_TYPES.forEach(type => {
    event.remove({ type: 'gtceu:' + type })
  })

  cgGtMachineIds().forEach(id => {
    event.remove({ output: id })
  })

  CG_GT_FORM_BYPASS_OUTPUT_PATTERNS.forEach(pattern => {
    event.remove({ output: new RegExp(pattern) })
  })
})

ServerEvents.tags('item', event => {
  event.add('crossgrove:removed/gtceu_absorbed_machines', cgGtMachineIds())
})
