// priority: 950

var CG_SCANNABLE_LOCKED_ITEMS = [
  'scannable:scanner',
  'scannable:blank_module',
  'scannable:block_module',
  'scannable:chest_module',
  'scannable:common_ores_module',
  'scannable:entity_module',
  'scannable:fluid_module',
  'scannable:friendly_entity_module',
  'scannable:hostile_entity_module',
  'scannable:range_module',
  'scannable:rare_ores_module'
]

ServerEvents.recipes(event => {
  ;['iron', 'copper', 'gold'].forEach(metal => {
    event.remove({ id: new RegExp('^minecraft:' + metal + '_ingot_from_(smelting|blasting)_.+') })
  })

  event.remove({ id: /^quark:tweaks\/(smelting|blasting)\/raw_(copper|iron|gold)_(block|bricks)_(smelt|blast)$/ })
  event.remove({ id: /^quark:tweaks\/crafting\/utility\/tools\/stone_.+/ })

  ;[
    'agricraft:coal',
    'agricraft:copper_ingot',
    'agricraft:diamond',
    'agricraft:emerald',
    'agricraft:netherite_scrap',
    'agricraft:quartz',
    'agricraft:amethyst_shard'
  ].forEach(id => {
    event.remove({ id: id })
  })

  event.remove({ id: 'naturescompass:natures_compass' })
  event.remove({ id: 'naturescompass:repair_natures_compass' })

  event.shaped('naturescompass:naturescompass', [
    'SLS',
    'LCL',
    'SGS'
  ], {
    S: '#minecraft:saplings',
    L: '#minecraft:logs',
    C: 'minecraft:compass',
    G: 'gtceu:lv_sensor'
  }).id('crossgrove:utility/natures_compass_lv_sensor')

  event.remove({ id: /^scannable:.+/ })

  event.remove({ id: 'minecraft:modular_work_bench' })
  event.remove({ output: 'miapi:modular_work_bench' })
  event.remove({ id: 'minecraft:netherite_convertion' })
})

ServerEvents.tags('item', event => {
  event.add('crossgrove:removed/scannable', CG_SCANNABLE_LOCKED_ITEMS)
  event.add('crossgrove:removed/modular_tools', 'miapi:modular_work_bench')
})
