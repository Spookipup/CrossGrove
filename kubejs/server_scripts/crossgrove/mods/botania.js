// priority: 0

ServerEvents.recipes(event => {
  function runic(id, output, mana, ingredients, count) {
    event.remove({ id: 'botania:runic_altar/' + id })

    var result = { item: output }
    if (count) {
      result.count = count
    }

    event.custom({
      type: 'botania:runic_altar',
      ingredients: ingredients,
      mana: mana,
      output: result
    }).id('crossgrove:botania/runic_altar/' + id)
  }

  function elvenTrade(id, ingredients, outputs) {
    event.remove({ id: 'botania:elven_trade/' + id })
    event.custom({
      type: 'botania:elven_trade',
      ingredients: ingredients,
      output: outputs
    }).id('crossgrove:botania/elven_trade/' + id)
  }

  event.remove({ id: /^botania:apothecary_.+/ })

  event.shaped('botania:apothecary_default', [
    'CPC',
    'CGC',
    'CCC'
  ], {
    C: '#forge:cobblestone',
    P: '#botania:petals',
    G: 'gtceu:lv_electric_pump'
  }).id('crossgrove:botania/apothecary_default_lv_pump')

  event.remove({ id: 'botania:petal_apothecary/orechid' })
  event.remove({ id: 'botania:petal_apothecary/orechid_ignem' })

  event.custom({
    type: 'botania:petal_apothecary',
    ingredients: [
      { tag: 'botania:petals/gray' },
      { tag: 'botania:petals/gray' },
      { tag: 'botania:petals/yellow' },
      { tag: 'botania:petals/green' },
      { tag: 'botania:petals/red' },
      { item: 'botania:rune_pride' },
      { item: 'botania:rune_greed' },
      { item: 'botania:redstone_root' },
      { item: 'botania:pixie_dust' },
      { item: 'crossroads:crystalline_prism' },
      { item: 'gtceu:hv_emitter' }
    ],
    output: { item: 'botania:orechid' },
    reagent: { tag: 'botania:seed_apothecary_reagent' }
  }).id('crossgrove:botania/orechid_crossroads')

  event.custom({
    type: 'botania:petal_apothecary',
    ingredients: [
      { tag: 'botania:petals/red' },
      { tag: 'botania:petals/red' },
      { tag: 'botania:petals/white' },
      { tag: 'botania:petals/white' },
      { tag: 'botania:petals/pink' },
      { item: 'botania:rune_pride' },
      { item: 'botania:rune_greed' },
      { item: 'botania:redstone_root' },
      { item: 'botania:pixie_dust' },
      { item: 'crossroads:clock_stabilizer' },
      { item: 'gtceu:ev_emitter' }
    ],
    output: { item: 'botania:orechid_ignem' },
    reagent: { tag: 'botania:seed_apothecary_reagent' }
  }).id('crossgrove:botania/orechid_ignem_crossroads')

  event.remove({ id: 'botania:mana_spreader' })
  event.remove({ id: 'botania:redstone_spreader' })
  event.remove({ id: 'botania:elven_spreader' })
  event.remove({ id: 'botania:gaia_spreader' })

  event.shaped('botania:mana_spreader', [
    'WWW',
    'EP ',
    'WWW'
  ], {
    W: '#botania:livingwood_logs',
    E: 'gtceu:lv_emitter',
    P: '#botania:petals'
  }).id('crossgrove:botania/mana_spreader')

  event.shapeless('botania:redstone_spreader', [
    'botania:mana_spreader',
    'minecraft:redstone',
    'gtceu:lv_sensor'
  ]).id('crossgrove:botania/redstone_spreader')

  event.shaped('botania:elven_spreader', [
    'WWW',
    'EP ',
    'WWW'
  ], {
    W: '#botania:dreamwood_logs',
    E: 'gtceu:mv_emitter',
    P: '#botania:petals'
  }).id('crossgrove:botania/elven_spreader')

  event.shapeless('botania:gaia_spreader', [
    'botania:elven_spreader',
    '#botania:dragonstone_gems',
    'botania:life_essence',
    'gtceu:hv_emitter'
  ]).id('crossgrove:botania/gaia_spreader')

  event.remove({ id: 'botania:diluted_pool' })
  event.remove({ id: 'botania:mana_pool' })
  event.remove({ id: 'botania:fabulous_pool' })
  event.remove({ id: 'botania:fabulous_pool_upgrade' })
  event.remove({ id: 'botania:pool_minecart' })

  event.shaped('botania:diluted_pool', [
    'P P',
    'RRR'
  ], {
    P: '#forge:plates/iron',
    R: 'botania:livingrock_slab'
  }).id('crossgrove:botania/diluted_pool')

  event.shaped('botania:mana_pool', [
    'P P',
    'RRR'
  ], {
    P: '#forge:plates/steel',
    R: 'botania:livingrock'
  }).id('crossgrove:botania/mana_pool')

  event.shaped('botania:fabulous_pool', [
    'BPB',
    'BBB'
  ], {
    B: 'botania:bifrost_perm',
    P: 'botania:mana_pool'
  }).id('crossgrove:botania/fabulous_pool')

  event.shapeless('botania:pool_minecart', [
    'minecraft:minecart',
    'botania:mana_pool',
    'gtceu:lv_conveyor_module'
  ]).id('crossgrove:botania/pool_minecart')

  runic('air', 'botania:rune_air', 6000, [
    cgTag('botania:mana_dusts'),
    cgTag('botania:manasteel_ingots'),
    cgTag('minecraft:wool_carpets'),
    cgItem('minecraft:feather'),
    cgItem('minecraft:string'),
    cgItem('gtceu:basic_electronic_circuit')
  ], 2)

  runic('earth', 'botania:rune_earth', 6000, [
    cgTag('botania:mana_dusts'),
    cgTag('botania:manasteel_ingots'),
    cgItem('minecraft:stone'),
    cgItem('minecraft:coal_block'),
    [cgItem('minecraft:brown_mushroom'), cgItem('minecraft:red_mushroom')],
    cgItem('gtceu:basic_electronic_circuit')
  ], 2)

  runic('fire', 'botania:rune_fire', 6000, [
    cgTag('botania:mana_dusts'),
    cgTag('botania:manasteel_ingots'),
    cgItem('minecraft:nether_brick'),
    cgItem('minecraft:gunpowder'),
    cgItem('minecraft:nether_wart'),
    cgItem('gtceu:basic_electronic_circuit')
  ], 2)

  runic('water', 'botania:rune_water', 6000, [
    cgTag('botania:mana_dusts'),
    cgTag('botania:manasteel_ingots'),
    cgItem('minecraft:bone_meal'),
    cgItem('minecraft:sugar_cane'),
    cgItem('minecraft:fishing_rod'),
    cgItem('gtceu:basic_electronic_circuit')
  ], 2)

  runic('mana', 'botania:rune_mana', 9000, [
    cgTag('botania:manasteel_ingots'),
    cgTag('botania:manasteel_ingots'),
    cgTag('botania:manasteel_ingots'),
    cgTag('botania:manasteel_ingots'),
    cgTag('botania:manasteel_ingots'),
    cgItem('botania:mana_pearl'),
    cgItem('gtceu:lv_emitter')
  ])

  runic('spring', 'botania:rune_spring', 10000, [
    cgItem('botania:rune_water'),
    cgItem('botania:rune_fire'),
    cgTag('minecraft:saplings'),
    cgTag('minecraft:saplings'),
    cgTag('minecraft:saplings'),
    cgItem('minecraft:wheat'),
    cgItem('gtceu:good_electronic_circuit')
  ])

  runic('summer', 'botania:rune_summer', 10000, [
    cgItem('botania:rune_earth'),
    cgItem('botania:rune_air'),
    cgTag('minecraft:sand'),
    cgTag('minecraft:sand'),
    cgItem('minecraft:slime_ball'),
    cgItem('minecraft:melon_slice'),
    cgItem('gtceu:good_electronic_circuit')
  ])

  runic('autumn', 'botania:rune_autumn', 10000, [
    cgItem('botania:rune_fire'),
    cgItem('botania:rune_air'),
    cgTag('minecraft:leaves'),
    cgTag('minecraft:leaves'),
    cgTag('minecraft:leaves'),
    cgItem('minecraft:spider_eye'),
    cgItem('gtceu:good_electronic_circuit')
  ])

  runic('winter', 'botania:rune_winter', 10000, [
    cgItem('botania:rune_water'),
    cgItem('botania:rune_earth'),
    cgItem('minecraft:snow_block'),
    cgItem('minecraft:snow_block'),
    cgTag('minecraft:wool'),
    cgItem('minecraft:cake'),
    cgItem('gtceu:good_electronic_circuit')
  ])

  runic('lust', 'botania:rune_lust', 14000, [
    cgTag('botania:mana_diamond_gems'),
    cgTag('botania:mana_diamond_gems'),
    cgItem('botania:rune_summer'),
    cgItem('botania:rune_air'),
    cgItem('gtceu:advanced_integrated_circuit')
  ])

  runic('gluttony', 'botania:rune_gluttony', 14000, [
    cgTag('botania:mana_diamond_gems'),
    cgTag('botania:mana_diamond_gems'),
    cgItem('botania:rune_winter'),
    cgItem('botania:rune_fire'),
    cgItem('gtceu:advanced_integrated_circuit')
  ])

  runic('greed', 'botania:rune_greed', 14000, [
    cgTag('botania:mana_diamond_gems'),
    cgTag('botania:mana_diamond_gems'),
    cgItem('botania:rune_spring'),
    cgItem('botania:rune_water'),
    cgItem('gtceu:advanced_integrated_circuit')
  ])

  runic('sloth', 'botania:rune_sloth', 14000, [
    cgTag('botania:mana_diamond_gems'),
    cgTag('botania:mana_diamond_gems'),
    cgItem('botania:rune_autumn'),
    cgItem('botania:rune_air'),
    cgItem('gtceu:advanced_integrated_circuit')
  ])

  runic('wrath', 'botania:rune_wrath', 14000, [
    cgTag('botania:mana_diamond_gems'),
    cgTag('botania:mana_diamond_gems'),
    cgItem('botania:rune_winter'),
    cgItem('botania:rune_earth'),
    cgItem('gtceu:advanced_integrated_circuit')
  ])

  runic('envy', 'botania:rune_envy', 14000, [
    cgTag('botania:mana_diamond_gems'),
    cgTag('botania:mana_diamond_gems'),
    cgItem('botania:rune_winter'),
    cgItem('botania:rune_water'),
    cgItem('gtceu:advanced_integrated_circuit')
  ])

  runic('pride', 'botania:rune_pride', 14000, [
    cgTag('botania:mana_diamond_gems'),
    cgTag('botania:mana_diamond_gems'),
    cgItem('botania:rune_summer'),
    cgItem('botania:rune_fire'),
    cgItem('gtceu:advanced_integrated_circuit')
  ])

  event.remove({ id: 'botania:petal_apothecary/agricarnation' })
  event.remove({ id: 'botania:petal_apothecary/hopperhock' })

  event.custom({
    type: 'botania:petal_apothecary',
    ingredients: [
      cgTag('botania:petals/lime'),
      cgTag('botania:petals/lime'),
      cgTag('botania:petals/green'),
      cgTag('botania:petals/yellow'),
      cgItem('botania:rune_spring'),
      cgItem('botania:redstone_root'),
      cgItem('gtceu:lv_electric_pump')
    ],
    output: cgItem('botania:agricarnation'),
    reagent: cgTag('botania:seed_apothecary_reagent')
  }).id('crossgrove:botania/petal_apothecary/agricarnation')

  event.custom({
    type: 'botania:petal_apothecary',
    ingredients: [
      cgTag('botania:petals/gray'),
      cgTag('botania:petals/gray'),
      cgTag('botania:petals/light_gray'),
      cgTag('botania:petals/light_gray'),
      cgItem('botania:rune_air'),
      cgItem('botania:redstone_root'),
      cgItem('gtceu:lv_conveyor_module')
    ],
    output: cgItem('botania:hopperhock'),
    reagent: cgTag('botania:seed_apothecary_reagent')
  }).id('crossgrove:botania/petal_apothecary/hopperhock')

  event.remove({ id: 'botania:terra_plate' })
  event.remove({ id: 'botania:terra_plate/terrasteel_ingot' })

  event.shaped('botania:terra_plate', [
    'LLL',
    '0M1',
    '283'
  ], {
    0: 'botania:rune_water',
    1: 'botania:rune_fire',
    2: 'botania:rune_earth',
    3: 'botania:rune_air',
    8: 'botania:rune_mana',
    L: 'minecraft:lapis_block',
    M: 'gtceu:mv_field_generator'
  }).id('crossgrove:botania/terra_plate')

  event.custom({
    type: 'botania:terra_plate',
    ingredients: [
      cgItem('botania:manasteel_ingot'),
      cgItem('botania:mana_pearl'),
      cgItem('botania:mana_diamond'),
      cgItem('gtceu:good_electronic_circuit')
    ],
    mana: 600000,
    result: cgItem('botania:terrasteel_ingot')
  }).id('crossgrove:botania/terra_plate/terrasteel_ingot')

  elvenTrade('elementium', [
    cgTag('botania:manasteel_ingots'),
    cgTag('botania:manasteel_ingots'),
    cgItem('gtceu:mv_electric_motor')
  ], [cgItem('botania:elementium_ingot')])

  elvenTrade('elementium_block', [
    cgItem('botania:manasteel_block'),
    cgItem('botania:manasteel_block'),
    cgItem('gtceu:mv_robot_arm')
  ], [cgItem('botania:elementium_block')])

  elvenTrade('dragonstone', [
    cgTag('botania:mana_diamond_gems'),
    cgItem('gtceu:mv_emitter')
  ], [cgItem('botania:dragonstone')])

  elvenTrade('dragonstone_block', [
    cgItem('botania:mana_diamond_block'),
    cgItem('gtceu:mv_field_generator')
  ], [cgItem('botania:dragonstone_block')])

  elvenTrade('dreamwood', [
    cgItem('botania:livingwood'),
    cgItem('gtceu:mv_electric_motor')
  ], [cgItem('botania:dreamwood')])

  elvenTrade('dreamwood_log', [
    cgItem('botania:livingwood_log'),
    cgItem('gtceu:mv_electric_motor')
  ], [cgItem('botania:dreamwood_log')])

  elvenTrade('elf_glass', [
    cgItem('botania:mana_glass'),
    cgItem('gtceu:mv_sensor')
  ], [cgItem('botania:elf_glass')])

  elvenTrade('elf_quartz', [
    cgItem('minecraft:quartz'),
    cgItem('gtceu:mv_sensor')
  ], [cgItem('botania:quartz_elven')])

  elvenTrade('pixie_dust', [
    cgItem('botania:mana_pearl'),
    cgItem('gtceu:mv_emitter')
  ], [cgItem('botania:pixie_dust')])
})
