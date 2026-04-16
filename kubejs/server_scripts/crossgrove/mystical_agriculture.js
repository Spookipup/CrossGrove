// priority: 0

ServerEvents.recipes(event => {
  // Direct crop seed recipes are removed until GT/Crossroads-backed replacements exist.
  event.remove({ id: 'mysticalagriculture:inferium_seeds' })
  event.remove({ id: 'mysticalagriculture:prosperity_seed_base' })
  event.remove({ id: 'mysticalagriculture:soulium_seed_base' })
  event.remove({ id: /^mysticalagriculture:seed\/crafting\/.+/ })
  event.remove({ id: /^mysticalagriculture:seed\/infusion\/.+/ })
})
