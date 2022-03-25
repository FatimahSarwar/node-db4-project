

const router = require('express').Router();
const Recipes = require('./recipes-model')

router.get('/', (req, res, next) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(next);
});

router.get('/:recipe_id', (req, res, next) => {
    const { recipe_id } = req.params;

    Recipes.getRecipeById(recipe_id)
        .then(recipe => {
            res.json(recipe)
        })
        .catch(next)
})




router.use((err,req , res, next)=>{ //eslint-disable-line
    
        res.status(500).json({
            message: err.message,
            stack: err.stack
        })
    })

module.exports=router;