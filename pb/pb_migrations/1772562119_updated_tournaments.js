/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v997abpxbqoyyrz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kpvjvtoz",
    "name": "inscriptionOpen",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ruxf3l3m",
    "name": "participants",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v997abpxbqoyyrz")

  // remove
  collection.schema.removeField("kpvjvtoz")

  // remove
  collection.schema.removeField("ruxf3l3m")

  return dao.saveCollection(collection)
})
