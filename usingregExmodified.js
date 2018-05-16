var text = `Valentine Oragbakosi v.oragbakosi@genesystechhub.co.uk +234-7032434429 
Chinonso Williams Junior c.williams@genesystechhub.org +234-9034464230
Ndife Uchenna n.uchenna@genesystechhub.com +234-8052464529
Ehiogu Chika Josephine c.josephine@genesystechhub.ng +234-7022454620
Chidera Jennifer c.jennifer@genesystechhub.com +234-8032434425
Nwosu Ifeoma Lucia l.ifeoma@genesystechhub.co.ng +234-9032434424
Ibe Agwu i.ogele@genesystechhub.org.fr +234-7032434427`

function nums(text){
    var num = text.match(/\+(?=\d)\d{3}-\d+/g);
    return console.log(num);
}
nums(text);

function email(text){
    var email = text.match(/[\w\.]+@\w+(?:\.\w{2,6})+\b/gi); //visit https://regexr.com/ and paste the code for explanation
    return console.log(email);
}
email(text);

function names(text){
    var name = text.match(/(?:[a-zA-Z]+\s(?!\+))+/g);
    return console.log(name);
}
names(text);
