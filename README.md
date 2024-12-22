# Unhandled Promise Rejection in MongoDB updateOne

This example demonstrates an uncommon error that can occur when using MongoDB's `updateOne` method within an asynchronous JavaScript function.  The primary issue is the lack of robust error handling for situations where the update operation fails to modify the intended document. This can lead to silent failures, making debugging difficult.

## Problem
The provided `updateDocument` function attempts to update a MongoDB document. However, it fails to comprehensively handle potential errors.  If a document with the specified ID isn't found, or if the update operation fails for any other reason, the promise rejection isn't caught, potentially causing application instability.

## Solution
The solution includes explicit error handling. The `try...catch` block now intercepts errors thrown by `updateOne`, providing informative error messages and preventing silent failures.  This allows developers to identify and address issues more effectively.