{
	name: 'created_by cleanup',
	tags: ['deprecated'],
	enabled: true,
	link: ['http://wiki.openstreetmap.org/wiki/Key:created_by'],
	trigger: 
		{
			tags: [['created_by']]
		},
	comments:
		{
			'en': 'created_by tag was used to save the name of editor that created the object.',
			'ru': 'тег created_by использовался ранее для хранения наименования объектов.'
		},
	safety: 'automated', // manual 
	action: function(tags){
		if (tags.created_by){
			delete tags.created_by
		}
		return tags
	}
}