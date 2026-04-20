// priority: 850

ServerEvents.recipes(event => {
  var bronzeAxle = cgCrossroadsMaterialItem('crossroads:axle', 'bronze')
  var bronzeGear = cgCrossroadsMaterialItem('crossroads:gear_base', 'bronze')
  var bronzeAxleMount = cgCrossroadsMaterialItem('crossroads:axle_mount', 'bronze')

  ;[
    'exdeorum:sieve',
    'exdeorum:compressed_sieve',
    'exdeorum:hammer',
    'exdeorum:crook',
    'exdeorum:lava_crucible',
    'exdeorum:water_crucible',
    'exdeorum:crucible_heat_source'
  ].forEach(type => {
    event.remove({ type: type })
  })

  CG_EXDEORUM_REMOVED_ITEMS.forEach(item => {
    event.remove({ output: item })
    event.remove({ input: item })
  })

  event.remove({ type: 'minecraft:smelting', input: '#forge:crushed_ores' })
  event.remove({ type: 'minecraft:blasting', input: '#forge:crushed_ores' })

  event.remove({ output: 'exdeorum:string_mesh' })
  event.remove({ output: 'exdeorum:flint_mesh' })
  event.remove({ output: 'exdeorum:mechanical_sieve' })
  event.remove({ output: 'exdeorum:mechanical_hammer' })

  event.shaped('exdeorum:string_mesh', [
    'SSS',
    'S S',
    'SSS'
  ], {
    S: 'survivalistessentials:plant_string'
  }).id('crossgrove:ex_deorum/string_mesh_from_plant_string')

  event.shaped('exdeorum:flint_mesh', [
    'FSF',
    'S S',
    'FSF'
  ], {
    F: 'minecraft:flint',
    S: 'exdeorum:string_mesh'
  }).id('crossgrove:ex_deorum/flint_mesh_from_string_mesh')

  event.custom({
    type: 'exdeorum:crucible_heat_source',
    block_predicate: {
      block: 'minecraft:campfire',
      state: {
        lit: 'true'
      }
    },
    heat_value: 2
  }).id('crossgrove:ex_deorum/heat_source/lit_campfire')

  event.custom({
    type: 'exdeorum:crucible_heat_source',
    block_predicate: {
      block: 'minecraft:soul_campfire',
      state: {
        lit: 'true'
      }
    },
    heat_value: 3
  }).id('crossgrove:ex_deorum/heat_source/lit_soul_campfire')

  CG_EXDEORUM_WOOD_TYPES.forEach(wood => {
    event.remove({ output: 'exdeorum:' + wood + '_sieve' })
    event.remove({ output: 'exdeorum:' + wood + '_compressed_sieve' })

    event.shaped('exdeorum:' + wood + '_sieve', [
      'S S',
      'PMP',
      'L L'
    ], {
      S: 'gtceu:wood_screw',
      P: 'gtceu:wood_plate',
      M: 'exdeorum:string_mesh',
      L: 'minecraft:' + wood + (wood === 'bamboo' ? '_planks' : '_slab')
    }).id('crossgrove:ex_deorum/' + wood + '_sieve')
  })

  event.shaped('exdeorum:mechanical_sieve', [
    'BGB',
    'ISI',
    'AMA'
  ], {
    A: bronzeAxle,
    B: '#forge:plates/bronze',
    G: '#forge:glass/colorless',
    I: 'minecraft:iron_bars',
    M: bronzeAxleMount,
    S: '#crossgrove:ex_deorum/sieves'
  }).id('crossgrove:ex_deorum/mechanical_sieve')

  event.shaped('exdeorum:mechanical_hammer', [
    'IPI',
    'AMA',
    'GHG'
  ], {
    A: bronzeAxle,
    G: bronzeGear,
    H: 'minecraft:hopper',
    I: '#forge:plates/iron',
    M: 'crossroads:master_axis',
    P: 'minecraft:piston'
  }).id('crossgrove:ex_deorum/mechanical_hammer')

  cgExDeorumHammer(
    event,
    'gravel_from_igneous_stone',
    [
      { item: 'minecraft:cobblestone' },
      { item: 'minecraft:andesite' },
      { item: 'minecraft:diorite' },
      { item: 'minecraft:granite' }
    ],
    'minecraft:gravel',
    1.0
  )
  cgExDeorumHammer(
    event,
    'sand_from_gravel',
    { item: 'minecraft:gravel' },
    'minecraft:sand',
    1.0
  )
  cgExDeorumHammer(
    event,
    'dust_from_sand',
    [
      { item: 'minecraft:sand' },
      { item: 'minecraft:red_sand' }
    ],
    'exdeorum:dust',
    1.0
  )
  cgExDeorumHammer(
    event,
    'crushed_deepslate',
    [
      { item: 'minecraft:deepslate' },
      { item: 'minecraft:cobbled_deepslate' }
    ],
    'exdeorum:crushed_deepslate',
    1.0
  )
  cgExDeorumHammer(
    event,
    'crushed_netherrack',
    { item: 'minecraft:netherrack' },
    'exdeorum:crushed_netherrack',
    1.0
  )
  cgExDeorumHammer(
    event,
    'crushed_blackstone',
    { item: 'minecraft:blackstone' },
    'exdeorum:crushed_blackstone',
    1.0
  )
  cgExDeorumHammer(
    event,
    'crushed_end_stone',
    { item: 'minecraft:end_stone' },
    'exdeorum:crushed_end_stone',
    1.0
  )
  cgExDeorumHammer(
    event,
    'sand_from_sandstone',
    [
      { item: 'minecraft:sandstone' },
      { item: 'minecraft:cut_sandstone' },
      { item: 'minecraft:chiseled_sandstone' },
      { item: 'minecraft:smooth_sandstone' }
    ],
    'minecraft:sand',
    1.0
  )
  cgExDeorumHammer(
    event,
    'red_sand_from_red_sandstone',
    [
      { item: 'minecraft:red_sandstone' },
      { item: 'minecraft:cut_red_sandstone' },
      { item: 'minecraft:chiseled_red_sandstone' },
      { item: 'minecraft:smooth_red_sandstone' }
    ],
    'minecraft:red_sand',
    1.0
  )

  CG_EXDEORUM_STOCK_MESH_METALS.forEach(metal => {
    event.shaped(cgExDeorumStockMesh(metal), [
      'WLW',
      'L L',
      'WLW'
    ], {
      W: cgExDeorumForm('heavy_wires', metal),
      L: cgExDeorumForm('light_rods', metal)
    }).id('crossgrove:ex_deorum/' + metal + '_mesh_from_stock')
  })

  CG_EXDEORUM_SIEVE_METALS.forEach(metal => {
    var crushedOreTag = cgCrushedOreTag(metal)
    var crushedOreItem = cgCrushedOreItem(metal)
    var rawMaterialTag = cgRawMaterialTag(metal)

    cgExDeorumRemoveCrushedOreSmelting(event, metal)

    if (Item.exists(crushedOreItem)) {
      event.shapeless(crushedOreItem, [
        '#' + rawMaterialTag,
        '#gtceu:tools/crafting_mortars'
      ]).id('crossgrove:ore_processing/crushing/' + metal + '_crushed_ore_from_raw_material')

      cgExDeorumHammer(
        event,
        'crushed_' + metal + '_ore_from_raw_' + metal,
        { tag: rawMaterialTag },
        crushedOreItem,
        1.0
      )
    }

    var hammerDustItem = cgExDeorumHammerDustItem(metal)
    if (hammerDustItem !== null) {
      cgExDeorumHammer(
        event,
        metal + '_dust_from_crushed_' + metal + '_ore',
        { tag: crushedOreTag },
        hammerDustItem,
        1.0
      )
    }

    cgExDeorumSieve(
      event,
      metal + '_fines_from_raw_material_flint_mesh',
      rawMaterialTag,
      'exdeorum:flint_mesh',
      cgExDeorumOreProcessingItem('fines', metal),
      cgExDeorumBinomial(0.35)
    )
    cgExDeorumSieve(
      event,
      metal + '_tailings_from_raw_material_flint_mesh',
      rawMaterialTag,
      'exdeorum:flint_mesh',
      cgExDeorumOreProcessingItem('tailings', metal),
      cgExDeorumBinomial(0.55)
    )

    cgExDeorumSieve(
      event,
      metal + '_concentrate_from_raw_material_copper_mesh',
      rawMaterialTag,
      cgExDeorumStockMesh('copper'),
      cgExDeorumOreProcessingItem('concentrate', metal),
      cgExDeorumBinomial(0.35)
    )
    cgExDeorumSieve(
      event,
      metal + '_fines_from_raw_material_copper_mesh',
      rawMaterialTag,
      cgExDeorumStockMesh('copper'),
      cgExDeorumOreProcessingItem('fines', metal),
      cgExDeorumBinomial(0.35)
    )
    cgExDeorumSieve(
      event,
      metal + '_tailings_from_raw_material_copper_mesh',
      rawMaterialTag,
      cgExDeorumStockMesh('copper'),
      cgExDeorumOreProcessingItem('tailings', metal),
      cgExDeorumBinomial(0.55)
    )

    cgExDeorumSieve(
      event,
      metal + '_concentrate_from_raw_material_bronze_mesh',
      rawMaterialTag,
      cgExDeorumStockMesh('bronze'),
      cgExDeorumOreProcessingItem('concentrate', metal),
      cgExDeorumBinomial(0.55)
    )
    cgExDeorumSieve(
      event,
      metal + '_fines_from_raw_material_bronze_mesh',
      rawMaterialTag,
      cgExDeorumStockMesh('bronze'),
      cgExDeorumOreProcessingItem('fines', metal),
      cgExDeorumBinomial(0.45)
    )
    cgExDeorumSieve(
      event,
      metal + '_tailings_from_raw_material_bronze_mesh',
      rawMaterialTag,
      cgExDeorumStockMesh('bronze'),
      cgExDeorumOreProcessingItem('tailings', metal),
      cgExDeorumBinomial(0.45)
    )

    cgExDeorumSieve(
      event,
      metal + '_fines_from_crushed_ore_flint_mesh',
      crushedOreTag,
      'exdeorum:flint_mesh',
      cgExDeorumOreProcessingItem('fines', metal),
      cgExDeorumBinomial(0.55)
    )
    cgExDeorumSieve(
      event,
      metal + '_tailings_from_crushed_ore_flint_mesh',
      crushedOreTag,
      'exdeorum:flint_mesh',
      cgExDeorumOreProcessingItem('tailings', metal),
      cgExDeorumBinomial(0.75)
    )

    cgExDeorumSieve(
      event,
      metal + '_concentrate_from_crushed_ore_copper_mesh',
      crushedOreTag,
      cgExDeorumStockMesh('copper'),
      cgExDeorumOreProcessingItem('concentrate', metal),
      cgExDeorumBinomial(0.65)
    )
    cgExDeorumSieve(
      event,
      metal + '_fines_from_crushed_ore_copper_mesh',
      crushedOreTag,
      cgExDeorumStockMesh('copper'),
      cgExDeorumOreProcessingItem('fines', metal),
      cgExDeorumBinomial(0.35)
    )
    cgExDeorumSieve(
      event,
      metal + '_tailings_from_crushed_ore_copper_mesh',
      crushedOreTag,
      cgExDeorumStockMesh('copper'),
      cgExDeorumOreProcessingItem('tailings', metal),
      cgExDeorumBinomial(0.65)
    )

    cgExDeorumSieve(
      event,
      metal + '_concentrate_from_crushed_ore_bronze_mesh',
      crushedOreTag,
      cgExDeorumStockMesh('bronze'),
      cgExDeorumOreProcessingItem('concentrate', metal),
      1
    )
    cgExDeorumSieve(
      event,
      metal + '_fines_from_crushed_ore_bronze_mesh',
      crushedOreTag,
      cgExDeorumStockMesh('bronze'),
      cgExDeorumOreProcessingItem('fines', metal),
      cgExDeorumBinomial(0.45)
    )
    cgExDeorumSieve(
      event,
      metal + '_tailings_from_crushed_ore_bronze_mesh',
      crushedOreTag,
      cgExDeorumStockMesh('bronze'),
      cgExDeorumOreProcessingItem('tailings', metal),
      cgExDeorumBinomial(0.45)
    )

    cgExDeorumSieve(
      event,
      metal + '_concentrate_from_crushed_ore_iron_mesh',
      crushedOreTag,
      cgExDeorumStockMesh('iron'),
      cgExDeorumOreProcessingItem('concentrate', metal),
      1
    )
    cgExDeorumSieve(
      event,
      metal + '_fines_from_crushed_ore_iron_mesh',
      crushedOreTag,
      cgExDeorumStockMesh('iron'),
      cgExDeorumOreProcessingItem('fines', metal),
      cgExDeorumBinomial(0.75)
    )
    cgExDeorumSieve(
      event,
      metal + '_tailings_from_crushed_ore_iron_mesh',
      crushedOreTag,
      cgExDeorumStockMesh('iron'),
      cgExDeorumOreProcessingItem('tailings', metal),
      cgExDeorumBinomial(0.30)
    )
  })

  CG_EXDEORUM_CRUCIBLE_METALS.forEach(metal => {
    cgExDeorumLavaCrucible(
      event,
      metal + '_from_concentrate',
      cgExDeorumOreProcessingItem('concentrate', metal),
      'gtceu:' + metal,
      144
    )
    cgExDeorumLavaCrucible(
      event,
      metal + '_from_fines',
      cgExDeorumOreProcessingItem('fines', metal),
      'gtceu:' + metal,
      36
    )
  })

  cgExDeorumSmelting(
    event,
    'hot_iron_bloom_from_iron_concentrate',
    'crossgrove:metal_forms/concentrates/iron',
    'crossgrove_integrations:hot_iron_bloom',
    0.7,
    200
  )

  cgExDeorumSmelting(
    event,
    'hot_iron_bloom_from_crushed_iron_ore',
    'crossgrove:ore_processing/crushed_ores/iron',
    'crossgrove_integrations:hot_iron_bloom',
    0.7,
    800
  )

})

