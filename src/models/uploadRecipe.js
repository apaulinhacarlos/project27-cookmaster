const { ObjectId } = require('mongodb');
const mongoConnection = require('./connection');

const collection = 'recipes';

module.exports = async (id, path) => {
  const validId = ObjectId.isValid(id);
  if (!validId) return null;

  const foundDocument = (await mongoConnection.connection())
    .collection(collection)
    .updateOne(
      { _id: ObjectId(id) },
      { $set: { image: path } },
    );

  return foundDocument;
};
