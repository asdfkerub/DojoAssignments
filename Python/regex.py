import re
def get_matching_words(regex):
 words = ["aimlessness", "assassin", "baby", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab", "kilo", "laundered", "mattress", "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"]
 matches = []
 for word in words:
 	if re.search(regex,word):
 		matches.append(word)
 return matches


#print get_matching_words(r"v") # grabs all words with a v
#print get_matching_words(r"ss") # grabs all words with a ss
print get_matching_words(r"e$") # grabs all word ending with e
#print get_matching_words(r"b\wb") # grabs all words with a b - any char - b
#print get_matching_words(r"b.\w.b")
#print get_matching_words(r"\wa*\we*\wi*\wo*\wu*")regular expression
#print get_matching_words(r"[regularxpsion]")
#print get_matching_words(r"(.)\1")
