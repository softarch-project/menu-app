const fs = require('fs')
require('dotenv').config()

taskdef_config = {
  executionRoleArn: `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/ecsTaskExecutionRole`,
  containerDefinitions: [
    {
      name: 'MenuApp',
      image:
        '847602995110.dkr.ecr.ap-southeast-1.amazonaws.com/fastmenu-webapi',
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
  requiresCompatibilities: ['FARGATE'],
  networkMode: 'awsvpc',
  cpu: '256',
  memory: '512',
  family: 'MenuApp'
}

fs.writeFileSync('taskdef.json', JSON.stringify(taskdef_config))
