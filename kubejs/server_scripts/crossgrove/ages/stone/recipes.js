// priority: 0

ServerEvents.recipes(event => {
  event.remove({ id: 'farmersdelight:cooking_pot' })
  event.shaped('farmersdelight:cooking_pot', [
    'BSB',
    'PWP',
    'PPP'
  ], {
    B: 'minecraft:brick',
    S: 'minecraft:wooden_shovel',
    P: '#forge:plates/iron',
    W: '#forge:buckets/water'
  }).id('crossgrove:age_1/stone/farmersdelight_cooking_pot')

  event.remove({ id: 'farmersdelight:stove' })
  event.shaped('farmersdelight:stove', [
    'PPP',
    'B B',
    'BCB'
  ], {
    P: '#forge:plates/iron',
    B: 'minecraft:bricks',
    C: 'minecraft:campfire'
  }).id('crossgrove:age_1/stone/farmersdelight_stove')

  event.remove({ id: 'farmersdelight:skillet' })
  event.shaped('farmersdelight:skillet', [
    ' PP',
    'SPP',
    'T  '
  ], {
    P: '#forge:plates/iron',
    S: 'gtceu:wood_screw',
    T: 'minecraft:stick'
  }).id('crossgrove:age_1/stone/farmersdelight_skillet')

  CG_WOOD_TYPES_WITH_BAMBOO.forEach(wood => {
    event.remove({ id: 'farmersdelight:' + wood + '_cabinet' })
    event.shaped('farmersdelight:' + wood + '_cabinet', [
      'PSP',
      'D D',
      'PSP'
    ], {
      P: 'gtceu:wood_plate',
      S: 'gtceu:wood_screw',
      D: 'minecraft:' + wood + '_trapdoor'
    }).id('crossgrove:age_1/stone/farmersdelight_' + wood + '_cabinet')
  })

  event.remove({ id: 'agricraft:seed_analyzer' })
  event.shaped('agricraft:seed_analyzer', [
    'GSG',
    'PIP',
    'WSW'
  ], {
    G: '#forge:glass_panes/colorless',
    S: 'gtceu:wood_screw',
    P: 'gtceu:wood_plate',
    I: '#forge:plates/iron',
    W: 'minecraft:stone_slab'
  }).id('crossgrove:age_1/stone/agricraft_seed_analyzer')

  event.remove({ output: 'minecraft:shield' })
  event.shaped('minecraft:shield', [
    'PIP',
    'PLP',
    ' P '
  ], {
    P: 'gtceu:wood_plate',
    I: '#forge:plates/iron',
    L: 'minecraft:leather'
  }).id('crossgrove:age_1/stone/shield')
})
