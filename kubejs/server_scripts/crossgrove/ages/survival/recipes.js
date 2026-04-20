// priority: 0

ServerEvents.recipes(event => {
  CG_WOOD_TYPES_WITH_BAMBOO.forEach(wood => {
    var plankCount = wood === 'bamboo' ? 2 : 4

    event.remove({ id: 'minecraft:' + wood + '_planks' })
    event.remove({ id: 'survivalistessentials:minecraft_' + wood + '_planks' })
    event.shaped(plankCount + 'x ' + cgWoodPlanks(wood), [
      'S',
      'L'
    ], {
      L: cgWoodLogTag(wood),
      S: 'survivalistessentials:crude_saw'
    }).id('crossgrove:age_0/survival/' + wood + '_planks_from_crude_saw')
  })

  var removedSurvivalistSawItems = [
    'survivalistessentials:basic_saw',
    'survivalistessentials:basic_saw_blade',
    'survivalistessentials:sharp_saw',
    'survivalistessentials:sharp_saw_blade'
  ]

  removedSurvivalistSawItems.forEach(item => {
    event.remove({ output: item })
    event.remove({ input: item })
  })

  var removedFlintToolItems = [
    'farmersdelight:flint_knife',
    'gtceu:flint_pickaxe',
    'gtceu:flint_shovel',
    'gtceu:flint_axe',
    'gtceu:flint_sword',
    'gtceu:flint_knife',
    'gtceu:flint_hoe',
    'gtceu:flint_mortar'
  ]

  removedFlintToolItems.forEach(item => {
    event.remove({ output: item })
    event.remove({ input: item })
  })

  event.remove({ id: 'quark:tweaks/crafting/utility/misc/easy_sticks' })
  event.remove({ id: 'quark:tweaks/crafting/utility/misc/easy_sticks_bamboo' })
  event.remove({ id: 'quark:tweaks/crafting/utility/misc/easy_hopper' })
  event.remove({ id: /quark:tweaks\/crafting\/utility\/chests\/.*/ })
  event.remove({ id: /quark:tweaks\/crafting\/utility\/chest_boat\/.*/ })
  event.remove({ id: /quark:building\/crafting\/chests\/.*/ })
  event.remove({ id: 'quark:automation/crafting/feeding_trough' })

  event.shaped('2x gtceu:wood_plate', [
    'S',
    'P'
  ], {
    S: 'survivalistessentials:crude_saw',
    P: '#crossgrove:raw_wood_planks'
  }).id('crossgrove:age_0/survival/wood_plate_from_raw_planks_crude_saw')

  event.shaped('2x gtceu:wood_bolt', [
    'S  ',
    ' T '
  ], {
    S: 'survivalistessentials:crude_saw',
    T: 'minecraft:stick'
  }).id('crossgrove:age_0/survival/wood_bolt_from_crude_saw')

  event.shaped('gtceu:wood_screw', [
    'KB',
    'B '
  ], {
    K: 'survivalistessentials:crude_knife',
    B: 'gtceu:wood_bolt'
  }).id('crossgrove:age_0/survival/wood_screw_from_crude_knife')

  event.remove({ output: 'minecraft:chest' })
  event.shaped('minecraft:chest', [
    'SPS',
    'P P',
    'TPT'
  ], {
    P: 'gtceu:wood_plate',
    S: 'gtceu:wood_screw',
    T: 'minecraft:stick'
  }).id('crossgrove:age_0/survival/chest')

  event.remove({ output: 'minecraft:barrel' })
  event.shaped('minecraft:barrel', [
    'PCP',
    'P P',
    'PCP'
  ], {
    P: 'gtceu:wood_plate',
    C: 'survivalistessentials:plant_string'
  }).id('crossgrove:age_0/survival/barrel')

  event.remove({ output: 'minecraft:torch' })
  event.shaped('4x minecraft:torch', [
    'F',
    'C',
    'S'
  ], {
    F: '#minecraft:coals',
    C: 'survivalistessentials:plant_string',
    S: 'minecraft:stick'
  }).id('crossgrove:age_0/survival/torch')

  event.remove({ id: 'farmersdelight:cutting_board' })
  event.shaped('farmersdelight:cutting_board', [
    'CPP'
  ], {
    P: 'gtceu:wood_plate',
    C: 'survivalistessentials:plant_string'
  }).id('crossgrove:age_0/survival/farmersdelight_cutting_board')

  event.remove({ id: 'farmersdelight:basket' })
  event.shaped('farmersdelight:basket', [
    'B B',
    'C C',
    'BSB'
  ], {
    B: 'minecraft:bamboo',
    C: 'farmersdelight:canvas',
    S: 'survivalistessentials:plant_string'
  }).id('crossgrove:age_0/survival/farmersdelight_basket')

  var woolToBeds = {
    white: 'minecraft:white_wool',
    orange: 'minecraft:orange_wool',
    magenta: 'minecraft:magenta_wool',
    light_blue: 'minecraft:light_blue_wool',
    yellow: 'minecraft:yellow_wool',
    lime: 'minecraft:lime_wool',
    pink: 'minecraft:pink_wool',
    gray: 'minecraft:gray_wool',
    light_gray: 'minecraft:light_gray_wool',
    cyan: 'minecraft:cyan_wool',
    purple: 'minecraft:purple_wool',
    blue: 'minecraft:blue_wool',
    brown: 'minecraft:brown_wool',
    green: 'minecraft:green_wool',
    red: 'minecraft:red_wool',
    black: 'minecraft:black_wool'
  }

  Object.keys(woolToBeds).forEach(color => {
    var bed = 'minecraft:' + color + '_bed'

    event.remove({ output: bed })
    event.shaped(bed, [
      'WWW',
      'SPS',
      'FCF'
    ], {
      W: woolToBeds[color],
      S: 'gtceu:wood_screw',
      P: 'gtceu:wood_plate',
      F: '#minecraft:wooden_fences',
      C: 'survivalistessentials:plant_string'
    }).id('crossgrove:age_0/survival/' + color + '_bed')
  })

  event.remove({ id: 'minecraft:campfire' })
  event.shaped('minecraft:campfire', [
    ' S ',
    'SFS',
    'RLR'
  ], {
    S: 'minecraft:stick',
    F: '#minecraft:coals',
    R: 'survivalistessentials:rock_stone',
    L: '#minecraft:logs'
  }).id('crossgrove:age_0/survival/campfire')
})

