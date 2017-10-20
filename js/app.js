var initialCats = [
	{
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
		nickname: ['Puppy', 'Tis', 'Tab', 'Tabbu']
	},
	{
		clickCount: 0,
		name: 'Tisca',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
		nickname: ['Tisca', 'Tis', 'Tab', 'Tabbu']
	},
	{
		clickCount: 0,
		name: 'Tris',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
		nickname: ['Tris', 'Tis', 'Tab', 'Tabbu']
	},
	{
		clickCount: 0,
		name: 'Sasha',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
		nickname: ['Sasha', 'Tis', 'Tab', 'Tabbu']
	},
	{
		clickCount: 0,
		name: 'Trisha',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
		nickname: ['Trisha', 'Tis', 'Tab', 'Tabbu']
	}
];

var Cat = function(data) {

	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nickname = ko.observableArray(data.nickname);

	this.catLevel = ko.computed(function() {
		var catLevel;
		var click = this.clickCount();
		if(click >= 110) {
			catLevel = 'Teen';
		} else if(click >= 10) {
			catLevel = 'Infant';
		} else {
			catLevel = 'Newborn';
		}
		return catLevel;
	}, this);
}

// [ ] Make the cats show up in a list

// [ ] Make the current cat change when you click on a cat in the list

var ViewModel = function() {
	
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

}

ko.applyBindings(new ViewModel())