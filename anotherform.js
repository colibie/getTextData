//using a different format to get the data

var text = `Valentine Oragbakosi <v.oragbakosi@genesystechhub.com> +234-7032434429 
Chinonso Williams Junior <c.williams@genesystechhub.com> +234-9034464230
Ndife Uchenna <n.uchenna@genesystechhub.com> +234-8052464529
Ehiogu Chika Josephine <c.josephine@genesystechhub.com> +234-7022454620
Chidera Jennifer <c.jennifer@genesystechhub.com> +234-8032434425
Nwosu Ifeoma Lucia <l.ifeoma@genesystechhub.com> +234-9032434424
Ibe Agwu <i.ogele@genesystechhub.com> +234-7032434427`

function getNames(text){
    newText = text.split('\n'); //splits each line of the text into an element
    names = [];
    newText.forEach(element => {
        elem = element.split('<'); //splits each element at <
        names.push(elem[0].trim()); //trims out extra space and adds the first element ie name to names array
    });
    console.log(names)

}
getNames(text);

function getNum(text){
    newText = text.split('\n');
    nums = [];
    newText.forEach(element => {
        elem = element.split('>');
        nums.push(elem[1].trim());  //adds the second element ie num to nums array
    })
    console.log(nums);
}
getNum(text);

function getEmail(text){
    newText = text.split('\n');
    email =[];
    newText.forEach(element => {
        elem = element.split('<'); //splits each element at <
        mail = elem[1].split('>'); //splits the second element of the new elem array at >
        email.push(mail[0]); 
    })
    console.log(email);
};
getEmail(text);

