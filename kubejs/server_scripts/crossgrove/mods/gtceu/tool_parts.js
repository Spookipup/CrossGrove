// priority: 870

var CG_GT_TOOL_PART_TAGS = {
  axes: 'tool_head_axe',
  pickaxes: 'tool_head_pickaxe',
  shovels: 'tool_head_shovel',
  hoes: 'tool_head_hoe',
  swords: 'tool_blade_sword',
  hammers: 'tool_head_hammer',
  files: 'tool_head_file',
  saws: 'tool_blade_saw',
  scythes: 'tool_blade_scythe'
}

ServerEvents.tags('item', event => {
  Object.keys(CG_GT_TOOL_PART_TAGS).forEach(tool => {
    cgAddExisting(event, 'crossgrove:tool_heads/' + tool, cgGtParts(CG_GT_TOOL_PART_TAGS[tool]))
  })
})
