# Sorting Results

- The format of a sort follows `db.COLLECTION_NAME.find().sort({FIELD:1})`

- A value of `1` is for ascending order.

- A value of `-1` is for descending order.

- NOTE: Remember to add `.pretty()` afterwards so the results are readable!

- In the mongo shell, using the animals collection that you created in the last exercise:

1. How to sort by id:

- The id contains a timestamp, so sorting by id will sort by when they were entered to the database.

```
db.animals.find().sort({ _id:1 });          sorts by first entry to last
db.animals.find().sort({ _id:-1 });         sorts by last entry to first
```

2. How to sort by an integer - numLegs:

```
db.animals.find().sort({ numLegs:1 });         sorts legs ascending
db.animals.find().sort({ numLegs:-1 });        sorts legs decending
```

3. How to sort by a string - class:

```
db.animals.find().sort({ class:1 });            sorts class by chronological order
db.animals.find().sort({ class:-1 });           sorts class by reverse chronological order
```
