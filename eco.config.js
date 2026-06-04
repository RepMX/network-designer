module.exports = {
  apps: [
    {
      name: "network-designer",
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      instances: "2", 
      exec_mode: "cluster",
      cwd: "./",
      env: {
        NODE_ENV: "production",
        PORT: 3001
      }
    }
  ]
}
