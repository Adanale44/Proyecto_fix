/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v997abpxbqoyyrz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7dnfltga",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 6,
      "values": [
        "creado",
        "en curso",
        "publicado",
        "finalizado",
        "cancelado",
        "abierto",
        "cerrado"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v997abpxbqoyyrz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7dnfltga",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 5,
      "values": [
        "En curso",
        "Finalizado",
        "Cancelado",
        "Abierto",
        "Cerrado"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
