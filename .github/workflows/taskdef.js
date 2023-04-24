const fs = require('fs')
require('dotenv').config()

taskdef_config = {
  executionRoleArn: `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/ecsTaskExecutionRole`,
  containerDefinitions: [
    {
      name: 'MenuApp',
      image: process.env.IMAGE,
      essential: true,
      portMappings: [
        {
          hostPort: 80,
          protocol: 'tcp',
          containerPort: 80
        }
      ]
    }
  ],
  requiresCompatibilities: ['EC2'],
  networkMode: 'awsvpc',
  cpu: '1024',
  memory: '512',
  family: 'MenuAppTask'
}

fs.writeFileSync('taskdef.json', JSON.stringify(taskdef_config))
