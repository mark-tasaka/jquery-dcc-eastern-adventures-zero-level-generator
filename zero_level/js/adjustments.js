

	 	
/*
hitPointAdjustPerLevel (luckySign, luckModifier) - returns the additional/minus hit points
the character received per level from their Stamina modifier and whether they have the Lucky Sign "Bountiful Harvest".
*/
	  
function hitPointAdjustPerLevel (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign != undefined && luckySign.luckySign === "Bountiful Harvest"){
        adjust = luckModifier;
     }
	return adjust;
}

/*
 getBaseArmourClass(agilityModifier)- returns the base armour class of the character
*/
function getBaseArmourClass(agilityModifier){
	var armourClass = 10;
	baseArmourClass = armourClass + agilityModifier;
	return baseArmourClass;
}	  

/*
getArmour (occupations) - returns the armour of the character based on their occupation.	  
*/
function getArmour (occupations) {
	var armour = "";
	if (occupations.occupation === "Armourer") {
		armour = "*Okashi gusoku: AC +4, Check Pen -4, Speed -5', Fumble d12";
	}
	else if (occupations.occupation === "Bandit") {
		armour = "*Karuta tatami: AC +3, Check Pen -2, Fumble d8";
	}
	else if (occupations.occupation === "Thug") {
		armour = "*Karuta tatami: AC +3, Check Pen -2, Fumble d8";
	}
		return armour;
}

/*
getArmourProtection (armour) - retuns the bonus to the base armour class that the armour provides.  
*/
function getArmourProtection (occupations) {
	var armourProtection = 0;
	if (occupations.occupation === "Armourer") {
		armourProtection = 4;
	}
	else if (occupations.occupation === "Bandit" || occupations.occupation === "Thug") {
		armourProtection = 3;
	}
	return armourProtection;
}

/*
addModifierSign (modifier) adds a + sign to positive integers; use for ability modifiers, saving throws, etc.
*/
function addModifierSign (modifier) {
	if(modifier >= 0 ) {
		return "+" + modifier;
	}
	else {
		return modifier;
	}
}
	  
/*	  
getLanguages (occupations) - returns the characters base langugages based on race	  
*/
function getLanguages (occupations, bonusLanguages) {
	if (occupations.race === "Kitsune") {
		return "Common, Kitsune"; 
	}
	else if (occupations.race === "Koropokuru") {
		return "Common, Koropokuru";
	}
	else if (occupations.race === "Tengu") {
		return "Common, Tengu";
	}
	else {
		return "Common";
	}
	// if(occupations.race === "Dwarf" || occupations.race === "Elf" || occupations.race === "Halfling")
} 
	  
/*
getBonusLanguages (intelligenceModifier, luckySign, luckModifier) - add randomly selected bonus languages base on the character's intelligence or if they have the Lucky Sign of Bird Song
*/
function getBonusLanguages (intelligenceModifier, luckySign, luckModifier, race) {
	var bonusLanguages = 0;
	if(bonusLanguages  != undefined && typeof bonusLanguages === 'number') {
		bonusLanguages = intelligenceModifier;
	}
	else {
		return "";
	}
	
	if(luckySign != undefined && luckySign.luckySign === "Birdsong") {
		bonusLanguages += luckModifier;
	}
	
	if(bonusLanguages <=0) {
		return "";
	}
	var result = ", " + addBonusLanguages().language, newLanguage = "";
	
	var bExtraBaseLangRace = false;
	if(race === "Kitsune" || race === "Koropokuru" || race === "Tengu"){
		bExtraBaseLangRace = true;
	}
	// loop
	for(var i = 1; i < bonusLanguages; i++){
		// 1) get a random lang
		newLanguage = addBonusLanguages().language;
		// 2) check the new lang is not repeative
		if(result.indexOf(newLanguage) != -1 || (bExtraBaseLangRace && newLanguage == race)){
			i--;
			// if yes continue;
			continue;
		} else{
			// if not, add the new lang into the result
			result += ", " + newLanguage;
		}

	}
	return result;
}
	  
/*
getFumbleDie (armour) - returns the fumble die type based on the armour the character is wearing
*/
function getFumbleDie (occupations) {
	var fumbleDie = "d4"; 
	if (occupations.occupation === "Bandit" || occupations.occupation === "Thug") {
		fumbleDie = "d8"; 
	}
	else if (occupations.occupation === "Armourer") {
		fumbleDie = "d12"; 
	}
	return fumbleDie;
}
	  
/*
meleeAdjust (luckySign, luckModifier) - adds bonus/penality to Melee attack based on whether the character possesses specific Lucky Signs
*/
function meleeAdjust (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "Harsh winter"){
        adjust = luckModifier;
     }
	else if (luckySign.luckySign != undefined && luckySign.luckySign === "The bull") {
		adjust = luckModifier;
	}
	return adjust;
}
      
      
/*
meleeDamageAdjust (luckySign, luckModifier) - adds bonus/penality to Melee attack based on whether the character possesses specific Lucky Signs
*/
function meleeDamageAdjust (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "Born on the battlefield"){
        adjust = luckModifier;
     }
	else if (luckySign.luckySign != undefined && luckySign.luckySign === "Path of the bear") {
		adjust = luckModifier;
	}
	return adjust;
}

      

