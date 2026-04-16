// priority: 0

// Current config already keeps paths single-choice in multiplayer and all-path in singleplayer.

ServerEvents.recipes(event => {
  function item(id) {
    return { item: id }
  }

  function tag(id) {
    return { tag: id }
  }

  function detailed(id, result, pattern, key) {
    event.remove({ id: 'crossroads:detailed_crafter/witchcraft/' + id })

    event.custom({
      type: 'crossroads:detailed_crafter',
      path: 'witchcraft',
      result: { item: result, count: 1 },
      pattern: pattern,
      key: key
    }).id('crossgrove:crossroads/witchcraft/' + id)
  }

  function formulation(id, inputFluid, amount, inputItem, outputFluid, outputAmount) {
    event.remove({ id: 'crossroads:formulation_vat/' + id })

    event.custom({
      type: 'crossroads:formulation_vat',
      input_fluid: inputFluid,
      fluid_amount: amount,
      input_item: inputItem,
      output: { fluid: outputFluid, amount: outputAmount }
    }).id('crossgrove:crossroads/formulation_vat/' + id)
  }

  detailed('syringe', 'crossroads:syringe', [
    ' SC',
    'CG ',
    'GC '
  ], {
    S: item('gtceu:lv_fluid_regulator'),
    C: tag('forge:nuggets/copper'),
    G: tag('forge:glass/colorless')
  })

  detailed('blood_centrifuge', 'crossroads:blood_centrifuge', [
    'MA ',
    'GBG',
    'SSS'
  ], {
    M: item('gtceu:lv_electric_motor'),
    A: item('crossroads:axle'),
    G: tag('forge:glass/colorless'),
    B: item('crossroads:water_centrifuge'),
    S: tag('forge:plates/steel')
  })

  detailed('formulation_vat', 'crossroads:formulation_vat', [
    'PCP',
    'C C',
    'CSC'
  ], {
    P: item('gtceu:lv_fluid_regulator'),
    C: tag('forge:ingots/copper'),
    S: item('minecraft:cauldron')
  })

  detailed('cultivator_vat', 'crossroads:cultivator_vat', [
    'BTB',
    'GPG',
    'BLB'
  ], {
    B: tag('forge:ingots/bronze'),
    T: item('crossroads:fluid_tube'),
    G: tag('forge:glass/colorless'),
    P: item('gtceu:lv_electric_pump'),
    L: item('minecraft:redstone_lamp')
  })

  detailed('incubator', 'crossroads:incubator', [
    'BCB',
    'BMB',
    'SSS'
  ], {
    C: tag('forge:ingots/copper'),
    B: item('minecraft:bricks'),
    M: item('gtceu:lv_electric_motor'),
    S: item('minecraft:hay_block')
  })

  detailed('hydroponics_trough', 'crossroads:hydroponics_trough', [
    'PFP',
    'FBF',
    'tTt'
  ], {
    P: item('gtceu:mv_electric_pump'),
    F: item('crossroads:fluid_tube'),
    B: item('gtceu:fertilizer'),
    T: tag('forge:storage_blocks/tin'),
    t: tag('forge:ingots/tin')
  })

  detailed('embryo_lab', 'crossroads:embryo_lab', [
    'ERE',
    'GFG',
    'CCC'
  ], {
    E: item('gtceu:mv_emitter'),
    R: tag('crossroads:atmos_antenna'),
    G: tag('forge:glass/colorless'),
    F: item('gtceu:mv_field_generator'),
    C: tag('forge:ingots/copper')
  })

  event.remove({ id: 'crossroads:formulation_vat/fertilizer_solution_alchemic' })
  event.remove({ id: 'crossroads:formulation_vat/fertilizer_solution_vegan' })
  event.remove({ id: 'crossroads:formulation_vat/nutrient_solution_alchemic' })

  formulation('fertilizer_solution',
    { fluid: 'water' },
    200,
    item('gtceu:fertilizer'),
    'crossroads:fertilizer_solution',
    200
  )

  formulation('nutrient_solution',
    { tag: 'crossroads:liquid_fat' },
    100,
    item('gtceu:plant_ball'),
    'crossroads:nutrient_solution',
    100
  )

  // Incubator processing recipes keep their stock two-input semantics for this pass.
  // Mutagen has no source recipe in the Crossroads jar; it is gated by the machine chain above.
})
