/* -- API --
  the `api` directory lets you execute any server-side code;
  folder *must* be named 'api'... or else >:3
*/
function handler(req, res) {
  res.status(200).json({ message: 'This works' });
}

export default handler;
