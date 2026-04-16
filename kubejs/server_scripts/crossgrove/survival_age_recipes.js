// priority: 0

ServerEvents.recipes(event => {
  var plankRecipes = [
    {
      id: 'oak',
      input: '#minecraft:oak_logs',
      output: '4x minecraft:oak_planks'
    },
    {
      id: 'spruce',
      input: '#minecraft:spruce_logs',
      output: '4x minecraft:spruce_planks'
    },
    {
      id: 'birch',
      input: '#minecraft:birch_logs',
      output: '4x minecraft:birch_planks'
    },
    {
      id: 'jungle',
      input: '#minecraft:jungle_logs',
      output: '4x minecraft:jungle_planks'
    },
    {
      id: 'acacia',
      input: '#minecraft:acacia_logs',
      output: '4x minecraft:acacia_planks'
    },
    {
      id: 'dark_oak',
      input: '#minecraft:dark_oak_logs',
      output: '4x minecraft:dark_oak_planks'
    },
    {
      id: 'mangrove',
      input: '#minecraft:mangrove_logs',
      output: '4x minecraft:mangrove_planks'
    },
    {
      id: 'cherry',
      input: '#minecraft:cherry_logs',
      output: '4x minecraft:cherry_planks'
    },
    {
      id: 'crimson',
      input: '#minecraft:crimson_stems',
      output: '4x minecraft:crimson_planks'
    },
    {
      id: 'warped',
      input: '#minecraft:warped_stems',
      output: '4x minecraft:warped_planks'
    },
    {
      id: 'bamboo',
      input: '#minecraft:bamboo_blocks',
      output: '2x minecraft:bamboo_planks'
    }
  ]

  plankRecipes.forEach(recipe => {
    event.remove({ id: 'minecraft:' + recipe.id + '_planks' })
    event.remove({ id: 'survivalistessentials:minecraft_' + recipe.id + '_planks' })
    event.shaped(recipe.output, [
      'S',
      'L'
    ], {
      L: recipe.input,
      S: 'survivalistessentials:crude_saw'
    }).id('crossgrove:age_0/survival/' + recipe.id + '_planks_from_crude_saw')
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

  event.shaped('gtceu:wood_screw', [
    'KB',
    'B '
  ], {
    K: 'farmersdelight:flint_knife',
    B: 'gtceu:wood_bolt'
  }).id('crossgrove:age_0/survival/wood_screw_from_flint_knife')

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
  event.add('crossgrove:raw_wood_planks', [
    'minecraft:oak_planks',
    'minecraft:spruce_planks',
    'minecraft:birch_planks',
    'minecraft:jungle_planks',
    'minecraft:acacia_planks',
    'minecraft:dark_oak_planks',
    'minecraft:mangrove_planks',
    'minecraft:cherry_planks',
    'minecraft:crimson_planks',
    'minecraft:warped_planks',
    'minecraft:bamboo_planks'
  ])

  event.remove('survivalistessentials:advanced_saw_tools', [
    'survivalistessentials:basic_saw',
    'survivalistessentials:sharp_saw'
  ])
})
