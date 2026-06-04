module.exports = {
  apps: [
    {
      name: "network-designer",
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      instances: "1", 
      exec_mode: "fork",
      cwd: "./",
      env: {
        NODE_ENV: "production",
        PORT: 3001
      }
    }
  ]
}
