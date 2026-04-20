// priority: 800

ServerEvents.recipes(event => {
  event.shaped('gtceu:compressed_clay', [
    ' C ',
    'CFC',
    ' C '
  ], {
    C: 'minecraft:clay_ball',
    F: 'gtceu:brick_wooden_form'
  }).id('crossgrove:primitive_blast_furnace/compressed_clay')

  event.shaped('4x gtceu:compressed_fireclay', [
    'BCB',
    'CFC',
    'SCS'
  ], {
    B: 'minecraft:brick',
    C: 'gtceu:compressed_clay',
    F: 'gtceu:brick_wooden_form',
    S: '#forge:sand'
  }).id('crossgrove:primitive_blast_furnace/compressed_fireclay')

  event.smelting('gtceu:firebrick', 'gtceu:compressed_fireclay')
    .id('crossgrove:primitive_blast_furnace/firebrick')

  event.shaped('gtceu:firebricks', [
    'FF',
    'FF'
  ], {
    F: 'gtceu:firebrick'
  }).id('crossgrove:primitive_blast_furnace/firebricks')

  cgGtPrimitiveBlastFurnace(
    event,
    'crossgrove:steel_from_charcoal',
    ['#forge:ingots/iron', '2x minecraft:charcoal'],
    ['gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust'],
    1800
  )

  cgGtPrimitiveBlastFurnace(
    event,
    'crossgrove:steel_from_coal',
    ['#forge:ingots/iron', '2x minecraft:coal'],
    ['gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust'],
    1800
  )

  cgGtPrimitiveBlastFurnace(
    event,
    'crossgrove:steel_from_wrought_iron_charcoal',
    ['#forge:ingots/wrought_iron', '2x minecraft:charcoal'],
    ['gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust'],
    1200
  )

  cgGtPrimitiveBlastFurnace(
    event,
    'crossgrove:steel_from_wrought_iron_coal',
    ['#forge:ingots/wrought_iron', '2x minecraft:coal'],
    ['gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust'],
    1200
  )
})
