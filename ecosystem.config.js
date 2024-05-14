module.exports = {
    apps: [
      {
        name: 'ecommerce-api',
        script: 'node -r dotenv/config app',
        exec_mode: 'fork',
        autorestart: true,
        max_memory_restart: '150M',
      },
    ],
  };
