module.exports = {
  tables: [
    {
      TableName: `wrTable`,
      KeySchema: [
        { AttributeName: 'pk', KeyType: 'HASH' },
        { AttributeName: 'sk', KeyType: 'RANGE' },
      ],
      GlobalSecondaryIndexes: [
        {
          IndexName: 'GSI1',
          KeySchema: [
            { AttributeName: 'GSI1', KeyType: 'HASH' },
            { AttributeName: 'sk', KeyType: 'RANGE' },
          ],
          Projection: { ProjectionType: 'ALL' },
        },
      ],
      AttributeDefinitions: [
        { AttributeName: 'pk', AttributeType: 'S' },
        { AttributeName: 'sk', AttributeType: 'S' },
        { AttributeName: 'GSI1', AttributeType: 'S' },
      ],
      BillingMode: 'PAY_PER_REQUEST',
    },
    // etc
  ],
  port: 8000,
};
