#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { BookServiceInfrastructureStack } from '../lib/book_service_infrastructure-stack';

const app = new cdk.App();
new BookServiceInfrastructureStack(app, 'BookServiceInfrastructureStack');
