/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v997abpxbqoyyrz")

  collection.listRule = "status = \"abierto\" || creator = @request.auth.id || published = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v997abpxbqoyyrz")

  collection.listRule = "status = \"abierto\" || creator = @request.auth.id"

  return dao.saveCollection(collection)
})
