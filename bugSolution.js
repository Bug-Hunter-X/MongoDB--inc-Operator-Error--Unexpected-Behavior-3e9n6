```javascript
//Correct usage of $inc operator using upsert
db.collection('counters').updateOne( { _id: 'myCounter' }, { $inc: { sequence: 1 } }, { upsert: true } );
```