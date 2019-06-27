/**
 * Created by wwsun on 2019/6/27.
 */

exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 301,
    headers: {
      Location: 'https://path/to/source'
    }
  };

  return callback(null, response);
}