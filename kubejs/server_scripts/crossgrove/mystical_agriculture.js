// priority: 0

ServerEvents.recipes(event => {
  // Mystical Agriculture is a late bio-factory payoff, not an early resource generator.
  event.remove({ id: /^mysticalagriculture:.+/ })

  // Kept explicit as documentation for the first recipes that need authored replacements.
  event.remove({ id: 'mysticalagriculture:inferium_seeds' })
  event.remove({ id: 'mysticalagriculture:prosperity_seed_base' })
  event.remove({ id: 'mysticalagriculture:soulium_seed_base' })
  event.remove({ id: /^mysticalagriculture:seed\/crafting\/.+/ })
  event.remove({ id: /^mysticalagriculture:seed\/infusion\/.+/ })
})
