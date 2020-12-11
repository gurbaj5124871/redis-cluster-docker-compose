const { DocumentClient } = require('aws-sdk/clients/dynamodb');

describe('Producer Test', () => {
  const isTest = process.env.JEST_WORKER_ID;
  const config = {
    convertEmptyValues: true,
    ...(isTest && { endpoint: 'localhost:8000', sslEnabled: false, region: 'local-env' }),
  };

  it('create new session', async () => {
    const ddb = new DocumentClient(config);
    await ddb
      .put({
        TableName: 'wrTable',
        Item: { pk: 'SESSION#1234', sk: '#METADATA#1234', title: 'sample' },
      })
      .promise();

    const { Item } = await ddb
      .get({ TableName: 'wrTable', Key: { pk: 'SESSION#1234', sk: '#METADATA#1234' } })
      .promise();

    expect(Item).toEqual({
      pk: 'SESSION#1234',
      sk: '#METADATA#1234',
      title: 'sample',
    });
  });
});