ServerEvents.tags('item', event => {
  event.add('crossgrove:raw_wood_planks', CG_WOOD_TYPES_WITH_BAMBOO.map(cgWoodPlanks))

  var removedFlintToolItems = [
    'farmersdelight:flint_knife',
    'gtceu:flint_pickaxe',
    'gtceu:flint_shovel',
    'gtceu:flint_axe',
    'gtceu:flint_sword',
    'gtceu:flint_knife',
    'gtceu:flint_hoe',
    'gtceu:flint_mortar'
  ]

  cgAddAll(event, 'crossgrove:removed/flint_tools', removedFlintToolItems)

  event.remove('forge:tools/knives', [
    'farmersdelight:flint_knife',
    'gtceu:flint_knife'
  ])
  event.remove('farmersdelight:tools/knives', [
    'farmersdelight:flint_knife',
    'gtceu:flint_knife'
  ])
  event.add('forge:tools/knives', 'survivalistessentials:crude_knife')
  event.add('farmersdelight:tools/knives', 'survivalistessentials:crude_knife')

  event.remove('minecraft:pickaxes', 'gtceu:flint_pickaxe')
  event.remove('minecraft:shovels', 'gtceu:flint_shovel')
  event.remove('minecraft:axes', 'gtceu:flint_axe')
  event.remove('minecraft:swords', 'gtceu:flint_sword')
  event.remove('minecraft:hoes', 'gtceu:flint_hoe')
  event.remove('forge:tools/pickaxes', 'gtceu:flint_pickaxe')
  event.remove('forge:tools/shovels', 'gtceu:flint_shovel')
  event.remove('forge:tools/axes', 'gtceu:flint_axe')
  event.remove('forge:tools/swords', 'gtceu:flint_sword')
  event.remove('forge:tools/hoes', 'gtceu:flint_hoe')
  event.remove('gtceu:tools/crafting_pickaxes', 'gtceu:flint_pickaxe')
  event.remove('gtceu:tools/crafting_shovels', 'gtceu:flint_shovel')
  event.remove('gtceu:tools/crafting_axes', 'gtceu:flint_axe')
  event.remove('gtceu:tools/crafting_swords', 'gtceu:flint_sword')
  event.remove('gtceu:tools/crafting_hoes', 'gtceu:flint_hoe')
  event.remove('gtceu:tools/crafting_knives', 'gtceu:flint_knife')
  event.remove('gtceu:tools/crafting_mortars', 'gtceu:flint_mortar')

  event.remove('survivalistessentials:advanced_saw_tools', [
    'survivalistessentials:basic_saw',
    'survivalistessentials:sharp_saw'
  ])
})
