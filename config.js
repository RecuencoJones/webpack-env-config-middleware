import 'dotenv/config';

export function createConfigHandler() {
  return [
    '/config.js',
    (req, res) => {
      res.type('text/javascript');
      res.send(`
        window.config = window.config || {};
        window.config.STAGE = '${ process.env.APP_CONFIG_STAGE }';
      `);
    }
  ];
}
