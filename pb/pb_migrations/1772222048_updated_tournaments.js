/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v997abpxbqoyyrz")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_qTg0hDe` ON `tournaments` (`name`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v997abpxbqoyyrz")

  collection.indexes = []

  return dao.saveCollection(collection)
})
