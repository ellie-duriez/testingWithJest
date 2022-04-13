//CHECKS IF YOUR SPECIFIED INGREDIENTS IS CONTAINED IN THE MYINGREDIENTS ARRAY
const checkMyRecipe = (ingredient) => {
    let myIngredients = ["basil", "courgette", "kidney beans", "chilli flakes", "aubergine"];
        for (i=0;i<myIngredients.length;i++) {
            if(ingredient == myIngredients[i]) {
                return true;
            }
        return false;
        }
    }

//RETURNS THE TYPE OF MYVALUE
const returnType = (myValue) => {
    return (typeof myValue)
    }

//A BASIC SUM
const sum = (a, b) => {
    return a + b;
}

module.exports = {
    sum,
    checkMyRecipe,
    returnType
}




    