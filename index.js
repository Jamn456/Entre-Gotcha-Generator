var names = ["Mrs. Bain", "Cooper", "Carmen Cicerini", "Zoey", "Carmen Courtad", "Hannah", "Jackson", "Jordyn", "Danny", "DJ", "Sydney", "Kate", "Parker", "Christianna"];

for (i = names.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * i);
    k = names[i];
    names[i] = names[j];
    names[j] = k;
}

function myTarget(name) {
    let myNum = names.indexOf(name);
    let theirNum = 0;
    if (myNum < names.length - 1) {
        theirNum = myNum + 1;

    } else {
        theirNum = 0;

    }

    window.alert(names[theirNum]);

}