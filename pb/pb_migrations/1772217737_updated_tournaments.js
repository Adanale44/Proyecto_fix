/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v997abpxbqoyyrz")

  collection.viewRule = null
  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v997abpxbqoyyrz")

  collection.viewRule = ""
  collection.createRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
})
