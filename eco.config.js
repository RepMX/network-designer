module.exports = {
  apps: [
    {
      name: "next-app",
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
