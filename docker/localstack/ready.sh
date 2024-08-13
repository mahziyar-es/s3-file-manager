#!/bin/bash

awslocal s3api create-bucket --bucket files

awslocal s3api put-bucket-cors --bucket files --cors-configuration '{
  "CORSRules": [
    {
      "AllowedHeaders": ["*"],
      "AllowedMethods": ["GET", "POST", "PUT", "DELETE"],
      "AllowedOrigins": ["*"]
    }
  ]
}'

awslocal s3api put-bucket-policy --bucket files --policy '{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::files/*"
    }
  ]
}'

