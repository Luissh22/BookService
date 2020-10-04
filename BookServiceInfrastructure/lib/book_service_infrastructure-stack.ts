import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class BookServiceInfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.Function(this, 'HelloWorldLambda', {
      code: lambda.Code.fromAsset('../BookServiceLambda/build/distributions/BookServiceLambda.zip'),
      handler: 'BookServiceLambda.activity.HelloWorldHandler',
      runtime: lambda.Runtime.JAVA_11,
      memorySize: 512
    });

  }
}
