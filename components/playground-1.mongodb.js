/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('quizApp');

// Search for documents in the current collection.
db.getCollection('playedData').aggregate([
    {
      $group: {
        _id: "$user_name",
        totalScore: { $sum: "$score" }
      }
    },
    {
      $sort: {
        totalScore: -1
      }
    },
    { $limit: 5 }

  ])
