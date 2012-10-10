	{
		name: 'building=entrance deprecation',
		tags: ['deprecated'],
		enabled: true,
		link: ['http://wiki.openstreetmap.org/wiki/Tag:building%3Dentrance'],
		trigger: 
			{
				tags: [['building', 'entrance']]
			},
		comments:
			{
				'en': 'building=entrance tag is deprecated, entrance=* should be used instead.'
			},
		safety: 'automated', // manual 
		action: function(tags){
			if (tags.building == 'entrance'){
				delete tags.building
				if (!tags.entrance){
					tags.entrance = 'yes';
				}
			}
			return tags
		}
	},