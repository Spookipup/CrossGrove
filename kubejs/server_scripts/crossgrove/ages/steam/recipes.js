// priority: 760

ServerEvents.recipes(event => {
  var bronzeAxle = cgCrossroadsMaterialItem('crossroads:axle', 'bronze')
  var bronzeGear = cgCrossroadsMaterialItem('crossroads:gear_base', 'bronze')
  var bronzeLargeGear = cgCrossroadsMaterialItem('crossroads:gear_base_large', 'bronze')

  event.remove({ output: 'crossroads:fluid_tank' })
  event.remove({ output: 'crossroads:heat_sink' })
  event.remove({ output: 'crossroads:radiator' })
  event.remove({ output: 'crossroads:redstone_fluid_tube' })
  event.remove({ output: 'crossroads:steamer' })
  event.remove({ output: 'crossroads:water_centrifuge' })
  event.remove({ output: 'crossroads:dynamo' })
  event.remove({ output: 'gtceu:steam_machine_casing' })
  event.remove({ output: 'gtceu:lp_steam_forge_hammer' })
  event.remove({ output: 'gtceu:lp_steam_compressor' })
  event.remove({ output: 'gtceu:lp_steam_alloy_smelter' })
  event.remove({ output: 'crossgrove_integrations:mechanical_piston' })

  if (Item.exists('crossroads:heat_sink')) {
    event.shaped('crossroads:heat_sink', [
      'WCW',
      'CPC',
      'WCW'
    ], {
      C: cgMetalFormIngredient('light_plates', 'copper'),
      P: '#forge:plates/copper',
      W: cgMetalFormIngredient('heavy_wires', 'copper')
    }).id('crossgrove:steam_age/crossroads/heat_sink')
  }

  if (Item.exists('crossroads:fluid_tank')) {
    event.shaped('crossroads:fluid_tank', [
      'LGL',
      'TBT',
      'LGL'
    ], {
      B: '#forge:plates/bronze',
      G: '#forge:glass',
      L: cgMetalFormIngredient('light_plates', 'bronze'),
      T: 'crossroads:fluid_tube'
    }).id('crossgrove:steam_age/crossroads/fluid_tank')
  }

  if (Item.exists('crossroads:radiator')) {
    event.shaped('crossroads:radiator', [
      'SCS',
      'THT',
      'SCS'
    ], {
      C: cgMetalFormIngredient('light_plates', 'copper'),
      H: 'crossroads:heat_sink',
      S: cgMetalFormIngredient('light_plates', 'steel'),
      T: 'crossroads:fluid_tube'
    }).id('crossgrove:steam_age/crossroads/radiator')
  }

  if (Item.exists('crossroads:redstone_fluid_tube')) {
    event.shaped('2x crossroads:redstone_fluid_tube', [
      'RGR',
      'LTL',
      'RGR'
    ], {
      G: bronzeGear,
      L: cgMetalFormIngredient('light_plates', 'bronze'),
      R: 'minecraft:redstone',
      T: 'crossroads:fluid_tube'
    }).id('crossgrove:steam_age/crossroads/redstone_fluid_tube')
  }

  if (Item.exists('crossroads:steamer')) {
    event.shaped('crossroads:steamer', [
      'SRS',
      'TBT',
      'SCS'
    ], {
      B: 'crossroads:steam_boiler',
      C: 'crossroads:heating_chamber',
      R: 'crossroads:radiator',
      S: '#forge:plates/steel',
      T: 'crossroads:fluid_tube'
    }).id('crossgrove:steam_age/crossroads/steamer')
  }

  if (Item.exists('crossroads:water_centrifuge')) {
    event.shaped('crossroads:water_centrifuge', [
      'TST',
      'GPG',
      'TCT'
    ], {
      C: 'crossgrove_integrations:mechanical_piston',
      G: bronzeGear,
      P: 'crossroads:rotary_pump',
      S: 'crossroads:fluid_tank',
      T: 'crossroads:fluid_tube'
    }).id('crossgrove:steam_age/crossroads/water_centrifuge')
  }

  if (Item.exists('gtceu:steam_machine_casing')) {
    event.shaped('gtceu:steam_machine_casing', [
      'SFS',
      'PHP',
      'SFS'
    ], {
      F: 'gtceu:firebrick',
      H: 'crossroads:heating_chamber',
      P: '#forge:plates/bronze',
      S: '#forge:plates/steel'
    }).id('crossgrove:steam_age/gtceu/steam_machine_casing')
  }

  if (Item.exists('gtceu:lp_steam_forge_hammer')) {
    event.shaped('gtceu:lp_steam_forge_hammer', [
      'HHH',
      'SCS',
      'APA'
    ], {
      A: bronzeAxle,
      C: 'gtceu:steam_machine_casing',
      H: 'gtceu:tool_head_hammer_steel',
      P: 'crossgrove_integrations:mechanical_piston',
      S: '#forge:plates/steel'
    }).id('crossgrove:steam_age/gtceu/lp_steam_forge_hammer')
  }

  if (Item.exists('gtceu:lp_steam_compressor')) {
    event.shaped('gtceu:lp_steam_compressor', [
      'SPS',
      'GCG',
      'SHS'
    ], {
      C: 'gtceu:steam_machine_casing',
      G: bronzeGear,
      H: 'gtceu:tool_head_hammer_steel',
      P: 'crossgrove_integrations:mechanical_piston',
      S: '#forge:plates/steel'
    }).id('crossgrove:steam_age/gtceu/lp_steam_compressor')
  }

  if (Item.exists('gtceu:lp_steam_alloy_smelter')) {
    event.shaped('gtceu:lp_steam_alloy_smelter', [
      'PFP',
      'HCH',
      'PBP'
    ], {
      B: 'crossroads:heating_crucible',
      C: 'gtceu:steam_machine_casing',
      F: 'gtceu:tool_head_file_steel',
      H: 'gtceu:firebrick',
      P: '#forge:plates/bronze'
    }).id('crossgrove:steam_age/gtceu/lp_steam_alloy_smelter')
  }

  if (Item.exists('crossroads:dynamo')) {
    event.shaped('crossroads:dynamo', [
      'WGW',
      'SPS',
      'RCT'
    ], {
      C: 'gtceu:steam_machine_casing',
      G: bronzeLargeGear,
      P: 'crossgrove_integrations:mechanical_piston',
      R: 'minecraft:redstone',
      S: '#forge:plates/steel',
      T: 'crossroads:steam_turbine',
      W: cgMetalFormIngredient('heavy_wires', 'cupronickel')
    }).id('crossgrove:steam_age/crossroads/dynamo')
  }

  if (Item.exists('crossgrove_integrations:mechanical_piston')) {
    event.shaped('crossgrove_integrations:mechanical_piston', [
      'BHB',
      'RGR',
      'TST'
    ], {
      B: cgMetalFormIngredient('bolts', 'steel'),
      G: bronzeGear,
      H: cgMetalFormIngredient('heavy_plates', 'steel'),
      R: cgMetalFormIngredient('rods', 'steel'),
      S: 'gtceu:steel_spring',
      T: cgMetalFormIngredient('threaded_rods', 'steel')
    }).id('crossgrove:steam_age/components/mechanical_piston')
  }

  CG_FORM_METALS.forEach(metal => {
    cgGtMachineRecipe(
      event,
      'forge_hammer',
      'crossgrove:steam_age/forge_hammer/' + metal + '_plate_from_ingot',
      '#forge:ingots/' + metal,
      cgMetalFormItem(metal, 'plates'),
      80,
      8
    )

    cgGtMachineRecipe(
      event,
      'forge_hammer',
      'crossgrove:steam_age/forge_hammer/' + metal + '_double_plate_from_plates',
      '2x ' + cgMetalFormIngredient('plates', metal),
      cgMetalFormItem(metal, 'heavy_plates'),
      120,
      8
    )

    cgGtMachineRecipe(
      event,
      'forge_hammer',
      'crossgrove:steam_age/forge_hammer/' + metal + '_small_billet_from_ingots',
      '2x #forge:ingots/' + metal,
      cgBilletItem(metal, 'small_billets'),
      120,
      8
    )

    cgGtMachineRecipe(
      event,
      'forge_hammer',
      'crossgrove:steam_age/forge_hammer/' + metal + '_billet_from_ingots',
      '4x #forge:ingots/' + metal,
      cgBilletItem(metal, 'billets'),
      160,
      8
    )

    cgGtMachineRecipe(
      event,
      'forge_hammer',
      'crossgrove:steam_age/forge_hammer/' + metal + '_large_billet_from_ingots',
      '8x #forge:ingots/' + metal,
      cgBilletItem(metal, 'large_billets'),
      240,
      8
    )
  })

  CG_EXDEORUM_STOCK_MESH_METALS.forEach(metal => {
    cgGtMachineRecipe(
      event,
      'compressor',
      'crossgrove:steam_age/compressor/' + metal + '_mesh_from_stock',
      [
        '4x ' + cgMetalFormIngredient('fine_wires', metal),
        '4x ' + cgMetalFormIngredient('light_rods', metal)
      ],
      cgMetalFormItem(metal, 'sieve_meshes'),
      160,
      8
    )
  })

  cgGtMachineRecipe(
    event,
    'alloy_smelter',
    'crossgrove:steam_age/alloy_smelter/bronze_from_copper_and_tin',
    [
      '3x #forge:ingots/copper',
      '#forge:ingots/tin'
    ],
    '4x gtceu:bronze_ingot',
    240,
    8
  )

  cgGtMachineRecipe(
    event,
    'alloy_smelter',
    'crossgrove:steam_age/alloy_smelter/brass_from_copper_and_zinc',
    [
      '#forge:ingots/copper',
      '#forge:ingots/zinc'
    ],
    '2x gtceu:brass_ingot',
    200,
    8
  )

  cgGtMachineRecipe(
    event,
    'alloy_smelter',
    'crossgrove:steam_age/alloy_smelter/cupronickel_from_copper_and_nickel',
    [
      '#forge:ingots/copper',
      '#forge:ingots/nickel'
    ],
    '2x gtceu:cupronickel_ingot',
    200,
    8
  )
})
