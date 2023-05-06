// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// Change recipes here

	event.recipes.createSequencedAssembly([ // start the recipe
		'toms_storage:ts.inventory_connector',
		// Item.of('create:brass_ingot').withChance(2.0), // have this item be an output with a certain chance
	], 'minecraft:ender_pearl', [ // 'create:brass_ingot' is the input.
		// the transitional item set by "transitionalItem('create:incomplete_largse_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
		 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:diamond']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'create:andesite_alloy']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#minecraft:planks']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#forge:chests/wooden']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:comparator']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		 // event.recipes.createCutting('kubejs:storage_progress_item', 'kubejs:storage_progress_item').processingTime(50) // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
	]).transitionalItem('kubejs:storage_progress_item').loops(2) // set the transitional item and the loops (amount of repetitions)


	event.recipes.createSequencedAssembly([ // start the recipe
			'toms_storage:ts.storage_terminal',
			// Item.of('create:brass_ingot').withChance(2.0), // have this item be an output with a certain chance
		], '#forge:chests/wooden', [ // 'create:brass_ingot' is the input.
			// the transitional item set by "transitionalItem('create:incomplete_largse_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#forge:glass']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'create:andesite_alloy']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#minecraft:planks']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:glowstone']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:comparator']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createCutting('kubejs:storage_progress_item', 'kubejs:storage_progress_item').processingTime(50) // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
	]).transitionalItem('kubejs:storage_progress_item').loops(2) // set the transitional item and the loops (amount of repetitions)

	event.recipes.createSequencedAssembly([ // start the recipe
			'2x toms_storage:ts.trim',
			// Item.of('create:brass_ingot').withChance(2.0), // have this item be an output with a certain chance
		], '#forge:chests/wooden', [ // 'create:brass_ingot' is the input.
			// the transitional item set by "transitionalItem('create:incomplete_largse_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#forge:glass']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'create:andesite_alloy']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#minecraft:planks']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#twilightforest:uncrafting_ignores_cost']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:comparator']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createCutting('kubejs:storage_progress_item', 'kubejs:storage_progress_item').processingTime(50) // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
	]).transitionalItem('kubejs:storage_progress_item').loops(4) // set the transitional item and the loops (amount of repetitions)

	event.recipes.createSequencedAssembly([ // start the recipe
			'toms_storage:ts.open_crate',
			// Item.of('create:brass_ingot').withChance(2.0), // have this item be an output with a certain chance
		], '#forge:chests/wooden', [ // 'create:brass_ingot' is the input.
			// the transitional item set by "transitionalItem('create:incomplete_largse_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#forge:glass']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'create:andesite_alloy']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#minecraft:planks']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#minecraft:trapdoors']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#twilightforest:uncrafting_ignores_cost']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:comparator']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createCutting('kubejs:storage_progress_item', 'kubejs:storage_progress_item').processingTime(50) // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
	]).transitionalItem('kubejs:storage_progress_item').loops(6) // set the transitional item and the loops (amount of repetitions)

	event.recipes.createSequencedAssembly([ // start the recipe
			'6x toms_storage:ts.inventory_cable',
			// Item.of('create:brass_ingot').withChance(2.0), // have this item be an output with a certain chance
		], '#forge:chests/wooden', [ // 'create:brass_ingot' is the input.
			// the transitional item set by "transitionalItem('create:incomplete_largse_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#forge:glass']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#twilightforest:uncrafting_ignores_cost']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'create:andesite_alloy']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#minecraft:planks']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#minecraft:trapdoors']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:comparator']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createCutting('kubejs:storage_progress_item', 'kubejs:storage_progress_item').processingTime(50) // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
	]).transitionalItem('kubejs:storage_progress_item').loops(2) // set the transitional item and the loops (amount of repetitions)

	event.recipes.createSequencedAssembly([ // start the recipe
			'toms_storage:ts.inventory_cable_framed',
			// Item.of('create:brass_ingot').withChance(2.0), // have this item be an output with a certain chance
		], 'toms_storage:ts.inventory_cable', [ // 'create:brass_ingot' is the input.
			// the transitional item set by "transitionalItem('create:incomplete_largse_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#forge:glass']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#twilightforest:uncrafting_ignores_cost']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'create:andesite_alloy']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#minecraft:planks']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#minecraft:trapdoors']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:comparator']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createCutting('kubejs:storage_progress_item', 'kubejs:storage_progress_item').processingTime(50) // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
	]).transitionalItem('kubejs:storage_progress_item').loops(4) // set the transitional item and the loops (amount of repetitions)

	event.recipes.createSequencedAssembly([ // start the recipe
			'toms_storage:ts.inventory_cable_connector',
			// Item.of('create:brass_ingot').withChance(2.0), // have this item be an output with a certain chance
		], 'toms_storage:ts.inventory_cable', [ // 'create:brass_ingot' is the input.
			// the transitional item set by "transitionalItem('create:incomplete_largse_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:diamond']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:quartz']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:ender_pearl']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'create:andesite_alloy']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#forge:chests/wooden']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:comparator']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createCutting('kubejs:storage_progress_item', 'kubejs:storage_progress_item').processingTime(50) // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
	]).transitionalItem('kubejs:storage_progress_item').loops(1) // set the transitional item and the loops (amount of repetitions)

	event.recipes.createSequencedAssembly([ // start the recipe
			'toms_storage:ts.inventory_cable_connector_filtered',
			// Item.of('create:brass_ingot').withChance(2.0), // have this item be an output with a certain chance
		], 'toms_storage:ts.inventory_cable_connector', [ // 'create:brass_ingot' is the input.
			// the transitional item set by "transitionalItem('create:incomplete_largse_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:diamond']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:quartz']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:paper']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'create:andesite_alloy']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#forge:chests/wooden']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:comparator']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createCutting('kubejs:storage_progress_item', 'kubejs:storage_progress_item').processingTime(50) // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
	]).transitionalItem('kubejs:storage_progress_item').loops(2) // set the transitional item and the loops (amount of repetitions)

	event.recipes.createSequencedAssembly([ // start the recipe
			'toms_storage:ts.inventory_cable_connector_framed',
			// Item.of('create:brass_ingot').withChance(2.0), // have this item be an output with a certain chance
		], 'toms_storage:ts.inventory_cable_connector', [ // 'create:brass_ingot' is the input.
			// the transitional item set by "transitionalItem('create:incomplete_largse_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:diamond']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#twilightforest:uncrafting_ignores_cost']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:quartz']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:paper']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'create:andesite_alloy']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#forge:chests/wooden']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:comparator']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createCutting('kubejs:storage_progress_item', 'kubejs:storage_progress_item').processingTime(50) // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
	]).transitionalItem('kubejs:storage_progress_item').loops(4) // set the transitional item and the loops (amount of repetitions)

	event.recipes.createSequencedAssembly([ // start the recipe
			'toms_storage:ts.inventory_proxy',
			// Item.of('create:brass_ingot').withChance(2.0), // have this item be an output with a certain chance
		], '#forge:chests/wooden', [ // 'create:brass_ingot' is the input.
			// the transitional item set by "transitionalItem('create:incomplete_largse_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#minecraft:trapdoors']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#twilightforest:uncrafting_ignores_cost']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#minecraft:planks']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:paper']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'create:andesite_alloy']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#forge:chests/wooden']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:comparator']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createCutting('kubejs:storage_progress_item', 'kubejs:storage_progress_item').processingTime(50) // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
	]).transitionalItem('kubejs:storage_progress_item').loops(4) // set the transitional item and the loops (amount of repetitions)
	
	event.recipes.createSequencedAssembly([ // start the recipe
			'toms_storage:ts.crafting_terminal',
			// Item.of('create:brass_ingot').withChance(2.0), // have this item be an output with a certain chance
		], 'toms_storage:ts.storage_terminal', [ // 'create:brass_ingot' is the input.
			// the transitional item set by "transitionalItem('create:incomplete_largse_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:diamond']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#twilightforest:uncrafting_ignores_cost']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:crafting_table']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:paper']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'create:andesite_alloy']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#forge:chests/wooden']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:comparator']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createCutting('kubejs:storage_progress_item', 'kubejs:storage_progress_item').processingTime(50) // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
	]).transitionalItem('kubejs:storage_progress_item').loops(4) // set the transitional item and the loops (amount of repetitions)
	
	event.recipes.createSequencedAssembly([ // start the recipe
			'toms_storage:ts.inventory_hopper_basic',
			// Item.of('create:brass_ingot').withChance(2.0), // have this item be an output with a certain chance
		], 'toms_storage:ts.inventory_cable', [ // 'create:brass_ingot' is the input.
			// the transitional item set by "transitionalItem('create:incomplete_largse_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:hopper']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#twilightforest:uncrafting_ignores_cost']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#minecraft:planks']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:paper']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'create:andesite_alloy']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#forge:chests/wooden']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:comparator']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createCutting('kubejs:storage_progress_item', 'kubejs:storage_progress_item').processingTime(50) // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
	]).transitionalItem('kubejs:storage_progress_item').loops(1) // set the transitional item and the loops (amount of repetitions)
	
	event.recipes.createSequencedAssembly([ // start the recipe
			'toms_storage:ts.level_emitter',
			// Item.of('create:brass_ingot').withChance(2.0), // have this item be an output with a certain chance
		], 'toms_storage:ts.inventory_cable', [ // 'create:brass_ingot' is the input.
			// the transitional item set by "transitionalItem('create:incomplete_largse_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:redstone_torch']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:comparator']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#twilightforest:uncrafting_ignores_cost']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#minecraft:planks']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:paper']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'create:andesite_alloy']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#forge:chests/wooden']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createCutting('kubejs:storage_progress_item', 'kubejs:storage_progress_item').processingTime(50) // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
	]).transitionalItem('kubejs:storage_progress_item').loops(1) // set the transitional item and the loops (amount of repetitions)

	event.recipes.createSequencedAssembly([ // start the recipe
			'toms_storage:ts.wireless_terminal',
			// Item.of('create:brass_ingot').withChance(2.0), // have this item be an output with a certain chance
		], 'minecraft:spyglass', [ // 'create:brass_ingot' is the input.
			// the transitional item set by "transitionalItem('create:incomplete_largse_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#minecraft:planks']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item

			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#forge:glass']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:ender_pearl']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#twilightforest:uncrafting_ignores_cost']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:comparator']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'create:andesite_alloy']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#forge:chests/wooden']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createCutting('kubejs:storage_progress_item', 'kubejs:storage_progress_item').processingTime(50) // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
	]).transitionalItem('kubejs:storage_progress_item').loops(1) // set the transitional item and the loops (amount of repetitions)

	event.recipes.createSequencedAssembly([ // start the recipe
			'toms_storage:ts.adv_wireless_terminal',
			// Item.of('create:brass_ingot').withChance(2.0), // have this item be an output with a certain chance
		], 'minecraft:nether_star', [ // 'create:brass_ingot' is the input.
			// the transitional item set by "transitionalItem('create:incomplete_largse_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:diamond']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item

			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:netherite_ingot']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:ender_pearl']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#twilightforest:uncrafting_ignores_cost']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:comparator']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'create:andesite_alloy']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'toms_storage:ts.wireless_terminal']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:ender_pearl']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createCutting('kubejs:storage_progress_item', 'kubejs:storage_progress_item').processingTime(50) // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
	]).transitionalItem('kubejs:storage_progress_item').loops(4) // set the transitional item and the loops (amount of repetitions)

	event.recipes.createSequencedAssembly([ // start the recipe
			'toms_storage:ts.item_filter',
			// Item.of('create:brass_ingot').withChance(2.0), // have this item be an output with a certain chance
		], '#forge:wool', [ // 'create:brass_ingot' is the input.
			// the transitional item set by "transitionalItem('create:incomplete_largse_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#minecraft:planks']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item

			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#forge:glass']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:ender_pearl']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#twilightforest:uncrafting_ignores_cost']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:redstone']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'create:andesite_alloy']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#forge:chests/wooden']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createCutting('kubejs:storage_progress_item', 'kubejs:storage_progress_item').processingTime(50) // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
	]).transitionalItem('kubejs:storage_progress_item').loops(4) // set the transitional item and the loops (amount of repetitions)

	event.recipes.createSequencedAssembly([ // start the recipe
			'toms_storage:ts.polymorphic_item_filter',
			// Item.of('create:brass_ingot').withChance(2.0), // have this item be an output with a certain chance
		], 'toms_storage:ts.item_filter', [ // 'create:brass_ingot' is the input.
			// the transitional item set by "transitionalItem('create:incomplete_largse_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#minecraft:planks']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item

			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#forge:glass']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:diamond']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#twilightforest:uncrafting_ignores_cost']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:comparator']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'create:andesite_alloy']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#forge:chests/wooden']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createCutting('kubejs:storage_progress_item', 'kubejs:storage_progress_item').processingTime(50) // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
	]).transitionalItem('kubejs:storage_progress_item').loops(1) // set the transitional item and the loops (amount of repetitions)

	event.recipes.createSequencedAssembly([ // start the recipe
			'toms_storage:ts.tag_item_filter',
			// Item.of('create:brass_ingot').withChance(2.0), // have this item be an output with a certain chance
		], 'toms_storage:ts.item_filter', [ // 'create:brass_ingot' is the input.
			// the transitional item set by "transitionalItem('create:incomplete_largse_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#minecraft:planks']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item

			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#forge:glass']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:name_tag']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#twilightforest:uncrafting_ignores_cost']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'minecraft:comparator']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', 'create:andesite_alloy']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createDeploying('kubejs:storage_progress_item', ['kubejs:storage_progress_item', '#forge:chests/wooden']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
			 // event.recipes.createCutting('kubejs:storage_progress_item', 'kubejs:storage_progress_item').processingTime(50) // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
	]).transitionalItem('kubejs:storage_progress_item').loops(1) // set the transitional item and the loops (amount of repetitions)


	event.recipes.createMechanicalCrafting('toms_storage:ts.paint_kit', [
	  'ABC',
	  'DEF',
	  'GH '
	], {
	  A: 'minecraft:red_dye',
	  B: 'minecraft:green_dye',
	  C: 'minecraft:blue_dye',
	  D: 'minecraft:black_dye',
	  E: 'minecraft:bucket',
	  F: '#forge:wool',
	  G: 'minecraft:water_bucket',
	  H: '#twilightforest:uncrafting_ignores_cost'
	})

	event.remove({ mod: 'toms_storage' })

})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})