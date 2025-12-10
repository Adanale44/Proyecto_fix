/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("huj6787a2crw4bi")

  // remove
  collection.schema.removeField("bth5g7p8")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("huj6787a2crw4bi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bth5g7p8",
    "name": "field2",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