/*
rangeAdjust (luckySign, luckModifier) - adds bonus/penality to Range attack based on whether the character possesses specific Lucky Signs
*/	  
function rangeAdjust (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign.luckySign != undefined && (luckySign.luckySign === "Harsh winter" || luckySign.luckySign === "Fortunate date")){
        adjust = luckModifier;
     }
	return adjust;
}
      
      
/*
rangeDamageAdjust (luckySign, luckModifier) - adds bonus/penality to Melee attack based on whether the character possesses specific Lucky Signs
*/
function rangeDamageAdjust (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "Born on the battlefield"){
        adjust = luckModifier;
     }
	else if (luckySign.luckySign != undefined && luckySign.luckySign === "Hawkeye") {
		adjust = luckModifier;
	}
	return adjust;
}

    
	 
/*
getSpeed (occupations) returns the base speed of the character based on their race
*/
function getSpeed (occupations) {
	var speed = 30;
	if(occupations.race === "Koropokuru") {
		speed = 20;
	}
    else if(occupations.occupation === "Armourer") {
        speed = 25;
    }
	return speed;
}

/*
 addLuckToSpeed (luckySign, luckModifier) adds bonuses to the character's speed if they have a positive Luck Modifier and the Lucky Sign of Wild Child
*/
function addLuckToSpeed (luckySign, luckModifier) {
	var addSpeed = 0;
	if (luckySign.luckySign != undefined && luckySign.luckySign === "Wild child" && luckModifier == 1){
		addSpeed = 5;
	}
	else if (luckySign.luckySign != undefined && luckySign.luckySign === "Wild child" && luckModifier == 2){
		addSpeed = 10;
	}
	else if (luckySign.luckySign != undefined && luckySign.luckySign === "Wild child" && luckModifier == 3){
		addSpeed = 15;
	}
	return addSpeed;
}



/*
adjustRef (luckySign, luckModifier) - add bonus/penality to Saving Throw based on Lucky Sign
*/
function adjustRef (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign.luckySign != undefined && (luckySign.luckySign === "Luck sign" || luckySign.luckySign === "Struck by Lightning")){
        adjust = luckModifier;
     }
	return adjust;
}
	 
/*
adjustFort (luckySign, luckModifier) - add bonus/penality to Saving Throw based on Lucky Sign
*/
function adjustFort (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign.luckySign != undefined && (luckySign.luckySign === "Luck sign" || luckySign.luckySign === "Lived through famine")){
        adjust = luckModifier;
     }
	return adjust;
}
	  
/*
adjustWill (luckySign, luckModifier) - add bonus/penality to Saving Throw based on Lucky Sign
*/
function adjustWill (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign.luckySign != undefined && (luckySign.luckySign === "Luck sign" || luckySign.luckySign === "Resisted temptation")){
        adjust = luckModifier;
     }
	return adjust;
}	 
	  
/*
adjustInit (luckySign, luckModifier) - add bonus/penality to Initiative based on Lucky Sign
*/
function adjustInit (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "Speed of the Cobra"){
        adjust = luckModifier;
     }
	return adjust;
}	

	  
/*
adjustAC (luckySign, luckModifier) - add bonus/penality to AC based on Lucky Sign
*/
function adjustAC (luckySign, luckModifier) {
   var adjust = 0;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "Charmed house"){
        adjust = luckModifier;
     }
	return adjust;
}	
	  
/*
adjustCrit (luckySign, luckModifier) - add bonus/penality to Crit based on Lucky Sign
*/
function adjustCrit (luckySign, luckModifier) {
   var adjust = luckModifier * 1;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "Warrior's arm"){
        adjust = luckModifier * 2;
     }
	return adjust;
}	
	  
/*
adjustFumble (luckySign, luckModifier) - add bonus/penality to Fumble based on Lucky Sign
*/
function adjustFumble  (luckySign, luckModifier) {
   var adjust = luckModifier * -1;
    if (luckySign.luckySign != undefined && luckySign.luckySign === "The Broken Star"){
        adjust = luckModifier * -2;
     }
	return adjust;
}	

/*
addRaceAbilities (occupations) - adds a special abilities designed if the character is a dwarf, elf or halfling
*/
function addRaceAbilities (occupations) {
	var raceAbilities = "";
	if (occupations.race === "Kitsune") {
		raceAbilities = "Special Abilities: Shape-shifting, karma";
	}	
	else if (occupations.race === "Koropokuru") {
		raceAbilities = "Special Abilities: Infravision (60'), sling, sense fresh water, woodland and handling animals skills";
	}	
	else if (occupations.race === "Tengu") {
		raceAbilities = "Special Abilities: Flight, mimicry";
	}
	return raceAbilities;
}
	  
/*addSign (modifier) Adds a + sign to value if value is 1 or greater.  If value is 0, then a empty String "" is returned.
*/
function addSign (modifier) {
	if(modifier > 0 ) {
		return "+" + modifier;
	}
	else if(modifier === 0) {
		return "";
	}
	else {
		return modifier;
	}
}
	  	  