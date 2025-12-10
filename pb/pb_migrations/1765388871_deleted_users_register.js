/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("huj6787a2crw4bi");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "huj6787a2crw4bi",
    "created": "2025-12-10 14:10:43.213Z",
    "updated": "2025-12-10 15:04:10.488Z",
    "name": "users_register",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6xktzntr",
        "name": "field",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": [],
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": [],
      "onlyVerified": false,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
})
