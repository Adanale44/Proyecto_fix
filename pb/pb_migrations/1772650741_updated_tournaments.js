/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v997abpxbqoyyrz")

  collection.viewRule = "status = \"abierto\" || creator = @request.auth.id || @request.auth.id != \"\" || published = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v997abpxbqoyyrz")

  collection.viewRule = "status = \"abierto\" || creator = @request.auth.id || @request.auth.id != \"\""

  return dao.saveCollection(collection)
})
