/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("huj6787a2crw4bi")

  collection.name = "users_resgister"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("huj6787a2crw4bi")

  collection.name = "users_fix"

  return dao.saveCollection(collection)
})
