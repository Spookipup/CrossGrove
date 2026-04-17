// priority: 0

ServerEvents.recipes(event => {
  function item(id) {
    return { item: id }
  }

  function tag(id) {
    return { tag: id }
  }

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
    tag('botania:mana_dusts'),
    tag('botania:manasteel_ingots'),
    tag('minecraft:wool_carpets'),
    item('minecraft:feather'),
    item('minecraft:string'),
    item('gtceu:basic_electronic_circuit')
  ], 2)

  runic('earth', 'botania:rune_earth', 6000, [
    tag('botania:mana_dusts'),
    tag('botania:manasteel_ingots'),
    item('minecraft:stone'),
    item('minecraft:coal_block'),
    [item('minecraft:brown_mushroom'), item('minecraft:red_mushroom')],
    item('gtceu:basic_electronic_circuit')
  ], 2)

  runic('fire', 'botania:rune_fire', 6000, [
    tag('botania:mana_dusts'),
    tag('botania:manasteel_ingots'),
    item('minecraft:nether_brick'),
    item('minecraft:gunpowder'),
    item('minecraft:nether_wart'),
    item('gtceu:basic_electronic_circuit')
  ], 2)

  runic('water', 'botania:rune_water', 6000, [
    tag('botania:mana_dusts'),
    tag('botania:manasteel_ingots'),
    item('minecraft:bone_meal'),
    item('minecraft:sugar_cane'),
    item('minecraft:fishing_rod'),
    item('gtceu:basic_electronic_circuit')
  ], 2)

  runic('mana', 'botania:rune_mana', 9000, [
    tag('botania:manasteel_ingots'),
    tag('botania:manasteel_ingots'),
    tag('botania:manasteel_ingots'),
    tag('botania:manasteel_ingots'),
    tag('botania:manasteel_ingots'),
    item('botania:mana_pearl'),
    item('gtceu:lv_emitter')
  ])

  runic('spring', 'botania:rune_spring', 10000, [
    item('botania:rune_water'),
    item('botania:rune_fire'),
    tag('minecraft:saplings'),
    tag('minecraft:saplings'),
    tag('minecraft:saplings'),
    item('minecraft:wheat'),
    item('gtceu:good_electronic_circuit')
  ])

  runic('summer', 'botania:rune_summer', 10000, [
    item('botania:rune_earth'),
    item('botania:rune_air'),
    tag('minecraft:sand'),
    tag('minecraft:sand'),
    item('minecraft:slime_ball'),
    item('minecraft:melon_slice'),
    item('gtceu:good_electronic_circuit')
  ])

  runic('autumn', 'botania:rune_autumn', 10000, [
    item('botania:rune_fire'),
    item('botania:rune_air'),
    tag('minecraft:leaves'),
    tag('minecraft:leaves'),
    tag('minecraft:leaves'),
    item('minecraft:spider_eye'),
    item('gtceu:good_electronic_circuit')
  ])

  runic('winter', 'botania:rune_winter', 10000, [
    item('botania:rune_water'),
    item('botania:rune_earth'),
    item('minecraft:snow_block'),
    item('minecraft:snow_block'),
    tag('minecraft:wool'),
    item('minecraft:cake'),
    item('gtceu:good_electronic_circuit')
  ])

  runic('lust', 'botania:rune_lust', 14000, [
    tag('botania:mana_diamond_gems'),
    tag('botania:mana_diamond_gems'),
    item('botania:rune_summer'),
    item('botania:rune_air'),
    item('gtceu:advanced_integrated_circuit')
  ])

  runic('gluttony', 'botania:rune_gluttony', 14000, [
    tag('botania:mana_diamond_gems'),
    tag('botania:mana_diamond_gems'),
    item('botania:rune_winter'),
    item('botania:rune_fire'),
    item('gtceu:advanced_integrated_circuit')
  ])

  runic('greed', 'botania:rune_greed', 14000, [
    tag('botania:mana_diamond_gems'),
    tag('botania:mana_diamond_gems'),
    item('botania:rune_spring'),
    item('botania:rune_water'),
    item('gtceu:advanced_integrated_circuit')
  ])

  runic('sloth', 'botania:rune_sloth', 14000, [
    tag('botania:mana_diamond_gems'),
    tag('botania:mana_diamond_gems'),
    item('botania:rune_autumn'),
    item('botania:rune_air'),
    item('gtceu:advanced_integrated_circuit')
  ])

  runic('wrath', 'botania:rune_wrath', 14000, [
    tag('botania:mana_diamond_gems'),
    tag('botania:mana_diamond_gems'),
    item('botania:rune_winter'),
    item('botania:rune_earth'),
    item('gtceu:advanced_integrated_circuit')
  ])

  runic('envy', 'botania:rune_envy', 14000, [
    tag('botania:mana_diamond_gems'),
    tag('botania:mana_diamond_gems'),
    item('botania:rune_winter'),
    item('botania:rune_water'),
    item('gtceu:advanced_integrated_circuit')
  ])

  runic('pride', 'botania:rune_pride', 14000, [
    tag('botania:mana_diamond_gems'),
    tag('botania:mana_diamond_gems'),
    item('botania:rune_summer'),
    item('botania:rune_fire'),
    item('gtceu:advanced_integrated_circuit')
  ])

  event.remove({ id: 'botania:petal_apothecary/agricarnation' })
  event.remove({ id: 'botania:petal_apothecary/hopperhock' })

  event.custom({
    type: 'botania:petal_apothecary',
    ingredients: [
      tag('botania:petals/lime'),
      tag('botania:petals/lime'),
      tag('botania:petals/green'),
      tag('botania:petals/yellow'),
      item('botania:rune_spring'),
      item('botania:redstone_root'),
      item('gtceu:lv_electric_pump')
    ],
    output: item('botania:agricarnation'),
    reagent: tag('botania:seed_apothecary_reagent')
  }).id('crossgrove:botania/petal_apothecary/agricarnation')

  event.custom({
    type: 'botania:petal_apothecary',
    ingredients: [
      tag('botania:petals/gray'),
      tag('botania:petals/gray'),
      tag('botania:petals/light_gray'),
      tag('botania:petals/light_gray'),
      item('botania:rune_air'),
      item('botania:redstone_root'),
      item('gtceu:lv_conveyor_module')
    ],
    output: item('botania:hopperhock'),
    reagent: tag('botania:seed_apothecary_reagent')
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
      item('botania:manasteel_ingot'),
      item('botania:mana_pearl'),
      item('botania:mana_diamond'),
      item('gtceu:good_electronic_circuit')
    ],
    mana: 600000,
    result: item('botania:terrasteel_ingot')
  }).id('crossgrove:botania/terra_plate/terrasteel_ingot')

  elvenTrade('elementium', [
    tag('botania:manasteel_ingots'),
    tag('botania:manasteel_ingots'),
    item('gtceu:mv_electric_motor')
  ], [item('botania:elementium_ingot')])

  elvenTrade('elementium_block', [
    item('botania:manasteel_block'),
    item('botania:manasteel_block'),
    item('gtceu:mv_robot_arm')
  ], [item('botania:elementium_block')])

  elvenTrade('dragonstone', [
    tag('botania:mana_diamond_gems'),
    item('gtceu:mv_emitter')
  ], [item('botania:dragonstone')])

  elvenTrade('dragonstone_block', [
    item('botania:mana_diamond_block'),
    item('gtceu:mv_field_generator')
  ], [item('botania:dragonstone_block')])

  elvenTrade('dreamwood', [
    item('botania:livingwood'),
    item('gtceu:mv_electric_motor')
  ], [item('botania:dreamwood')])

  elvenTrade('dreamwood_log', [
    item('botania:livingwood_log'),
    item('gtceu:mv_electric_motor')
  ], [item('botania:dreamwood_log')])

  elvenTrade('elf_glass', [
    item('botania:mana_glass'),
    item('gtceu:mv_sensor')
  ], [item('botania:elf_glass')])

  elvenTrade('elf_quartz', [
    item('minecraft:quartz'),
    item('gtceu:mv_sensor')
  ], [item('botania:quartz_elven')])

  elvenTrade('pixie_dust', [
    item('botania:mana_pearl'),
    item('gtceu:mv_emitter')
  ], [item('botania:pixie_dust')])
})
