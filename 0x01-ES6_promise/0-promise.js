export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resp = 'Response from the API';
      if (resp) {
        resolve(resp);
      } else {
        reject(new Error('Error: Failed to get a response from API'));
      }
    }, 2000);
  });
}