ServerEvents.tags('item', event => {
  CG_EXDEORUM_REMOVED_ITEMS.forEach(item => {
    event.add('crossgrove:removed/ex_deorum_skyblock', item)
  })

  event.remove('exdeorum:crooks', [
    'exdeorum:crook',
    'exdeorum:bone_crook'
  ])

  event.remove('exdeorum:hammers', [
    'exdeorum:wooden_hammer',
    'exdeorum:stone_hammer',
    'exdeorum:golden_hammer',
    'exdeorum:iron_hammer',
    'exdeorum:diamond_hammer',
    'exdeorum:netherite_hammer'
  ])

  event.remove('exdeorum:compressed_hammers', [
    'exdeorum:compressed_wooden_hammer',
    'exdeorum:compressed_stone_hammer',
    'exdeorum:compressed_golden_hammer',
    'exdeorum:compressed_iron_hammer',
    'exdeorum:compressed_diamond_hammer',
    'exdeorum:compressed_netherite_hammer'
  ])

  event.remove('exdeorum:sieve_meshes', [
    'exdeorum:iron_mesh',
    'exdeorum:golden_mesh',
    'exdeorum:diamond_mesh',
    'exdeorum:netherite_mesh'
  ])

  CG_EXDEORUM_STOCK_MESH_METALS.forEach(metal => {
    event.add('exdeorum:sieve_meshes', cgExDeorumStockMesh(metal))
    event.add('crossgrove:ex_deorum/stock_meshes', cgExDeorumStockMesh(metal))
  })

  event.add(
    'crossgrove:ex_deorum/sieves',
    CG_EXDEORUM_WOOD_TYPES.map(wood => 'exdeorum:' + wood + '_sieve')
  )

  event.add('crossgrove:iron_processing/hot_blooms', 'crossgrove_integrations:hot_iron_bloom')
  event.add('crossgrove:iron_processing/blooms', 'crossgrove_integrations:iron_bloom')
})
