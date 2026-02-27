/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ub50sy0slxo78c3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k8gqiikk",
    "name": "category",
    "type": "select",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Deporte"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ub50sy0slxo78c3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k8gqiikk",
    "name": "category",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Deporte"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
