```javascript
// Assuming 'collection' is your MongoDB collection

async function updateDocument(id, update) {
  try {
    const result = await collection.updateOne({ _id: ObjectId(id) }, { $set: update });
    if (result.matchedCount === 0) {
      // Handle the case where the document wasn't found
      console.warn(`Document with ID ${id} not found`);
      return { modifiedCount: 0, message: `Document with ID ${id} not found`}; // Return a meaningful response
    } else if (result.modifiedCount === 0) {
      console.warn(`Document with ID ${id} not modified`);
      return { modifiedCount: 0, message: `Document with ID ${id} not modified` };
    }
    return { modifiedCount: result.modifiedCount, message: 'Document updated successfully' };
  } catch (error) {
    console.error('Error updating document:', error);
    return { error: error.message }; // Return error details for handling by calling function
  }
}
```