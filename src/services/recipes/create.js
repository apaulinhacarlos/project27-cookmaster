const userModel = require('../../models');
const recipeValidation = require('./utils/recipeValidation');

module.exports = async (user, { name, ingredients, preparation }) => {
  const error = await recipeValidation.isValidParams(name, ingredients, preparation);
  if (error) return error;

  const { email } = user;
  const userLogged = await userModel.findByEmail(email);
  const { _id: userId } = userLogged;
  
  return userModel.createRecipe({ name, ingredients, preparation, userId });
};