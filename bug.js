```javascript
// Assuming 'collection' is your MongoDB collection

async function updateDocument(id, update) {
  try {
    const result = await collection.updateOne({ _id: ObjectId(id) }, update);
    if (result.modifiedCount === 0) {
      // Handle the case where the document wasn't found or couldn't be updated
      console.error(`Document with ID ${id} not found or not updated`);
      throw new Error(`Document with ID ${id} not found or not updated`);
    }    
    return result;
  } catch (error) {
    console.error('Error updating document:', error);
    // Consider throwing error or handling differently based on your needs
    throw error; // Re-throw the error to be handled by calling function
  }
}
```